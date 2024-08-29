const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/game_panel";
const URI = process.env.MONGODB_URI
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Data base connected");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
