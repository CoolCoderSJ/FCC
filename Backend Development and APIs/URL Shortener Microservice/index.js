require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const app = express();
let tempDict = {}

// Basic Configuration
const port = process.env.PORT || 6676;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/shorturl', function(req, res) {
  let url = req.body.url;
  if (url.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
  let short = Math.floor(Math.random() * 1000);
  tempDict[short] = url;
  res.json({ original_url: url, short_url: short });
  }
  else {
    res.json({ error: 'invalid url' });
  }
});

app.get('/api/shorturl/:shorturl', function(req, res) {
  let short = req.params.shorturl;
  res.redirect(tempDict[short]);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
