var express = require("express");
var app = express();

// "/" => "hi there!"  
app.get("/", function(req, res){
    res.send("Hi there!");
}); 
// "/bye" => "Goodbye"

app.get("/bye", function(req, res){
    res.send("<h1>Goodbye</h1>");
});
// "/dog" => "MEOW!"

app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /dog");
    res.send("<h1>MEOW!</h1><h2>MEOW!</h2><h3>MEWO!</h3>" );
});

app.get("/r/:subredditName", function(req, res){
    console.log(req);
    console.log(req.params);
    console.log("SOMEONE ACCESSED A SUBREDDIT");
    var subreddit = req.params.subredditName;
    res.send("<h1>WELCOME TO THE " +subreddit.toUppercase()+ " SUBREDDIT!</h1>");
});

app.get("r/:subredditName/comments/:id/:title/", function(req, res){
    console.log("SOMEONE ACCESSED A SPECIFIC SUBREDDIT");
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title;
    console.log("subreddit: " + subreddit);
    console.log("id: " + id);
    console.log("title: "+ title);
    res.send("<h1>WELCOME TO THE COMMENTS PAGE</h1>");
});

//the first request that matches, will be used -- order of routes matters
app.get("*", function(req, res){ //order of routes matters
    console.log("YOU ARE A STAR!");
    res.send("<h1>You are a STAR!</h1>")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});


