//Requiring the mongoose module.
const mongoose = require("mongoose");
//Creating a Schema variable and assign it the Schema class from mongoose.
const userSchema1 = new mongoose.Schema({
    address:{
        type: String
    }
})
// Creating a mongoose model with the preferred name of the collection and the UserSchema created above.
const Address = mongoose.model('Address',userSchema1);
//Exporting Model.
module.exports = Address
