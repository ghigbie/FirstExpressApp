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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. Yay!!!");
});


