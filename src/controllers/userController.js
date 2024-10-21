const express = require('express');
const userService = require('../services/userService')

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const {username, password} = req.body;
        const user = await userService.register(username, password)
        res.json(user);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.post('/login', async(req, res)=>{
    try{
        const {username, password} = req.body;
        //user service login
        res.json(token);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

//middleware
router.get('/users',(req, res)=>{
    try{
        //user service get users
        const {username, password} = req.body;
        res.json(users);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

module.exports = router;

