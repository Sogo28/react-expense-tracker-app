import mongoose from "mongoose";
import colors from 'colors';

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
  }
  catch (error) {
    console.log(`Error : ${error.message}`.red);
    process.exit(1);
  }
}