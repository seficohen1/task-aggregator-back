import TaskModel from "../models/task-model.js";
import mongoose from "mongoose";

/*
TODO: CRUD functions for Tasks
*/

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).send({
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  const id = req.params.taskId;

  try {
    const taskById = await TaskModel.findOne({ _id: id })
      .populate({ path: "user", select: { firstName: 1, lastName: 2 } })
      .lean()
      .exec();
    res.status(200).send({
      data: {
        _id: taskById._id,
        title: taskById.title,
        description: taskById.description,
        user: {
          _id: taskById.user._id,
          firstName: taskById.user.firstName,
          lastName: taskById.user.lastName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { title, description, user } = req.body;

  try {
    const task = await TaskModel.create({
      title: title,
      description: description,
      user: user,
    });
    res.status(200).send({ data: "task was created successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const { title, description, completed } = req.body;
  try {
    const taskToUpdate = await TaskModel.findOneAndUpdate(
      { _id: taskId },
      { $set: { title, description, completed } },
      { new: true },
    );
    res.status(200).send({ data: taskToUpdate });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  try {
    const taskToDelete = await TaskModel.findOneAndDelete({
      _id: taskId,
    }).lean();
    res.status(200).send({ data: "task was deleted" });
  } catch (error) {
    next(error);
  }
};

const taskController = {
  createTask: createTask,
};

export { taskController };
