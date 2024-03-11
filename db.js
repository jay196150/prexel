const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://jay196150:jay0534@cluster0.fhrmxci.mongodb.net/").then(()=>{
        console.log("connection successful"); 
    })
}

module.exports = connectToMongo;

