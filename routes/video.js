const router = require('express').Router();
const User = require('../models/user');
const Video = require('../models/videoList');
const Videos = require("../models/video")

router.post('/liked-videos', async (req,res)=>{

  const isEmailExist = await User.findOne({email:req.body.email})
  if(isEmailExist) {
    const data = await User.findOneAndUpdate({email:req.body.email},{
      $addToSet:{
          likedVideos:{videoId: req.body.videoId,isLiked:true}
      }
    })
     res.status(200).send("Video Added Successfully");
  }


})
router.post('/liked', async (req,res)=>{
 
  try{
    const user = await User.findOne({email:req.body.email});
    const data = user.likedVideos;
    const result = []
    for(var i=0 ; i<data.length ;i++){
      const item = await Videos.findOne({videoId:data[i].videoId})
      result.push({...item,isLiked:data[i].isLiked})
    }
    console.log(result);
     res.status(200).send(result);
  }catch{
    res.status(400).send("Empty")
  }
    
})

router.post('/liked-videos-remove', async (req,res)=>{
  try{
    const user = await User.findOneAndUpdate({email: req.body.email},{ 
      $pull:{ likedVideos: {videoId: req.body.id } } })
    console.log(user.likedVideos)
     res.status(200).send("Removed Successfully")
  }
  catch{
    res.status(400).send("Empty")
  }
    
})

router.post('/new-playlist', async (req,res)=>{
  try{
    const user = await User.findOneAndUpdate({email: req.body.email},{ 
      $addToSet:{ playList: {name: req.body.name,list:[] } } })
   res.status(200).send("Added");
  }
  catch{
    res.status(400).send("Empty")
  }
    
})

router.get('/playlist/:email', async (req,res)=>{
 
  try{
    const user = await User.findOne({email: req.params.email})
    console.log(user)
    res.status(200).send(user.playList);
  }
  catch{
    res.status(400).send("Empty")
  }
    
})


module.exports = router;


