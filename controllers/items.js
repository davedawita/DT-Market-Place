const express = require('express')
const nodemon = require('nodemon')
const router = express.Router()

const Item = require('../models/items.js')



//Index Route
router.get('/', async (req,res) => {
  const foundItems = await Item.find({})
  res.render('index.ejs', {
    items: foundItems
  })
})

//Show Route - For About us
router.get('/aboutus', async (req,res) => { 
  res.render ('aboutUs.ejs')
})



module.exports = router