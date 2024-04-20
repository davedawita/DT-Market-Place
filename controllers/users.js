const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')


router.get('/', (req, res) => {
    res.render('newUser.ejs')
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/', async (req, res) => {
    try {
        console.log('before hash: ', req.body)
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        console.log('after hash: ', req.body)
        // create the new user 
        const newUser = await User.create(req.body)
        req.session.currentUser = newUser
        res.redirect('/items/productslist')
    } catch (err) {
        console.log(err)
        res.status(500).send('Please try a different username or password.')
    }
})


router.post('/login', async (req, res) => {
  try {
      // check if the user exists in our database 
      const foundUser = await User.findOne({username: req.body.username})
      console.log(foundUser)
      // if found 
      if(foundUser) {
          const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
          if(isAMatch) {
              console.log('login successful')
              req.session.currentUser = foundUser
              res.redirect('/items/productslist')
          }
          else {
              res.status(500).send('Username or password does not match or does not exist.') 
          } 
      } else {
          res.status(500).send('Username or password does not match or does not exist.')
      }
  } catch (err) {
      console.log(err)
      res.status(500).send('Username or password does not match or does not exist.')
  }
})

router.delete('/logout', (req, res) => {
  req.session.destroy(err => {
      if(err) {
          console.log(err, '  logout failed')
          res.status(500).send('Logout failed, please try again')
      } else {
          res.redirect('/user/login')
      }
  })
})


module.exports = router