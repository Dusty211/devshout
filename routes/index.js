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
  // let responseText = 'Hello World!<br>'
  // responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  // res.send(responseText)
  res.json({
    "TestArrayKey": [
      {
        "1": "one",
        "2": "two",
        "3": "three",
      },
      {
        "4": "four",
        "5": "five",
        "6": "six",
      },
      {
        "7": "seven",
        "8": "eight",
        "9": "nine",
      },
    ],
  })
})


// router.get('/', function(req, res, next) {
//   res.send('Hello World!');
// });

module.exports = router;
