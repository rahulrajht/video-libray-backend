const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  thumbnails:{
    type:String,
    required:true,
  },
  videoId:{
    type:String,
    required:true,
  }
});

module.exports = mongoose.model('Video' , videoSchema);