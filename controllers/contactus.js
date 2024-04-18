const express = require('express')
const router = express.Router()

//Index Route
router.get('/contactus', (req,res) => {  
  res.render('contactUs.ejs')
  // alert('Submission Successful. We will get back to you with the soonest possible time.')
})

module.exports = router