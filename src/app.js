const express = require("express");

const logger = require("./middlewares/logger");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const usersRoutes = require("./routes/users.routes");

const app = express();

//middleware que transforma a request em JSON
app.use(express.json());

//middleare de log
app.use(logger);
app.use(errorHandler);
app.use(notFound);
app.use("/api/v1/users", usersRoutes);

module.exports = app;
