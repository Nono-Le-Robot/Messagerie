const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});


app.get("/", function(req,res){
  let newDirName = __dirname.slice(NaN,25)
  res.sendFile(newDirName +'/portfolio.html')
})
app.get("/messagerie", function(req,res){
  let newDirName = __dirname.slice(NaN,25)
  res.sendFile(newDirName +'/messagerie/front/login.html')
})

app.get("/messagerie/register", function(req,res){
  let newDirName = __dirname.slice(NaN,25)
  res.sendFile(newDirName +'/messagerie/front/register.html')
})






module.exports = app;
