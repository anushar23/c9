var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var friends=["ab","cd","ef","gh","eghj"];

app.set("view engine","ejs");

app.get("/", function(req,res){
    
    res.render("home");
});

app.get("/friends", function(req,res){
    
    
    res.render("friends",{friends:friends});
});

app.post("/addFriends", function(req,res){
    console.log(req.body);
    var addName=req.body.addFriend;
    friends.push(addName);
    res.redirect("/friends");
    
    
})


app.listen(process.env.PORT, process.env.ID,function(){
    console.log("server started!");
    
})