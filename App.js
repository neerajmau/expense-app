const express = require("express");
const app = express();
require("./db/mongoose");
const taskRouter = require("./router/task");

// app.use(express.json());
// app.use(taskRouter);
app.use("/", (req, res) => {
  res.send("App is runing");
});
module.exports = app;
