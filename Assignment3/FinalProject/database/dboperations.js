const Schema = require('./schema');

const addTour = async (title,persons,days,price,location) => {
    let tour = new Schema();
    tour.title = title;
    tour.persons = persons;
    tour.days = days;
    tour.price = price;
    tour.location = location;
    await tour.save();
    console.log('addTour saved successfully');
}
const editTour = async (id,title,persons,days,price,location) => {
    let tour = await Schema.findById(id);
    tour.title = title;
    tour.persons = persons;
    tour.days = days;
    tour.price = price;
    tour.location = location;
    await tour.save();
    console.log('addTour Updated successfully');
}

const getAllTours = async () => {
    let tours = await Schema.find({});
    return tours;
}

const getTourById = async (id) => {
    let tour = await Schema.findById(id);
    return tour;
  }
  

const deleteTour = async (id) => {
    await Schema.findByIdAndDelete(id);
    console.log('Tour deleted successfully');
}
module.exports.addTour = addTour;
module.exports.getAllTours = getAllTours;
module.exports.deleteTour = deleteTour;
module.exports.editTour = editTour;
module.exports.getTourById = getTourById;