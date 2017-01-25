var express = require('express');
var app = express();

// app.get('/',function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
//  res.send('Hello World!'); // "Hello World!"를 보냅니다.
// });


app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('Server On!');
});
