    const db = require('../model/index.js');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');

    // const user = require('../model/user.js')

    module.exports = {

        getAllusers: async(req,res)=>{
            try{
                const user = await db.user.findAll({});
                res.status(200).send(user);
            }
            catch(error){
                throw error;
            }
        },



    //////
        getOneUser: async(req,res)=>{
            try{
                const user = await db.user.findOne({where:{id:req.params.id}});
                res.status(200).send(user)
            }
            catch(error){
                throw(error)
            }
        },
    //////

    signup: async (req, res) => {
        try {
            const {name,email,password } = req.body
             const existingUser = await db.user.findOne({where:{email}});
            if (existingUser) {
                return res.status(400).json({ message: "user already exist !" });
            }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({name,email,password: hashedPassword });
            res.status(201).send(newUser);
            await newUser.save();

        } catch (error) {
            throw error;
        }
    },


    
    
    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await db.user.findOne({ where:{email}});
            
            if (!user) {
                return res.status(400).json({ message: "User not found" });
            } 
         const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (passwordMatch) {
                const token = jwt.sign({ userId: user._id }, 'your secret key is in safe hands', {
                    expiresIn: '4h',
                });
                res.status(200).json({ token });
            } else {
                res.status(400).json({ message: "Wrong password or username" });
            }
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }   
    },
    
    
    

    
    
    
    ///////
    updateUser: async (req, res) => {
        try {
            // const {name, email, password} = req.body
            const updateUser = await db.user.update(req.body,{ where: { id: req.params.id } }
                );
                res.status(200).send(updateUser);
            } catch (error) {
                throw error;
            }
        },
        /////////
        
        deleteUser: async(req,res)=>{
            try{
                const user = await db.user.destroy({where: {id:req.params.id}});
                res.json(user);
            }
            catch(error){
                throw error
            }
        }
        
        
        




























        
        
    }
   