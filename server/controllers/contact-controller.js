const Contact = require("../models/contact-model");
const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(201).json({ msg: "successfully  sent" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = contactForm;
