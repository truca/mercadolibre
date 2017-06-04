const express = require('express'), app = express(), axios = require("axios"), R = require('ramda'),
  cors = require('cors'), spdy = require('spdy'), path = require('path'), fs = require('fs')

const port = 3000;

app.use(cors())
app.use(express.static('public'));

app.get('/api/items', function (req, res) {
  //res.send('Hello World: ' + req.query.q)
  axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+req.query.q).then(results => {
    console.log("Items success");
    const data = results.data
    let categories = []
    let items = R.map(item => {
      categories.push(item.category_id);
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price / 1),
          decimals: item.price % 1
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }
    }, data.results);
    res.send(JSON.stringify({author: {name: "Ignacio", lastname: "Ureta"}, categories, items}))
  }).catch(error => {
    console.log("Error on items", error)
    res.send(JSON.stringify(error))
  })
})

app.get('/api/items/:id', function (req, res) {
  Promise.all([
    axios.get("https://api.mercadolibre.com/items/" + req.params.id),
    axios.get("https://api.mercadolibre.com/items/" + req.params.id + "/description")
  ]).then(results => {
    console.log("Element success", results)

    const item = results[0].data;
    const description = results[1].data;

    res.send(JSON.stringify({
      author: {
        name: "Ignacio",
        lastname: "Ureta"
      },
      item: {
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price / 1),
          decimals: item.price % 1
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text
      }
    }))
  }).catch(error => {
    console.log("Error on element", error)
    res.send(JSON.stringify(error))
  })
})

/*app.get('*', (req, res) => {
    res
      .status(200)
      .json({message: 'ok'})
})*/

const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert:  fs.readFileSync(__dirname + '/server.crt')
}

spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })

/*app.listen(3000, function () {
  console.log('Mercadolibre app running on port 3000')
})*/
