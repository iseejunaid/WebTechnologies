const mongoose = require("mongoose");

let mailSchema = mongoose.Schema({
    name:String,
    email:String,
})
let Model = mongoose.model("Mail",mailSchema);
module.exports = Model;