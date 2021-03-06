const mongoose = require('mongoose');

function shoutModel() {

  //Schema
  const shoutSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    date: { type: Date, default: Date.now }
  })

  shoutSchema.index({ author: 1 })

  //Model
  return mongoose.model('Shout', shoutSchema);
}

module.exports = shoutModel();
