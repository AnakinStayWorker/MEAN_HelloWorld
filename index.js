var express = require('express');
var app = express();

app.set("view engine", "ejs");

// app.get('/',function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
//  res.send('Hello World!'); // "Hello World!"를 보냅니다.
// });

app.use(express.static(__dirname + '/public'));

app.get("/hello", function(req,res){
  res.render("hello", {name:req.query.nameValue});
});

app.get("/hello/:nameParam", function(req,res){
  res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){
  console.log('Server On!');
});
