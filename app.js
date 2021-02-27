const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = [];
const workItems = [];
var newToDoList;


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){

  let day = date.getDate();
  res.render("list", {listTitle:day, newListItems:items});
});

app.post("/",function(req,res){

  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
