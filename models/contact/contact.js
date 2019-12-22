const mongoose=require('mongoose');
const validator=require('validator');
var config=require('config');
const contactSchema=new mongoose.Schema({
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'users'
	},
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		lowercase:true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error('email is invalid');
			}
		}
	},
	phone:{
		type:String
	},
	type:{
	type:String,
		default:'personal'
	},
	date:{
		type:Date,
		default:Date.now
	}
	
})
const contact=mongoose.model('contact',contactSchema);
module.exports=contact;
