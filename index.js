const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const tasksRouter = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", tasksRouter);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
