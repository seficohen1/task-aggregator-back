import UserModel from "../models/user-model.js";


const getAllUsers = async (req, res, next) => {
  try {
    const tasks = await UserModel.find({});
    req.docs = tasks;
    next();
  } catch(error) {
    next(error)
  }
};

const getUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const userById = await UserModel.findOne({ _id: userId })
      .lean()
      .exec();    
    res.status(200).send({
        userById
    })
  } catch(error) {
    next(error)
  }
};


const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const user = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    })
    res.status(200).send({
      data: 'User was created successfully'
    })
  } catch(error) {
    next(error)
  }
};


const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { firstName, lastName, email, password, role }},
      { new: true },
    );
    res.status(200).send({
      updatedUser,
    })
  } catch(error) {
    next(error)
  }
};


const deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deletedUser = await UserModel.findOneAndDelete({ _id: userId })
    res.status(200).send({
      data: `User with id: ${userId} has been deleted`
    })
  } catch(error) {
    next(error)
  }
};


const UserController = {
  getAllUsers, 
  getUser, 
  createUser, 
  updateUser, 
  deleteUser
}

export { UserController };