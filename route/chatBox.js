const express = require('express');
const router =express.Router();
const chatContent= require('../model/chatBox');
router.get('/',async(req,res)=>{
    try{
        
        const chatBox = await chatContent.find();
        console.log('Query String:',req.query.name);//gives JSON obj of queryString
        console.log('Headers: ' + JSON.stringify(req.headers));
        console.log('the request is recieved from the browser: ' + JSON.stringify(req.headers['user-agent']));
        res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        });
        res.json(chatBox)

    }
    catch(err){
        res.send('Error',err);
 }
    
   // res.send('get request')
})
router.get('/:name',async(req,res)=>{
    try{
        const chatBox = await chatContent.find();
        console.log('Query String:',req.query);//gives JSON obj of queryString
        var id= req.params.name;
        console.log('Query String params:',id);
       res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        });
        res.json(chatBox)

    }
    catch(err){
        res.send('Error',err);
 }
    
   // res.send('get request')
})



router.post('/',async(req,res)=>
{
    console.log(req.body);

    const chatdetails = new chatContent({
        name:req.body.name,
        message:req.body.message,
        date:req.body.date
    })
    try{
             const c = await chatdetails.save()
             res.json(c); 
    }
    catch(err){
        console.log('Error',err)
    }
})
module.exports = router; 