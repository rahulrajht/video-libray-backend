const mongoose = require('mongoose')
const VideosSchema = new mongoose.Schema({
  language:{
    type:String,
    required:true,
  },
  publishedAt:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true,
  },
  videoId:{
    type:String,
    required:true,
  },
  thumbnails:{
    type:String,
    required:true,
  },
  isLiked:{
    type:Boolean
  },
  channelTitle:{
    type:String,
  }
  
});

module.exports = mongoose.model('Videos' , VideosSchema);