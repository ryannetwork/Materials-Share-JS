// server/server.js

/** require dependencies */
const express = require("express");
const routes = require("./server/routes/");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const flash = require("connect-flash");
const dotenv = require("dotenv").config();

const app = express();
const router = express.Router();

// ... other imports
const path = require("path");

//middleware for loggind - dev only
app.use(morgan("dev"));

const db = process.env.MONGODB_URI;
/** connect to MongoDB datastore */
mongoose
  .connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    console.log("db connected...");
    routes(app, db);
  })

  .catch(err => console.log(err));

/** set up middleware */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect flash
app.use(flash());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))

/** set up routes {API Endpoints} */
routes(router);

app.use("/api", router);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

let port = process.env.PORT || 5000;
/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
