const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

author: { type: String, default: 'Anonymous' },
title:{
    type:String,
    required:true
},
image:{
     type:String,
      required:true
},
content:{
     type:String,
      required:true
},

})

const blogs = mongoose.model("blogs",blogSchema)

module.exports = blogs