import jsonwebtoken from "jsonwebtoken";
import UserModel from "../models/user-model.js";

// handle errors
const handleErrors = (error) => {
  let errorObj = { email: "", password: "", firstName: "", lastName: "" };
  console.log(error.code);

  if (error.code === 11000) {
    errorObj.email = "This email already exists in out database";
  }

  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).map((error) => {
      errorObj[error.properties.path] = error.properties.message;
    });
  }
  return errorObj;
};

const getUserObject = (user) => {
  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    role: user.role,
  };
};

const generateAccessToken = (user) => {
  return jsonwebtoken.sign(user, process.env.ACCESS_TOKEN_SECRET);
};

const signup = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await UserModel.create({
      email,
      password,
      firstName,
      lastName,
    });

    res.status(201).send({ data: "Success!" });
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).send(err);
  }
};

const login = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    const authenticatedUser = await UserModel.login(email, password);
    const userObj = getUserObject(authenticatedUser);
    const token = generateAccessToken(userObj);
    res.status(200).send({ authenticatedUser, token });
  } catch (error) {
    next(error);
  }
};

export { signup, login };
