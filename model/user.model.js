const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone : String,
    password : String,
    email : String,
   
})

const user = mongoose.model("user", userSchema);

module.exports={user}