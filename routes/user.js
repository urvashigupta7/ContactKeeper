const express=require('express');
const router=express.Router();
const user=require('../models/user/user');
const auth=require('../middleware/auth');
router.post('/',async(req,res)=>{
	try{
		const addeduser=await user.create(req.body);
		const token= await addeduser.generatetoken();
	res.send({token});
	}catch(e){
		res.status(400).send('User already exists');
	}
	
})
router.post('/login',async(req,res)=>{
	try{

		const finduser= await user.findByCredentials(req.body.email,req.body.password);
		const token=await finduser.generatetoken();
		res.send({token});

	}catch(e){
		res.status(400).send('login fail');
	}
})
router.get('/',auth,(req,res)=>{
	try{
		res.send(req.founduser);
	}catch(e){
		res.status(400).send(e)
	}
})

module.exports=router;