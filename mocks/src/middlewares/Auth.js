export const authMiddleware = (req, res, next) => {
  req.header("authorization") == process.env.PASS
    ? next()
    : res.status(401).json({ error: "no autorizado" });
};
