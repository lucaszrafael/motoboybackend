const { Token } = require("../utils");

const { validateToken } = Token;

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(400).json({ message: "No token provided" });

  const [, token] = authorization.split(" ");

  try {
    await validateToken(token);

    next();
  } catch (error) {
    return res.status(404).json({ message: "Invalid token provided" });
  }
};

module.exports = { authMiddleware };
