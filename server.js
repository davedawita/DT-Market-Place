//DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const app = express()

require('dotenv').config()

//CONFIG
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//STATIC CSS
app.use(express.static('public'))

//CONTROLLERS

//TOP LEVEL ROUTES
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//CONNECT TO MONGO

//RUN SURVER
app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
}
)

