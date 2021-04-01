require("dotenv").config({ path: "src/.env" });
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan")
const { unknownEndpoints, errorHandler } = require("./middlewares/error");
const connectDb = require("./config/db");
const app = express();

connectDb();
app.use(express.json());
app.use(morgan("dev"))

//routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(unknownEndpoints);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});
