const Contact = require("../models/contact-model");
const User = require("../models/user-model");
// get userdata
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
const getUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// get delete data
const getDeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "User delete successfully" });
  } catch (error) {
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
const getUpdateById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const dataToUpdate = await User.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    res.status(200).json(dataToUpdate);
  } catch (error) {
    next(error);
  }
};

const getContactDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    res.status(200).json({ massege: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContact,
  getDeleteUser,
  getUserData,
  getUpdateById,
  getContactDelete,
};
