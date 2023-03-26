const express=require("express")
require("dotenv").config()
const app=express()
const PORT=process.env.PORT || 7500;
app.get("/",(req,res)=>{
    res.send("welcome to fastor")
})

app.listen(PORT,()=>{
    console.log(`connecting to the PORT ${PORT}`)
})