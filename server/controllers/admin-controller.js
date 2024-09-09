const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "user nei mana" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "contact nei mana" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAllUsers, getAllContact };
