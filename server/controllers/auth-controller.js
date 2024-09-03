const User = require("../models/user-model");
const bcrypt = require("bcrypt");

//  home controller
const home = async (req, res) => {
  try {
    res.status(200).send("send by route");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    // if user exist
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "user already exist " });
    }
    // securing the password
    const saltRounds = 10;
    const encrypted_password = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      email,
      phone,
      password: encrypted_password,
    });
    res.status(201).json({
      msg: "registration successfull ",
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ msg: "Register hochena mona " });
    next(error);
  }
};
//  log in logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existData = await User.findOne({ email });
    if (!existData) {
      return res.status(400).json({ msg: "invalid credential" });
    }

    const compare = await existData.comparePassword(password);
    if (compare) {
      res.status(200).json({
        msg: "Log in  successfull ",
        token: await existData.generateToken(),
        userId: existData._id.toString(),
      });
    } else {
      res.status(400).json({ msg: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "the server has encountered an unexpected condition or configuration problem ",
    });
    next(error);
  }
};

// user logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login, user };
