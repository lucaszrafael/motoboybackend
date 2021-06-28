const { Schema, model } = require("../database");

const User = new Schema(
  {
    email: {
      type: Schema.Types.String,
    },
    password: {
      type: Schema.Types.String,
    },
  },
  { versionKey: false }
);

module.exports = new model("User", User);
