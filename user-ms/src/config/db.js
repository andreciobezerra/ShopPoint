const mongoose = require("mongoose");

async function connectDB() {
  console.log(process.env.DB, "aqui", process.env);
  const conn = await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Mongo database connected on ${conn.connection.host}`);
}

module.exports = connectDB;
