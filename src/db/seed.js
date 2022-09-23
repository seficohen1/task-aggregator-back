import UserModel from "../models/user-model.js";
import TaskModel from "../models/task-model.js";
import { getSeedUsers, getSeedTasks } from "./seed-data.js";

async function seedUsers() {
  const users = getSeedUsers();

  await UserModel.deleteMany({});
  await UserModel.create([...users]);
  
}

const getRandomItem = (arr = []) => arr[Math.floor(Math.random() * arr.length)];



function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
}

const d = randomDate(new Date(), new Date(2022, 8, 30));
console.log('log ' + d);

function getRandomDates () {
  const dateA = randomDate(new Date(), new Date(2022, 8, 27))
  const dateB = randomDate(new Date(), new Date(2022, 8, 27))
  let first = dateA < dateB ? dateA : dateB;
  let second = dateA > dateB ? dateA : dateB;
  return {
    dateA: first,
    dateB: second,
  }
  console.log(dateA)
  console.log(dateB)
}


const seedTasks = async () => {
  await Promise.all([UserModel.deleteMany({}), TaskModel.deleteMany({})]);

  const users = await UserModel.create([...getSeedUsers()]);
  const usersId = users.map((user) => user._id);
  const tasksWithUsers = [...getSeedTasks()].map((task) => ({
    ...task,
    user: getRandomItem(usersId),
    startDate: getRandomDates().dateA,
    dueDate: getRandomDates().dateB
  }));
  return TaskModel.insertMany(tasksWithUsers);
};

export { seedUsers, seedTasks };
