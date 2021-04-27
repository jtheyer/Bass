const dotenv = require('dotenv').config()
const express = require("express")
// const envConfig = dotenv.config()
const app = express()

if (dotenv.error){
    throw dotenv.error
}

console.log(dotenv.parsed)

app.get("/", (req, res)=>{
    res.json({
        success:1,
        message:"Res from / endpoint"
    });
});

app.get("/page1", (req,res)=>{
    res.json({
        success:1, 
        message:"Res from /page1 endpoint"
    })
});

app.listen(process.env.APP_PORT, ()=>{
    console.log("app.listen says: Server up and running"); 
});

