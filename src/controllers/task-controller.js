import TaskModel from "../models/task-model.js";

/*
TODO: CRUD functions for Tasks
*/

export const getAllTasks = (req, res, next) => {};
export const getTask = (req, res, next) => {};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const task = await TaskModel.create({
      title: title,
      description: description,
    });
    res.status(200).send({
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = (req, res, next) => {};
export const deleteTask = (req, res, next) => {};

const taskController = {
  createTask: createTask,
};

export { taskController };
