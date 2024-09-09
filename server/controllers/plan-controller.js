const plan = require("../models/plan-model");

const plans = async (req, res) => {
  try {
    const response = await plan.find();
    if (!response) {
      res.status(404).json({ msg: "no plan" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = plans;
