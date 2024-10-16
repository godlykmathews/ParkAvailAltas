const mongoose = require('mongoose');

const parkingSpotSchema = mongoose.Schema({
  name: { type: String, required: true },

  location: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  
  availability: { type: Boolean, required: true, default: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },

}, { timestamps: true });

const ParkingSpot = mongoose.model('ParkingSpot', parkingSpotSchema);

module.exports = ParkingSpot;