const mongoose = require('mongoose');

const banksSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Banks = mongoose.model('Banks', banksSchema);

module.exports = Banks;
