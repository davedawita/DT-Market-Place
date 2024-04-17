//DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const app = express()

const session = require('express-session')
const bcrypt = require('bcrypt')

require('dotenv').config()
const mongoose = require('mongoose')

//CONFIG
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

//Custom auth middleware
const isAuthenticated = (req, res, next) => {
  console.log(req.session.currentUser)
  if(req.session.currentUser) {
    next()
  } else {
    res.redirect('/users/login')
  }  
}

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(
  session({
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }
  )
)

//STATIC CSS
app.use(express.static('public'))

//CONTROLLERS

const itemsController = require('./controllers/items.js')
app.use('/items', itemsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)
app.use(isAuthenticated)




//TOP LEVEL ROUTES
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//CONNECT TO MONGO
mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + 'error with mongo connection'))
db.on('connected', () => console.log('mongo is connected'))
db.on('disconnected', () => console.log('mongo is disconnected'))


//RUN SURVER
app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
}
)

