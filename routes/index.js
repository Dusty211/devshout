const express = require('express');
const router = express.Router();
const Shout = require('../db/models/shout')

const saveShout = function () {
  return new Promise(function(resolve, reject){
    const newshout = new Shout;
    newshout.save(function (err, newshout) {
      resolve();
    })
  });
}

const allShouts = function () {
  return new Promise(function(resolve, reject) {
    Shout.find(function (err, shouts) {
      resolve(shouts);
    });
  });
}

router.get('/', async function (req, res) {
  await saveShout();
  const response = await allShouts();
  res.json(response);
});

module.exports = router;
