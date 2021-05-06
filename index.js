const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
const corsOptions ={
  origin: "https://c3nbw.csb.app/",
  methods: "GET,POST"
}
const authRoute = require('./routes/auth');
const videoRoute = require('./routes/video')
const videoCategoryRoute = require('./routes/category')
const videoSaveRoute = require('./routes/savevideo')
//Connection to DB
require('./DB/initDB')

//Middleware
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("Hello")
})

//Route Middlewares
app.use('/api/user',authRoute);
app.use('/save',videoRoute);
app.use('/video/category',videoCategoryRoute);
app.use('/video',videoSaveRoute);

app.listen(8000,()=> console.log("Server Running ..."))