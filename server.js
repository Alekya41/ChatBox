const express = require('express');

const app=express();
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/ChatBox';
mongoose.connect(dbUrl ,
     { useNewUrlParser: true ,useUnifiedTopology: true }
 )
 mongoose.connection.once('open',function(){
     console.log("Hi Alekya....How are you going with this?")
 }).on('error',(error)=>{
     console.log('error is :',error);
 })
 
 app.use(express.json());
 app.use(express.static('view'));
 app.use(express.static('client'));
 app.use(express.static('media'));
 app.use(express.static('ChatBoxCSS'));
 const chatContentRouter = require('./route/chatBox');
 app.use('/',chatContentRouter );
const port =8085;

app.listen(port,()=>console.log(`listening on port  ${port}`))

