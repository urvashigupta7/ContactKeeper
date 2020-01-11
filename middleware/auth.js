const jwt=require('jsonwebtoken');
const user=require('../models/user/user');

const auth=async function(req,res,next){
	const token=req.header('x-auth-token');
	if(!token){
		return res.send({msg:'no token'})
	}
	else{
		try{
			var decoded;
			if(process.env.NODE_ENV==='production'){
            	 decoded= await jwt.verify(token,process.env.jwtsecretkey);
			}
			else{
				const config=require('config');
		    decoded= await jwt.verify(token,config.get('jwtsecretkey'));
			}
		const finduser= await user.findOne({_id:decoded._id});
			req.founduser=finduser;
			next();
	
		}catch(e){
			return res.send({msg:'invalid token'});	
		}
	}
}
module.exports=auth;