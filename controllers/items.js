const express = require('express')

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

//Contact Us Route
router.post('/contactus', async (req, res) => {
  try {    
    res.send('Contact request submission is successful. We will get back to you with the soonest possible time. You can click the back arrow to go back.')
  } catch (err) {
    console.log('Error with Products Post: ', err)
    res.status(500).send(err)
  }
})


module.exports = router