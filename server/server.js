const express = require('express');
let app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/carousel', (req, res) => {


});



app.use(express.static(__dirname + '/../client/dist'));
console.log('server is working!')


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});