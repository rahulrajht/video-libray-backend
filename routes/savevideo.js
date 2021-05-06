const express = require("express");
const router = express.Router();

const Videos = require("../models/video")


router.post("/",async function (req,res){
  try{
    for(var i=0; i<req.body.length; i++){
      const Video = new Videos(req.body[i]);
      await Video.save();      
    }    
    res.json({sucess:true , message:"data stored successfully in databse"});
   
  }
  catch(err){
    res.status(500).json({ success: false, message: err.message })
  }
})

module.exports = router