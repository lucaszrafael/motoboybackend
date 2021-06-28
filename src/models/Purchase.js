const { Schema, model } = require("../database");

const Purchase = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    purchasedAt: {
      type: Schema.Types.Date,
    },
    priceUnit: {
      type: Schema.Types.Number,
    },
    units: {
      type: Schema.Types.Number,
    },
    total: {
      type: Schema.Types.Number,
    },
    latitude: {
      type: Schema.Types.Number,
    },
    longitude: {
      type: Schema.Types.Number,
    },
  },
  { versionKey: false }
);

module.exports = new model("Purchase", Purchase);
