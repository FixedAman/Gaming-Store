const { model, Schema } = require("mongoose");

const subScriptionPlanSchema = new Schema({
  planName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  benefits: [
    {
      description: String,
      details: String,
    },
  ],
});
const plan = new model("plan", subScriptionPlanSchema);

module.exports = plan;
