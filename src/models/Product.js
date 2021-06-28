const { Schema, model } = require("../database");

const Product = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
  },
  { versionKey: false }
);

module.exports = new model("Product", Product);
