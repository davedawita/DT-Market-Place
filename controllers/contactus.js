const express = require('express')
const router = express.Router()

//Index Route
router.get('/contactus', (req,res) => {  
  res.render('contactUs.ejs')  
})

router.post('/', async (req, res) => {
  try {    
    res.redirect('/items')
  } catch (err) {
    console.log('Error with Products Post: ', err)
    res.status(500).send(err)
  }
})

module.exports = router