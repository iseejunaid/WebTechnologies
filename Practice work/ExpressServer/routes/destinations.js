var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/destinations', function(req, res, next) {
  res.send('Hello');
});
module.exports = router;
