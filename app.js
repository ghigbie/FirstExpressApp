var express = require("express");
var app = express();

// "/" => "hi there!"  
app.get("/", function(req, res){
    res.send("Hi there!");
    
}); 
// "/by" => "Goodbye"
// "/dog" => "MEOW!"

app.listen(process.env.PORT, process.env.IP);


