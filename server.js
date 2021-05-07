const dotenv = require('dotenv').config()
const express = require("express")
const app = express()

if (dotenv.error){
    throw dotenv.error
}

// console.log(dotenv.parsed)

app.get("/", (req, res)=>{
    res.json({
        success:1,
        message:"'/' is equal to '/home', so, redirecting."
    });
    res.redirect(status=302, url="/home",
    )
    
});

app.get("/home", (req, res) =>{
    console.dir(req)
    res.json({
        
    })
});

app.get("/login", (req,res)=>{
    // res.redirect()
    res.json({
        success:1, 
        message:"Res from /login endpoint"
    })
});

app.listen(process.env.APP_PORT, ()=>{
    console.log("app.listen says: Server up and running"); 
});

