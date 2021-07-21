const express = require("express"); //include or import express
const bodyParser = require("body-parser"); //include or import body-parser
const { urlencoded } = require("body-parser");

const app = express(); //calling express function or (express is a class and app is an object)

app.use(bodyParser.urlencoded({extended: true})); // inorder to use bodyParser

app.get("/", function(req,res){
    res.send("Udain Srivastava :)");
});

app.get("/about", function(req,res){
    res.send("I am a Web Developer and a comptetive coder.");
});

app.get("/calculator", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req,res){
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1+n2;   

    res.send("The Sum of the two numbers is: "+sum);
});

app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");
}); //creating our own server


//res.sendFile(path [, options] [, fn]) this is used to send a file.