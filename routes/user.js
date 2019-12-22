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
		res.send(e);
	}
	
})
router.post('/login',async(req,res)=>{
	try{

		const finduser= await user.findByCredentials(req.body.email,req.body.password);
		const token=await finduser.generatetoken();
		res.send({token});

		
		
	}catch(e){
		res.send(e);
	}
})
router.get('/',auth,(req,res)=>{
	try{
		res.send(req.founduser);
	}catch(e){
		res.send(e)
	}
})

module.exports=router;