import jwt from "jsonwebtoken";
import { db } from "../../config/db.js";
import { generateAccessToken } from "../../utils/jwt.js";

 const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  const [rows] = await db.query(
    "SELECT * FROM refresh_tokens WHERE token = ?",
    [token]
  );

  if (rows.length === 0) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const accessToken = generateAccessToken({ id: decoded.id, role: decoded.role });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
    });

    res.json({ message: "Token refreshed" });
  });
};
export default refresh;