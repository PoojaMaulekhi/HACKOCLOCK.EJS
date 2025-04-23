const express = require("express");
const app = express();
const path = require("path");
const mongoose =require("mongoose");
const logWastemodel=require("./schema/logWaste.js");


// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(express.json()); // Parses JSON payload
//code necessary for post request.

app.set("view engine","ejs"); //for ejs
app.use(express.static(path.join(__dirname, "public")))  //for static files

app.get("/",(req,res)=>{
    res.render("dashboard.ejs")
})
 
 app.get("/logWaste",(req,res)=>{
     res.render("logWaste.ejs")
 })
 
 app.post("/waste", (req, res) => {
    try {
        // Accessing the data sent in the POST request
        const { location, weight, plastic } = req.body;
        logWastemodel.insertOne({
            location:location,
            weight:weight,
            plastic:plastic
        });
        console.log(`Location: ${location} , ${weight} ,${plastic} , Data received successfully!`);
        res.redirect("/waste")         //by redirecting it itself  calls get request to /waste.
    } catch (error) {
        console.error("Error:", error.message);
        res.send("An error occurred while processing your request.");
    }
});

 
app.get("/waste", async (req,res)=>{
let userdata= await logWastemodel.find({})
// console.log({userdata})
res.render("waste.ejs",{userdata})
});

app.listen(3000,()=>{
    console.log("port connected on 3000")
  
});

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
connection();







//mistakes


// app.listen(3000,(req,res)=>{
//     res.send("server connected")
// })  
//  incorrrect code => listen dont use req,res
// app.listen=>prototype, then callback function
//try catch block=> not directly apply in routes

// req.body=>Data is not visible in the URL; it is sent as part of the HTTP request body.
// req.params=> data sent in url