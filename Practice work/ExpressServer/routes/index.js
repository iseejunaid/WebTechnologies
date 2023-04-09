var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/destinations', function(req, res, next) {
  res.render('destinations');
});
module.exports = router;
