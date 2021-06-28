const { UserModel } = require("../models");
const { PasswordHash, Token } = require("../utils");

const { compare } = PasswordHash;
const { generateToken } = Token;

class SignInController {
  async sign(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Credentials not provided" });

    const userExists = await UserModel.findOne({ email });

    if (!userExists) return res.status(404).json({ message: "User not found" });

    const passwordCheck = compare(password, userExists.password);

    if (!passwordCheck) return res.status(400).json({ message: "Invalid password" });

    userExists.password = undefined;

    const token = await generateToken({ id: userExists._id, email: userExists.email });

    return res.json({ message: "User founded", data: { user: userExists, token: token } });
  }
}

module.exports = SignInController;
