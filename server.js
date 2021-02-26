// ----- environment variables -----
const dotenv = require("dotenv");
dotenv.config();
// ----- express -----
const express = require("express");
const app = express();
// ----- cors -----
const cors = require('cors');
app.use(cors());
// ----- data related -----
const connectDB = require('./config/dbConfig');
const bodyParser = require("body-parser");
// ----- import routes -----
const usersRoutes = require('./routes/usersRoutes');
const yRoutes = require('./routes/yRoutes');
const zRoutes = require('./routes/zRoutes');


// ----- database connection -----
connectDB();

// ----- bodyparsing -----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----- routes ------
app.use("/users", usersRoutes);
app.use("/y", yRoutes);
app.use("/z", zRoutes);
app.get("/", (req, res) => res.send("Welcome to our awesome Twitter Clone  API"));

// ----- server -----
const { PORT } = process.env || 4000;
app.listen(PORT, () =>
  console.log(`Server on, listening at Port: ${PORT}`)
);