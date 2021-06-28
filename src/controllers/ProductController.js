const { ProductModel } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await ProductModel.find({});

    res.status(200).json({ message: "Products founded", data: products });
  }

  async create(req, res) {
    const { name } = req.body;

    const productName = name.toLowerCase();

    const productExists = await ProductModel.findOne({ name: productName });

    if (productExists) return res.status(400).json({ message: "Product already registered" });

    const newProduct = new ProductModel({
      name: productName,
    });

    await newProduct.save();

    res.status(200).json({ message: "Product registered", data: newProduct });
  }

  async findByName(req, res) {
    const { name } = req.query;

    const productName = name.toLowerCase();

    const productExists = await ProductModel.findOne({ name: productName });

    if (!productExists) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product founded", data: productExists });
  }
}

module.exports = ProductController;
