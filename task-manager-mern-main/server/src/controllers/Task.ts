import { Request, Response } from "express";
import { TaskSchemaValidate, Task } from "../models/Task";

export const createTask = async (req: Request, res: Response) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  const { error, value } = TaskSchemaValidate.validate(data);
  if (error) {
    res.status(500).send("Server Error");
  } else {
    try {
      const post = await Task.create(value);
      res.status(201).send("Task Created");
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
    });
    res.send(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) res.status(500).send("Invalid input");
    res.status(200).send("Task Deleted");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Server Error");
  }
};
