const mongoose = require("mongoose");

const JobModel = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
      minlength: 3,
    },
    jobname: {
      type: String,
      required: [true, "Please provide job name"],
      maxlength: 50,
      minlength: 3,
    },
    requirement: {
      type: String,
      required: [true, "Please provide requirement of job"],
      maxlength: 200,
      minlength: 3,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Auth",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobModel);
