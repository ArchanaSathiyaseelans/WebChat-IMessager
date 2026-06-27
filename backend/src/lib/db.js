import mongoose from "mongoose";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("Mongo_UrI is required");
    }
    const conn = await mongoose.connect(mongoUri);
    console.log("MONGODB connected", conn.connection.host);
  } catch (error) {
    process.exit(1);
    //1 means failed , 0 means success
  }
}
