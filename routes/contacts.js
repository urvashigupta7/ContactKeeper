const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const contact=require('../models/contact/contact')
//Get all contacts
router.get('/',auth,async(req,res)=>{
	try{
		const getcontacts=await contact.find({user:req.founduser._id}).sort({date:-1});
		res.send(getcontacts);
	}catch(e){
		res.send(e);
	}
})
//Add contacts
router.post('/',auth,async(req,res)=>{
	try{
	req.body.user=req.founduser._id;
	const addedcontact=await contact.create(req.body);
	res.send(addedcontact);
	}catch(e){
		res.send(e);
	}
})
//delete contacts
router.delete('/:id',(req,res)=>{
	
})
//edit contacts
router.put('/:id',(req,res)=>{
	
})

module.exports=router;