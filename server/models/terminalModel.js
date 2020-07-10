const mongoose = require('mongoose');

const terminalsSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  address: {
    type: String,
  },
  bank: mongoose.Schema.Types.ObjectId,
  state: String,
});

const Terminals = mongoose.model('Terminals', terminalsSchema);

module.exports = Terminals;
