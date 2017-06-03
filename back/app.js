const express = require('express')
const app = express()

app.get('/api/items', function (req, res) {
  res.send('Hello World: ' + req.query.q)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
