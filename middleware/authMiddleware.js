export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  // Add token validation logic here
  next();
};
