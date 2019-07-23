const mongoose = require('mongoose');

function mentionModel() {

//Schema
const mentionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  shout: { type: mongoose.Schema.Types.ObjectId, ref: 'Shout'},
})

mentionSchema.index({ user: 1 })

//Model
return mongoose.model('Mention', mentionSchema);
}

module.exports = mentionModel();
