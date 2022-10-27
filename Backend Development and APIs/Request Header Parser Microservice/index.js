require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  let ipaddress = req.headers['x-forwarded-for'];
  res.json({ ipaddress, language, software });
});

var listener = app.listen(6676, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
