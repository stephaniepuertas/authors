const mongoose = require("mongoose")

// DEFINE SCHEMA
const AuthorSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true, "Title required"],
        minLength:[2, "Title must be 2 characters long"]
    
    // price:{
    //     type:Number,
    //     required:[true, "List a price"]
    // },
    // description:{
    //     type:String,
    //     required:[true, "Must write description"],
    //     minLength:[2, "description must be 2 characters long"]
    
    // under30Minutes:{
    //     type:Boolean,
    //     required:true
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;