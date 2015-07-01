var fs = require("fs");
var express = require("express");
app = express.createServer();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});
app.listen(8080);