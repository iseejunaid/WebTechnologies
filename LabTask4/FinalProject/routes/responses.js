var express = require('express');
var dboperations = require('../database/dboperations');
var router = express.Router();
// // API endpoint to get responses
// router.get('/', function(req, res, next) {
//   axios.get('http://localhost:4000/api/responses')
//     .then(function(response) {
//       var responses = response.data;
//       res.render('responses', { responses: responses });
//     })
//     .catch(function(error) {
//       next(error);
//     });
// });

// router.post('/add', function(req, res, next) {
//   axios.post('http://localhost:4000/api/responses', { response: req.body})
//     .then(function(response) {
//       res.redirect('/responses');
//     })
//     .catch(function(error) {
//       next(error);
//     });
// });
router.post('/add', async (req, res) => {
  const { title, persons, days, location, price } = req.body;
  try {
    await dboperations.addTour(title, persons, days, price, location);
    res.json({ success: true });
  } catch (error) {
    console.error('Error adding tour:', error);
    res.status(500).json({ success: false, error: 'Failed to add tour' });
  }
});

router.get('/', async (req, res) => {
  try {
    const tours = await dboperations.getAllTours();
    res.render('responses.ejs', { tours: tours });
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.render('error.ejs', { error: 'Error fetching tours' });
  }
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;

  try {
    // Call the deleteTour function from your dboperations module to delete the tour
    await dboperations.deleteTour(id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting tour:', error);
    res.status(500).json({ success: false, error: 'Failed to delete tour' });
  }
});

router.get('/edit', async (req, res) => {
  const tourId = req.query.id;
  const tour = await dboperations.getTourById(tourId);
  console.log(tour);
  res.render('edit', { tour: tour });
});

router.post('/edit', async (req, res) => {
  const tourId = req.body.id;
  const tour = await dboperations.getTourById(tourId);
  console.log(tour);
  res.send(tour);
});

router.post('/update', async (req, res) => {
  const { id, title, persons, days, price, location } = req.body;

  try {
    // Find the tour by its ID
    const tour = await dboperations.getTourById(id);

    if (!tour) {
      // If the tour is not found, return an error response
      return res.status(404).json({ error: 'Tour not found' });
    }

    // Update the tour properties
    tour.title = title;
    tour.persons = persons;
    tour.days = days;
    tour.price = price;
    tour.location = location;

    // Save the updated tour
    await tour.save();

    // Return a success response
    res.status(200).json({ message: 'Tour updated successfully' });
  } catch (error) {
    // If an error occurs, return an error response
    console.error('Error updating tour:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
