const mongoose = require("mongoose");

async function connectDB() {
  const dbUris = new Map([["development", process.env.DB_DEV]]);
  const uri = dbUris.get(process.env.NODE_ENV);

  const conn = await mongoose.connect(dbUris.get(process.env.NODE_ENV), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Mongo database connected on ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
