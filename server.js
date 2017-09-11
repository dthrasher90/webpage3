var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/', function (req, res){
  console.log("hello world");
    res.sendFile('index.html');
});

app.get('/#blog', function (req, res){
  console.log("hello world");
    res.sendFile('blog.html');
});



app.listen(process.env.PORT || 2000, function () {
  console.log('Website launched on port 3000!')
});
