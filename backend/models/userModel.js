import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  },
  { timestamps: true }
);

// static signin method
userSchema.statics.signIn = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  //   if the email is not valid email
  if (!validator.isEmail(email)) {
    throw new Error("email is not valid");
  }


  // get the user details
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("user credentials are wrong");
  }

  // compare hashpassword
  if (bcrypt.compareSync(password, user.password)) {
    // if hash password and plain password is matching then return the user object
    return user;
  } else {
    throw new Error("user credentials are wrong");
  }
};

export default mongoose.model("User", userSchema);
