const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const empRoutes = require("./routes/employeeRoutes");
app.use("/myproj/api/v1", empRoutes);


app.use(errorMiddleware);

module.exports = app;