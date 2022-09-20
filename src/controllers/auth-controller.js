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

const createToken = (id) => {
  return jsonwebtoken.sign({ id }, "secret", {
    expiresIn: 10000,
  });
};

const signup_post = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await UserModel.create({
      email,
      password,
      firstName,
      lastName,
    });
    const token = createToken(user._id);
    res.status(201).send(user);
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).send(err);
  }
};

const login_post = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    const authenticatedUser = await UserModel.login(email, password);

    res.status(200).send(authenticatedUser);
  } catch (error) {
    next(error);
  }
};

export { signup_post, login_post };
