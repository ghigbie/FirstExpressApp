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

app.get("*", function(req, res){
    console.log("YOU ARE A STAR!");
    
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});


