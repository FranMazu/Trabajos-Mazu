const express=require("express");

const path= require("path");

const app = express();

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.listen(process.env.PORT || 3050,() => console.log("El hamster corre a 3000"));

app.get("/logIn",(req,res) => {
    res.sendFile(path.join(__dirname, "/views/logIn.html"))
});

app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.use(express.static("public"));