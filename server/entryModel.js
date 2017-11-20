const mongoose = require('mongoose')

// define the User model schema
const EntrySchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    index: { unique: true }
  },
  age: Number,
  gender: String,
  state: String,
  results: [Number],
});

module.exports = mongoose.model('Entry', EntrySchema)