const blogs = require("../model/blogModel")
const users = require("../model/userModel")


exports.addBlogController= async(req, res)=>{

    const {title,image,content} = req.body
    const userId = req.payload.userId

    try {
        const user = await users.findOne({_id:userId})
        const newBlog = new blogs({
title,image,content,author:user.username

        })

        await newBlog.save()
        res.status(200).json(newBlog)
        
    } catch (error) {
         res.status(500).json(error)
    }
}

exports.getBlogController = async(req,res)=>{
    try {

        const allBlogs = await blogs.find()
           res.status(200).json(allBlogs)
        
    } catch (error) {
           res.status(500).json(error)
    }
}