const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

require("./db/mongoose");
const taskRouter = require("./router/task");
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on Port " + port);
});
