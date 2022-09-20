import UserModel from "../models/user-model.js";
import TaskModel from "../models/task-model.js";
import { getSeedUsers, getSeedTasks } from "./seed-data.js";

async function seedUsers() {
  const users = getSeedUsers();

  await UserModel.deleteMany({});
  await UserModel.create([...users]);
  
}

const getRandomItem = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

const seedTasks = async () => {
  await Promise.all([UserModel.deleteMany({}), TaskModel.deleteMany({})]);

  const users = await UserModel.create([...getSeedUsers()]);
  const usersId = users.map((user) => user._id);
  const tasksWithUsers = [...getSeedTasks()].map((task) => ({
    ...task,
    user: getRandomItem(usersId),
  }));
  return TaskModel.insertMany(tasksWithUsers);
};

export { seedUsers, seedTasks };
