/*
TODO: create schema of task that should contain: title, description. optional: starting and due date.
*/

import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    user: {
      type: mongoose.SchemaType.ObjectId,
      // required: true,
      ref: "user",
    },
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

const TaskModel = new mongoose.model("task", TaskSchema);

export default TaskModel;
