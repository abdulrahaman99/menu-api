const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const validata = require("../config/validator");

//create a new user

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const valid = await validata({ username, email, password });

  if (valid) {
    const hashesdpassword = await bcrypt.hash(valid.password, 10);
    const user = new user({
      username,
      email,
      password: hashesdpassword,
    });
    await user.save();

    res.status(201).json({
      message: "User created succeessfully",
      user,
    });
  } else {
    res.status(400).json({
      massage: "Invalid data",
    });
  }
};
module.exports = {
  createUser,
};
