const express = require("express");
const cors = require("cors");

const routes = require("./routes/index");
const globalErrHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: "15kb",
  })
);

// Routes
app.use("/api/v1", routes);

// handle undefined Routes
app.use("*", (req, res, next) => {
  console.log(req.originalUrl);
  const err = new AppError(404, "fail", "undefined route");
  next(err, req, res, next);
});

app.use(globalErrHandler);

const port = 8080;
app.listen(port, function () {
  console.log("Your app running on port " + port);
});

module.exports = app;
