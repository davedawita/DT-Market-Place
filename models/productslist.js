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
const Items = mongoose.model('Items', itemSchema)

module.exports = Items