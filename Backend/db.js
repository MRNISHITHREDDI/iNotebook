const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://sainishithreddy:mPIZljx3Wu9RVtT7@inotebook.zjzcgdk.mongodb.net/inotebook?retryWrites=true&w=majority&appName=Inotebook";

const connectMongos = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // wait up to 30s
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

module.exports = connectMongos;
