import UserModel from "../models/user-model.js";
import { getSeedUsers } from './seed-data.js'





async function seedUsers () {
  console.log('calling seedUsers')
  
  const users = getSeedUsers();

  await UserModel.deleteMany({});
  await UserModel.create([...users])
  // await Promise.all([UserModel.deleteMany({}), UserModel.create([...users])]);
}



export { seedUsers };