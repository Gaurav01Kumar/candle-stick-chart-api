const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const candlestickRoute=require("./routes/candleStickRoute");
const app=express();

app.use(cors());
app.get("/",(req,res)=>{
  
  res.send("HELLO")
})
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/api",candlestickRoute)

module.exports=app;
