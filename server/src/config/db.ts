import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not defined");

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "GND"
    });

    console.log("✅ MongoDB connected (Mongoose)");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};