const logout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    console.log("Refresh token:", token);

    if (token) {
      await db.query(
        "DELETE FROM refresh_tokens WHERE token = ?",
        [token]
      );
    }

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    };

    return res
      .status(200)
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .json({
        success: true,
        message: "Logged out successfully",
      });

  } catch (error) {
    console.error("LOGOUT ERROR:", error); // 👈 IMPORTANT
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

export default logout;
