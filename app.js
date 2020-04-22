const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Routes
const recipeRoutes = require('./routes/recipes')
// const authRoutes = require('./routes/auth')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Use routes
app.use('/recipes', recipeRoutes)
// app.use('/auth', authRoutes)

// Use errors
app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    res.status(status).json({ message: message})
})

// Mongoose connect to mongodb
mongoose.connect('mongodb+srv://darrinbh:1kingfred@crud-server-xnhuy.mongodb.net/posts?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewURLParser:true})
.then(result => {
    app.listen(process.env.PORT || 8080)
}).catch(err => console.log(err))
