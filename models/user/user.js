const mongoose=require('mongoose');
const validator=require('validator');
var bcrypt=require('bcryptjs');
var config=require('config');
const jwtsecretkey=config.get('jwtsecretkey');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true,
		lowercase:true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error('email is invalid');
			}
		}
	},
	
	password:{
		type:String,
		required:true,
		minlength:6
	},
	date:{
		type:Date,
		default:Date.now
	}
	
})
userSchema.pre('save',async function(next)
			  {
	const curruser=this;
	if(curruser.isModified('password'))
		{
			curruser.password=await bcrypt.hash(curruser.password,8);
		}

	next();
});
userSchema.methods.generatetoken=async function(){
	const curruser=this;
	var token;
	if(process.env.NODE_ENV==='production'){
         token=await jwt.sign({_id:curruser._id.toString()},process.env.jwtsecretkey)
	}else{
	 token= await jwt.sign({_id:curruser._id.toString()},jwtsecretkey)
	}
	return token;
}
userSchema.statics.findByCredentials=async (email,password)=>{
	const finduser= await user.findOne({email:email});
	if(!finduser){
		throw new Error("invalid email");
	}
	const ismatch= await bcrypt.compare(password,finduser.password);
	if(!ismatch){
		throw new Error('unable to login'); 
	}
	else{
	return finduser;
	}
}
const user=mongoose.model('user',userSchema);
module.exports=user;
