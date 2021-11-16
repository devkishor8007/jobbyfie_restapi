require("express-async-errors");
const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const authenticatedUser = require("./middleware/authenticated");
const app = express();
require("dotenv").config();
const helmet = require("helmet");
const xssclean = require("xss-clean");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("./db");

// error handler
const notfoundanything = require("./middleware/notfound");
const errorHandler = require("./middleware/errorhandler");

app.set("trust proxy", 1); // use this if we deploy our api to heroku serber

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit each ip to 100 requests per windowms
});
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xssclean());

// router

// routes
app.use("/api/v1/auth", require("./routes/auth_router"));
app.use("/api/v1/jobs", authenticatedUser, require("./routes/jobs_router"));
app.use("/api/v1/jobsview", require("./routes/jobview_router"));

app.use(notfoundanything);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
