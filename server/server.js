const express = require('express');
let app = express();
const db = require('../database/index');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static('client/dist'))
app.get('/api/carousel/:id', (req, res) => {
  console.log('params', req.params);
  db.getImgByProductId(Number(req.params.id), (err, data) => {
    if (err) {
      //console.log(err)
      res.status(400).send();
    } else {
      //console.log(data);
      //console.log('here')
      res.status(200).send(data);
    }
  });
});



app.use(express.static(__dirname + '/../client/dist'));
console.log('server is working!')


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});