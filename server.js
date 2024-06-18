const express = require('express');
const app = express();

//Exercise 1

// Open your browser and navigate to http://localhost:3000  
app.listen(3000, () => {
    console.log('Listening on port 3000')
});

app.get('/greetings/:name', (req, res) => {
    res.send(`Hello there ${req.params.name}!`);
  });
  
  //http://localhost:3000/greetings/Ashley
  //Hello there Ashley!



  //Exercise 2

  app.get('/roll/:itemNumber', (req, res) => {
    const itemNumber = parseInt(req.params.itemNumber);
    if (itemNumber > 0){
        const roll = Math.floor(Math.random() * itemNumber) +1;
        res.send(`<h1>You rolled a ${roll}</h1>`);
    } else {
        res.send(`<h1>You must specify a number</h1>`)
    }

  });

  //Exercise 3

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  app.get('/collectibles/:indexParameter', (req, res) => {
    const index = parseInt(req.params.indexParameter);
    if (0 <= index && index <= 2) {
        res.send(`<h1>So, you want the ${collectibles[index].name}?, for ${collectibles[index].price}, it can be yours!"`);
    } else {
        res.send(`<h1>This item is not yet in stock</h1>`)
    }
  });

 //Exercise 4

 const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const minPrice = parseInt(req.query.minprice);
    const maxPrice = parseInt(req.query.maxprice);
    const type = req.query.type;

    let filteredShoes = shoes;
    
    if (minPrice >= 0 && maxPrice >=0) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice);
        
    }

    res.send(filteredShoes)
    });

