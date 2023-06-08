const mongoose = require('mongoose');
const dboperations = require('./dboperations');

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/tourDetails', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    //   dboperations.addTour("title",3,2,1000,"location");
    // dboperations.getAllTours()
    // .then(tours => {
    //   console.log(tours);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    // dboperations.deleteTour("6480aed778bec097596280f2")
    // dboperations.editTour("6480af89adf24675cfb92e43","edited",3,2,1000,"location");
    

    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };
  
  module.exports = connectDB;
  