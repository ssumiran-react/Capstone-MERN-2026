import mongoose from "mongoose";

async function dbConn() {
  try {
    await mongoose.connect(process.env.MongodbUrl);
      console.log("MongoDB MERN connection.");
  }catch(e) {
      console.log(e);
  }
}

export default dbConn;