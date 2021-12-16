var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var incomeSchema = new Schema({

    
}, { timestamps: true });

var Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
