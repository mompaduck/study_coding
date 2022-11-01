const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')

//https://www.npmjs.com/package/method-override
//method-override 사용
// npm install method-override
const methodOverride = require('method-override')

// main().catch(err => console.log(err))

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/farmStand")
//   console.log("Connected to MongoDB")
//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }

mongoose
  .connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => console.log(err))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method')) // override with POST having ?_method=DELETE

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async (req, res) => {
  const { category } = req.query
  if (category) {
    const products = await Product.find({ category: category })
    console.log(products)
    res.render('products/index', { products, category })
  } else {
    const products = await Product.find({})
    res.render('products/index', { products, category: 'All' })
  }
})

app.get('/products/new', async (req, res) => {
  res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body)
  await newProduct.save()
  res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/show', { product })
})
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/edit', { product, categories })
})

//Put 요청은 객체를 재정의하거나 교체할 때 사용
//Patch 요청은 문서나 객체의 일부를 변경할 때 사용

app.put('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true
  })
  res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  const deletedProduct = await Product.findByIdAndDelete(id)
  res.redirect(`/products`)
})

app.listen(3000, () => {
  console.log('App is Listening on Port 3000!')
})
