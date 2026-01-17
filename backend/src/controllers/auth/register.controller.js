import bcrypt from "bcrypt";
import { db } from "../../config/db.js";

 const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  res.status(201).json({ message: "User registered successfully" });
};

export default register;