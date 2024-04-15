const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema(
  {
  name: {type: String, required: true},
  description: String,
  img: String,
  price: {type: Number, min: 0},
  qty: {type: Number, min: 0},

  }
)
const Item = mongoose.model('Item', itemSchema)

module.exports = Item
