var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var expenseSchema = new Schema(
  {
    expname: { type: String },
    category: { type: [String], required: true },
    amount: { type: Number, required: true },
    date: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

var Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
