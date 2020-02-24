const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const recipeRoutes = require('./routes/recipes')
// const mongoConnect = require('.util/database')

const app = express()

app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/recipes', recipeRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    res.status(status).json({ message: message })
})

mongoose.connect('mongodb+srv://darrinbh:1kingfred@crud-server-xnhuy.mongodb.net/test?retryWrites=true&w=majority').then(result => {
    app.listen(8080)
}).catch(err => console.log(err))
// app.listen(8080)