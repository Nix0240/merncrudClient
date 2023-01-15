import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-tp820sn-shard-00-00.f3eehh5.mongodb.net:27017,ac-tp820sn-shard-00-01.f3eehh5.mongodb.net:27017,ac-tp820sn-shard-00-02.f3eehh5.mongodb.net:27017/?ssl=true&replicaSet=atlas-ykneh3-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
