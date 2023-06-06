var express = require('express');
var router = express.Router();

// Assume a random array of responses
var responses = [
  { text: 'Tour' },
  { text: 'Gilgit' },
  { text: 'Lets travel' }
];

// API endpoint to get responses
router.get('/responses', function(req, res) {
  res.json(responses);
});

router.get('/responses/:index', function(req, res) {
  var index = req.params.index;
  if(index < 0 || index >= responses.length) {
    return res.status(404).send('Response not found')
  }else{
    var response = responses[index];
    res.json(response);
  }
});

router.put('/responses/:index', function(req, res) {
  var index = req.params.index;
  responses[index] ={
    text: req.body.name
  }
  if(index < 0 || index >= responses.length) {
    return res.status(404).send('Response not found')
  }else{
    var response = responses[index];
    res.json(response);
  }
});
router.delete('/responses/:index', function(req, res) {
  var index = req.params.index;
  responses.splice(index, 1);
  res.send(responses)
  }
);

router.post('/responses', function(req, res) {
  responses.push({
    text: req.body.response
  });
  res.send(responses);
  }
);


module.exports = router;
