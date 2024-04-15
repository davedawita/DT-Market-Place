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


//New Route



//Seed
router.get('/seed', async (req, res) => {
  const newItems =
    [
      {
        name: 'Nike Air Max',
        description: 'Nike Air Mac SC - Men\'s.',
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d94453ae-f341-4b1c-abe8-6d10902accf5/air-max-sc-mens-shoes-LR42xg.png',
        price: 90,
        qty: 7
      }, 
      {
        name: 'Nike - For Men',
        description: 'Nike Precision 6 Basketball Shoes.',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e196cd9a-e12b-4529-8ba2-a0333c08befc/precision-6-basketball-shoes-l7zDFB.png',
        price: 55.97,
        qty: 11
      }, 
      {
        name: 'Skirt - Ethiopian',
        description: 'Women\'s Slim Fit Sexy Dress Sleeveless Sling Ethiopian Print Dress Versatile Casual Short Skirt Chic And Elegant Woman Vestido',
        img: 'https://ae01.alicdn.com/kf/A8df39315ac994d6d829db3630dfc80f3d.jpg_640x640Q90.jpg_.webp',
        price: 14.10,
        qty: 0
      },
      {
        name: 'Shoes - For Women',
        description: 'ladie\'s Shoes - Boden US',
        img: 'https://www.boden.co.uk/content/dam/boden/shops-and-categories/2024/drop-4-ww-filterable-headers/shoes/WK13_FH_Shoes_02_HEELS_DT.jpg',
        price: 44.29,
        qty: 3
      },
      {
        name: 'Blouse - For Spring & Fall',
        description: 'Graphic Print Cold Shoulder Halter Blouse, Elegant Lantern Sleeve Blouse For Spring & Fall, Women\'s Clothing',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/fc03597e136d47cd41cb7c5125481eb8.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 25.16,
        qty: 38
      },
      {
        name: 'Top - Plus Size',
        description: 'Plus Size All Over Print Deep V Neck Zipper Front Tops, Women\'s Plus High Stretch Sexy Tops',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/484d0d8b5b547ebf7752eca229193375.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 22.48,
        qty: 11
      },
      {
        name: 'Top & Shirt - For Toddler',
        description: '2pcs Toddler Girls Knot Hem Tank Top & Vertical Stripes Belted Shorts Set Kids Summer Clothes',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7feff00dd4409951c9ee1f0e4a0a4264.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 17.23,
        qty: 4
      },
      {
        name: 'Winter & Fall Coat - For Women',
        description: 'Solid Color Open Front Jacket, Casual Lapel Neck Double Breasted Long Sleeve Jacket For Winter & Fall, Women\'s Clothing',
        img: 'https://img.kwcdn.com/product/fancy/a26afe82-4157-4ee0-ba57-644d69f66486.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 55.25,
        qty: 0
      },
      {
        name: 'Party Shoes - For Women',
        description: 'Women\'s Rhinestone Decor Shoes, Shallow Mouth Lightweight Slip On Trendy Shoes, Point Toe Party Show Shoes',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1b592e1110db4c373248d886a9e36fa8.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 17.99,
        qty: 2
      },
      {
        name: 'Winter Jacket - For Men',
        description: 'Men\'s Padded Hooded Jacket, Men Casual Padded Coat Windbreaker Zipper Pocket Stand Collar For Men Winter',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/de201256fc53c6d95500851a2284d50e.jpg?imageView2/2/w/800/q/70/format/webp',
        price: 65.00,
        qty: 5
      }

    ]

  try {
    const seedItems = await Item.create(newItems)
    res.redirect('/items')
  } catch (err) {
    res.send(err.message)
  }
})


//Show Route

//Create Route

//Edit Route

//Update Route


//Buy - Update Route

//Delete Route


module.exports = router