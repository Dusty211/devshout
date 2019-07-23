const mongoose = require('mongoose');

function likeModel() {

  //Schema
  const likeSchema = new mongoose.Schema({
    shout: { type: mongoose.Schema.Types.ObjectId, ref: 'Shout' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })

  likeSchema.index({ shout: 1, user: 1 })

  //Model
  return mongoose.model('Like', likeSchema);
}

module.exports = likeModel();
