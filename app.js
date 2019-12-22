var express=require('express');
var app=express();
var mongoose=require('mongoose');
var config=require('config');
var db=config.get('mongoURI');
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
const PORT=process.env.PORT||3000;

mongoose.connect(db,{ 
	useNewUrlParser: true,
     useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true});

app.use(express.json());
app.get('/',(req,res)=>{
	res.send('hello');
})
app.use('/api/users',require('./routes/user'))
app.use('/api/contacts',require('./routes/contacts'))
app.listen(PORT,process.env.IP,function(){
	console.log(`server has started on port ${PORT}`);
})