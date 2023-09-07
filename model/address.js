const mongoose = require("mongoose");
const userSchema1 = new mongoose.Schema({
    address:{
        type: String
    }
})

const Address = mongoose.model('Address',userSchema1);
module.exports = Address