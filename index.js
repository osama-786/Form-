const express = require('express');
const app = express();

// Require Mongoose Module for connecting MongoDb to Node.
const mongoose = require("mongoose");

//Defining Local Host Port.
const port =4000;

//Importing Data Schema From Model .
const User = require("./model/user")
const Address =require("./model/address")

//Creating a body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs.
app.use(express.urlencoded({extended:true}));

//Establishing Connection To MongoDb using Connection url and using then and catch method for error handling.
mongoose.connect("mongodb+srv://osamafarooqui786:Osama%40786786@cluster0.hmro6bx.mongodb.net/?authMechanism=DEFAULT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
//Setting the view engine to ejs.
app.set("view engine", "ejs")

//Creating a route for displaying the html form we created.
app.get("/",(req,res) =>{
    res.render("index.ejs")
})
// defining Css file path.
app.use(express.static(__dirname + '/public'));

//Creating a route/endpoint for collecting and sending the user inputs to our MongoDb DataBase.
app.post("/", async(req,res)=>{
   const {username,
          address
        } = req.body;
   const AddressData ={address:address}     
   const UserData = {username:username}
   try{
    await User.insertMany([UserData])
    await Address.insertMany([AddressData])
    res.send("Submitted Data")
   console.log("Submitted Data");
   }catch (error){
    console.log(error);
   }
})
app.listen(4000,()=>{
    console.log(`app started on port ${port}`)
});