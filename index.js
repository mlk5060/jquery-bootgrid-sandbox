var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.post('/data', function(req, res) {
  console.log("Request body = " + req.body);

  var rows = [
    {
      "id": 19,
      "sender": "123@test.de",
      "received": "2014-05-30T22:15:00"
    },
    {
      "id": 14,
      "sender": "123@test.de",
      "received": "2014-05-30T20:15:00"
    }
  ];

  var data = {
    "current": 1,
    "rowCount": 10,
    "rows": rows,
    "total": rows.length
  }

  res.json(data)
})

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});