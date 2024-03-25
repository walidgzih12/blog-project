
const db = require('../model/index');


module.exports = {

    getAllBlog: async(req,res)=>{
        try{
            const blog = await db.blog.findAll({});
            res.status(200).send(blog);
        }
        catch(error){
            throw error;
        }
    },
///////

    getOneBlog: async(req,res)=>{
        try{
            const blog = await db.blog.findOne({where: {title:req.params.title}});
            res.status(200).send(blog);
        }
        catch(error){
            throw error;
        }
    },
/////

postBlog: async (req, res) => {

    const id=req.params.UserId
    try {
        const blog = await db.blog.create(req.body,id)

        res.status(201).json(blog);
    } catch (error) {
        console.error("you haave an error", error);
        res.status(200).send(error);
    }
},

/////

    updateBlog: async(req,res)=>{
        try{
            const blog = await db.blog.update(req.body,{where: {title: req.params.title}});
            res.status(201).send(blog)
        }
        catch(error){
            throw error
        }
    },
/////

    deleteBlog: async(req,res)=>{
        try{
            const blog = await db.blog.destroy({where: {title: req.params.title}});
            res.json(blog);
        }   
        catch(error){
            throw error
        }
    }

















}