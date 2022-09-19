import UserModel from "../models/user-model.js";
import { getSeedUsers } from './seed-data.js'



async function seedUsers () {  
  const users = getSeedUsers();
  
  await UserModel.deleteMany({});
  await UserModel.create([...users]);
}





export { seedUsers };