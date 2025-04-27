const mongoose =require("mongoose");

const signup= new mongoose.Schema({
    username:{
        type:"String"
    },
    password:{
         type:"String"
    },
    email:{
        type:"String"
    }
})

const signuppage=mongoose.model("signuppage",signup);
module.exports = signuppage; //export way in cjs