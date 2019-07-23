const mongoose = require('mongoose');

function tagModel() {

  //Schema
  const tagSchema = new mongoose.Schema({
    shout: { type: mongoose.Schema.Types.ObjectId, ref: 'Shout' },
    tag: String
  })

  tagSchema.index({ hashtag: 1 })

  //Model
  return mongoose.model('Tag', tagSchema);
}

module.exports = tagModel();
