const express=require("express");

const path= require("path");

const app = express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/logIn",(req,res) => {
    res.sendFile(path.join(__dirname, "/views/logIn.html"))
});

app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.listen(process.env.PORT || 3050,() => console.log("El hamster corre a 3050"));

app.use(express.static("public"));