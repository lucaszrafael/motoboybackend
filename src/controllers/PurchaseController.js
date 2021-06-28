const { PurchaseModel, ProductModel } = require("../models");
const { Token } = require("../utils");

const { validateToken } = Token;

class PurchaseController {
  async index(req, res) {
    const { authorization } = req.headers;

    const [, token] = authorization.split(" ");

    const user = await validateToken(token);

    const purchases = await PurchaseModel.find({ userId: user.id })
      .populate({
        path: "user",
        select: ["_id", "email"],
      })
      .populate({
        path: "productId",
        select: ["_id", "name"],
      });

    res.status(200).json({ message: "Purchases founded", data: purchases });
  }

  async create(req, res) {
    const { authorization } = req.headers;
    let { productName, priceUnit, units, latitude, longitude } = req.body;

    const [, token] = authorization.split(" ");

    const user = await validateToken(token);

    if (!productName || !priceUnit || !units || !latitude || !longitude)
      return res.status(400).json({ message: "Missing fields on body" });

    productName = productName.toLowerCase();

    const productExists = await ProductModel.findOne({ name: productName });

    if (!productExists) return res.status(404).json({ message: "Product not founded" });

    const newPurchase = new PurchaseModel({
      productId: productExists._id,
      userId: user.id,
      purchasedAt: Date.now(),
      priceUnit,
      units,
      total: priceUnit * units,
      latitude,
      longitude,
    });

    await newPurchase.save();

    res.status(200).json({ message: "Purchase registered", data: newPurchase });
  }
}

module.exports = PurchaseController;
