const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World");
});

app.listen(8001, function(){
    console.log('Listening on port 8001');
});