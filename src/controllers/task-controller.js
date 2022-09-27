import { paginateResults } from "../middleware/pagination.js";
import TaskModel from "../models/task-model.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find({})
      .populate({ path: "user", select: { _id: 1, firstName: 1, lastName: 1 } })
      .lean()
      .exec();    
    req.docs = tasks;
    next();
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  const id = req.params.taskId;

  try {
    const taskById = await TaskModel.findOne({ _id: id })
      .populate({ path: "user", select: { _id: 1, firstName: 1, lastName: 1 } })
      .lean()
      .exec();
    console.log(taskById);
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
        startDate: taskById.user.startDate,
        endDate: taskById.user.endDate,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { title, description, user, dueDate, status } = req.body;

  try {
    const task = await TaskModel.create({
      title: title,
      description: description,
      user: user,
      dueDate: dueDate,
      status: status
    });
    res.status(200).send({ data: "task was created successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const { title, description, status, user, startDate, dueDate } = req.body;
  try {
    const taskToUpdate = await TaskModel.findOneAndUpdate(
      { _id: taskId },
      { $set: { title, description, status, user, startDate, dueDate } },
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
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  createTask,
  updateTask,
};

export { taskController };
