import mongoose from "mongoose";

const connectionDatabase = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connectionDatabase;
