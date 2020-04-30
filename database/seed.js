var faker = require('faker');


const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'shmetsy'
});

connection.connect();

for (var i = 9; i < 100; i++) {
  var productid = (Math.floor(Math.random() * 9) + 2);
  var colorName = faker.commerce.color();
  var colorURL = faker.image.imageUrl();

  var queryString = `INSERT INTO colors (product_id, color_name, color_url) VALUES (${productid} , "${colorName}", "${colorURL}");`;

  connection.query(queryString, () => {});

}

//INSERT INTO colors (product_id, color_name, color_url) VALUES ( , "", "");


// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// var randomIMGURL = faker.image.imageUrl();
// var randomColor = faker.commerce.color();
// var a = faker.image.imageUrl();
// //console.log(randomName);
// console.log(Math.floor(Math.random() * 9) + 2);
// console.log(randomIMGURL);