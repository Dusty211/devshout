
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  //Schema
  let kittySchema = new mongoose.Schema({
    name: String
  });

  //Schema methods
  kittySchema.methods.speak = function() {
    let greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting)
  }

  //Model
  let Kitten = mongoose.model('Kitten', kittySchema);

  //Document
  let silence = new Kitten({ name: 'Silence'});
  console.log(silence.name);

  //Saved Document
  let fluffy = new Kitten({ name: 'fluffy' });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  //Find all kittens
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
  });

  //Find all kittens whos name begins with 'fluff'
  Kitten.find({ name: /^fluff/ }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
  });

});
