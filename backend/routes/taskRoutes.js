const express = require('express');
const Task = require('./models/Task');
const router = express.Router();


router.get("/", async (req, res) => {
  try{
    const tasks = await Task.find();
    res.json(tasks);
  }catch(error){
    res.status(500).json({error: "Failed to fetech the task."});
  }
});

router.post("/", async(req, res) => {
  try{
    const {title} =req.body;
    const newTask = new Task({title});
    await newTask.save();
    res.status(201).json(newTask);
  }catch(error){
    res.status(500).json({error: "Failed to create new Task."});
  }
});


module.exports = router;