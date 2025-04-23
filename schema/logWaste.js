const mongoose =require("mongoose");

const logWaste= new mongoose.Schema({
    location:{
        type:"String"
    },
    weight:{
         type:"Number"
    },
    plastic:{
        type:"String"
    }
})

const logWastemodel=mongoose.model("logWastemodel",logWaste);
module.exports = logWastemodel; //export way in cjs