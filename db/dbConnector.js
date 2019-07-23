const mongoose = require('mongoose');

module.exports = class DbConnector {

  connect() {
    mongoose.connect('mongodb://localhost/gitshout', {useNewUrlParser: true});
    mongoose.set('useCreateIndex', true);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection errror:'));
    db.once('open', function() {
      console.log("DbConnect success!")
    });
  }

}
