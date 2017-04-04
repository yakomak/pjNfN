var path = require("path");
var express = require('express'),
    app = express();

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "public/index.html"));
})

app.use(express.static(__dirname + '/public'));

app.listen(3013, function () {
  console.log('Example app listening on port 3013!');
});