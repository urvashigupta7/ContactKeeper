const jwt=require('jsonwebtoken');
const user=require('../models/user/user');
const config=require('config');
const auth=async function(req,res,next){
	const token=req.header('x-auth-token');
	if(!token){
		return res.send({msg:'no token'})
	}
	else{
		try{
		const decoded= await jwt.verify(token,config.get('jwtsecretkey'));
		const finduser= await user.findOne({_id:decoded._id});
			req.founduser=finduser;
			next();
	
		}catch(e){
			return res.send({msg:'invalid token'});	
		}
	}
}
module.exports=auth;