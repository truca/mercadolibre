const express = require('express'), app = express(), axios = require("axios"), R = require('ramda')

app.get('/api/items', function (req, res) {
  //res.send('Hello World: ' + req.query.q)
  axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+req.query.q).then(results => {
    console.log("Fetched data");
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
    res.send(JSON.stringify({author: {}, categories, items}))
  }).catch(error => {
    console.log("Error", error)
    res.send(JSON.stringify(error))
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
