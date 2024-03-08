const express = require("express");
const { getAllTask ,updateStatus } = require("../controller/task");
const TaskRouter = express.Router();

TaskRouter.post("/get-all-task" , getAllTask );
TaskRouter.get("/update-task-status/:id" , updateStatus );

module.exports = TaskRouter;