let tasks = require("../data/tasks.json");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const newTask = { id: Date.now(), title: req.body.title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.delete("/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).end();
});

module.exports = router;
