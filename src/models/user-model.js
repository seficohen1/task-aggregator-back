/*
TODO: create schema of user that should contain: first name, last name, password, role(admin or user - can be boolean or string)
*/

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: ({ value }) => `the email ${value} is not valid`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "The password is too short"],
      // select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function passwordPreSave(next) {
  if (!this.isModified("password")) return next();
  try {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

// static method to login user

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = new mongoose.model("user", UserSchema);

export default UserModel;
