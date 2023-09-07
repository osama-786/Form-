//Requiring the mongoose module.
const mongoose = require("mongoose");
//Creating a Schema variable and assign it the Schema class from mongoose.
const userSchema = new mongoose.Schema({
    username:{
        type: String
    }
})
// Creating a mongoose model with the preferred name of the collection and the UserSchema created above.
const User = mongoose.model('UserData',userSchema);
//Exporting Model.
module.exports = User
