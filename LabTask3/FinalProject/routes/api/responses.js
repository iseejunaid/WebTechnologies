var express = require('express');
var router = express.Router();

// Assume a random array of responses
var responses = [
  { 
    id: 1,
    title: 'Tour1',
    persons: '3',
    days: '5',
    location: 'Gilgit',
    price: '10000'},

  { id: 2,
    title: 'Tour2',
    persons: '4',
    days: '2',
    location: 'Skardu',
    price: '12000'},

  { id: 3,
    title: 'Tour3',
    persons: '10',
    days: '2',
    location: 'Murree',
    price: '20000'}
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
  const id = req.body.response.id;
  const title = req.body.response.title;
  const persons = req.body.response.persons;
  const days = req.body.response.days;
  const location = req.body.response.location;
  const price = req.body.response.price;

  responses.push({
    id: id,
    title: title,
    persons: persons,
    days: days,
    location: location,
    price: price
  });

  res.send(responses);
});




module.exports = router;
