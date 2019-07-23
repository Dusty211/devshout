const mongoose = require('mongoose');

function userModel() {

  //Schema
  const userSchema = new mongoose.Schema({
    github: String,
    screenname: String,
    avatar: String,
    following: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', index: true }
  })

  userSchema.index({ screenname: 1, github: 1 })

  //Model
  return mongoose.model('User', userSchema);
}

module.exports = userModel();
