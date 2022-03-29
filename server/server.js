var express = require("express");
var app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(
    "To view your app, open this link in your browser: http://localhost:" + port
  );
});
