const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://workgkm:thisisgkm@clusterparkingapp.htl7b.mongodb.net/?retryWrites=true&w=majority&appName=ClusterParkingApp");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};


module.exports = connectDB;
