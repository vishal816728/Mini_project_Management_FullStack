const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(`mongodb+srv://PRO:pro@cluster0.jemsr.mongodb.net/management_db?retryWrites=true&w=majority`);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
