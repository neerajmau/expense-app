const express = require("express");
const app = express();
require("./db/mongoose");
// const bcrypt = require("bcryptjs");
// const userRouter = require("./router/user");
const taskRouter = require("./router/task");
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on Port " + port);
});
