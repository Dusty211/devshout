
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  let kittySchema = new mongoose.Schema({
    name: String
  });
  let Kitten = mongoose.model('Kitten', kittySchema);
  let silence = new Kitten({ name: 'Silence'});
  console.log(silence.name);
});
