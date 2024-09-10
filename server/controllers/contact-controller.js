const Contact = require("../models/contact-model");
const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(201).json({ massege: "successfully  sent" });
  } catch (error) {
    res.status(500).json({ msg: error });
    next(error);
  }
};

module.exports = contactForm;
