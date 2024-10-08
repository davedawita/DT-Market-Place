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

//Custom auth middleware (To prevent users who are not logged in from seeing the productslist show page.)
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

const aboutusController = require('./controllers/aboutus.js')
app.use('/items', aboutusController)

const contactUsController = require('./controllers/contactus.js')
app.use('/items', contactUsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)
app.use(isAuthenticated)

const productslistController = require('./controllers/productslist.js')
app.use('/items/productslist', productslistController)




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


//RUN SERVER
app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
}
)

