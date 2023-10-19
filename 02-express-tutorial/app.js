console.log('Express Tutorial')
const express = require('express')
const app = express()
const { products } = require("./data");

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
  res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
  res.json(products);
})

/**
  Commented code intentionally left here, don't delete
*/
// app.get('/api/v1/products/:productID', (req, res) => {
//   console.log(req.params)
//   const singleProduct = products.find((product) => product.id === 1)
//   res.json(singleProduct);
// })

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (product === undefined) {
    res.status(404).json({ message: "That product was not found." })
  } else {
    res.json(product);
  }
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000...')
})