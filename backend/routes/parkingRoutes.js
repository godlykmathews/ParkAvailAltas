// routes/parking.js
const express = require('express');
const Parking = require('../models/ParkingSpot'); // Import the Parking model
const router = express.Router();

// GET all parking spots
router.get('/parking', async (req, res) => {
  try {
    const parkingSpots = await Parking.find(); // Fetch all parking spots from the database
    res.json(parkingSpots); // Send the data as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking spots' });
  }
});

// GET a specific parking spot by ID
router.get('/parking/:id', async (req, res) => {
  try {
    const parkingSpot = await Parking.findOne({ id: req.params.id }); // Find a parking spot by ID
    if (!parkingSpot) {
      return res.status(404).json({ message: 'Parking spot not found' });
    }
    res.json(parkingSpot);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking spot' });
  }
});

module.exports = router;
