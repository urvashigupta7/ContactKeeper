var express=require('express');
var app=express();
var mongoose=require('mongoose');
var config=require('config');
var db=config.get('mongoURI');
var bodyparser=require('body-parser');
var path=require('path');
app.use(bodyparser.urlencoded({extended:false}));
const PORT=process.env.PORT||4000;

mongoose.connect(db,{ 
	useNewUrlParser: true,
     useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true});

app.use(express.json());

app.use('/api/users',require('./routes/user'))
app.use('/api/contacts',require('./routes/contacts'))
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.listen(PORT,process.env.IP,function(){
	console.log(`server has started on port ${PORT}`);
})