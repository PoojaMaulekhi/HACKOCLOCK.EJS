const mongoose =require("mongoose");

async  function connection(){
    try{
        await  mongoose.connect("mongodb://localhost:27017/hackoclock") 
        console.log("mongodb connected suuccessfully")
    }
    catch(e){
        console.log(e.status)
        console.log("mongodb denied suuccessfully")

    }
}

module.exports = connection;
