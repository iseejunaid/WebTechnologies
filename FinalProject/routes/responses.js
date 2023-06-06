var express = require('express');
var router = express.Router();
var axios = require('axios');

// API endpoint to get responses
router.get('/', function(req, res, next) {
  axios.get('http://localhost:4000/api/responses')
    .then(function(response) {
      var responses = response.data;
      res.render('responses', { responses: responses });
    })
    .catch(function(error) {
      next(error);
    });
});

router.post('/add', function(req, res, next) {
  axios.post('http://localhost:4000/api/responses', { response: req.body.response })
    .then(function(response) {
      var responses = JSON.parse(response.config.data).response;
      // console.log(responses);
      res.render('responses', { responses: responses });
    })
    .catch(function(error) {
      next(error);
    });
});



module.exports = router;
