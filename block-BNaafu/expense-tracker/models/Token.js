var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var tokenSchema = new Schema(
  {
    expname: { type: String },
    
  },
  { timestamps: true }
);

var Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
