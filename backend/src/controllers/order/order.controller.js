import { db } from "../../config/db.js";

export const createOrder = async (req, res) => {
  // take user id from JWT
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Login required to place order" });
  }

  const { items } = req.body;

  console.log("Order request:", req.body);

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Items are required" });
  }

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    let total_price = 0;

    // 1. Create order record first (without total, will update later)
    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)",
      [userId, 0, "PENDING"]
    );

    const order_id = orderResult.insertId;

    // 2. Process each item
    for (const item of items) {
      // get product details from DB
      const [productRows] = await connection.query(
        "SELECT price, stock FROM products WHERE id = ?",
        [item.product_id]
      );

      if (productRows.length === 0) {
        throw new Error("Product not found: " + item.product_id);
      }

      const product = productRows[0];

      // stock validation
    //   if (product.stock < item.quantity) {
    //     throw new Error("Insufficient stock for product " + item.product_id);
    //   }

      // add to total
      const lineTotal = product.price * item.quantity;
      total_price += lineTotal;

      // insert order item using REAL price from DB
      await connection.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [order_id, item.product_id, item.quantity, product.price]
      );

      // decrease stock
      await connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [item.quantity, item.product_id]
      );
    }

    // 3. update order total
    await connection.query(
      "UPDATE orders SET total_price = ? WHERE id = ?",
      [total_price, order_id]
    );

    await connection.commit();

    return res.status(201).json({
      message: "Order placed successfully",
      order_id,
      total_price
    });

  } catch (error) {
    await connection.rollback();
    console.error(error);
    return res.status(500).json({ message: error.message || "Order failed" });
  } finally {
    connection.release();
  }
};
