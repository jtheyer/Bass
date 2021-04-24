const express = require("express")
const app = express()

app.get("/home", (req, res)=>{
    res.json({
        success:1,
        message:"Res from /home endpoint"
    });
});

app.listen(3000, ()=>{
    console.log("app.listen says: Server up and running"); 
});