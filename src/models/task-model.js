/*
TODO: create schema of task that should contain: title, description. optional: starting and due date.
*/

import mongoose, { Schema } from "mongoose";

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
    status: {
      type: String,
      required: true,
      enum: ["none", "pending", "in progress", "complete", "cancelled"],
      default: "none",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "user",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

const TaskModel = new mongoose.model("task", TaskSchema);

export default TaskModel;
