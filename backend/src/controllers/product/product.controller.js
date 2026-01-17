import { db } from "../../config/db.js";

/**
 * @desc   Add product (Seller only)
 */
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const sellerId = req.user.id;

    if (!name || !price || !stock) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const query = `
      INSERT INTO products (name, description, price, stock, seller_id)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(query, [name, description, price, stock, sellerId]);

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc   Get all products (Public)
 */
export const getProducts = async (req, res) => {
  try {
    const [products] = await db.execute("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc   Update product (Seller owns product)
 */
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const sellerId = req.user.id;
    const { name, price, stock } = req.body;

    const [product] = await db.execute(
      "SELECT * FROM products WHERE id = ? AND seller_id = ?",
      [productId, sellerId]
    );

    if (product.length === 0) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await db.execute(
      "UPDATE products SET name=?, price=?, stock=? WHERE id=?",
      [name, price, stock, productId]
    );

    res.json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc   Delete product (Admin only)
 */
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await db.execute("DELETE FROM products WHERE id = ?", [productId]);

    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
