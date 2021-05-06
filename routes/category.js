const express = require("express");
const router = express.Router();

const Videos = require("../models/video")



router.get("/:name",async (req, res) => {
  const data = await Videos.find({language:req.params.name})
  res.json({sucess:true,data})
    
})

module.exports = router