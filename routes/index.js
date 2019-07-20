const express = require('express');
const router = express.Router();

//original static html homepage
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//middleware examples
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

router.use(myLogger)
router.use(requestTime)

//example route
router.get('/', function (req, res) {
  let responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})


// router.get('/', function(req, res, next) {
//   res.send('Hello World!');
// });

module.exports = router;
