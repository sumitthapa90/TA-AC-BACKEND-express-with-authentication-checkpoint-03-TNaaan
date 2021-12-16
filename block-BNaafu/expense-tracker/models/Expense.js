var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var expenseSchema = new Schema({

    
}, { timestamps: true });

var Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
