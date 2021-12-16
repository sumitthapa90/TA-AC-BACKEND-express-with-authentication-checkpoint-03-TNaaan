var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
const MongoStore = require("connect-mongo");
var flash = require("connect-flash");
var passport = require("passport");

require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/expense-tracker", (err) => {
  console.log(err ? err : "connected");
});

require("./modules/passport");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var clientsRouter = require("./routes/client");
var incomeRouter = require("./routes/income");
var expenseRouter = require("./routes/expense");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/expense-tracker",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/income", incomeRouter);
app.use("/client", clientsRouter);
app.use("/expense", expenseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
