const Job = require("../model/jobs_model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

exports.getAllJobs = async (req, res) => {
  const job = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ job, count: job.length });
};

exports.getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  console.log(job);

  if (!job) {
    throw new NotFoundError(`No job with this user id ${jobId}`);
  }
  res.status(StatusCodes.OK).send({ job });
};

exports.createJob = async (req, res) => {
  console.log(req.user);
  req.body.createdBy = req.user.userId;
  console.log("Req body created " + req.body.createdBy);
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

exports.updateJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
    body: { company, position, requirement, jobname },
  } = req;
  if (company == "" || position == "" || requirement == "" || jobname == "") {
    throw new BadRequestError(
      "Comapny or Position or job name or job requirement fields cannot be empty"
    );
  }
  const updateJob = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!updateJob) {
    throw new NotFoundError(`No job with this user id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ updateJob });
};

exports.deleteJobs = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const deletejob = await Job.findByIdAndDelete({
    _id: jobId,
    createdBy: userId,
  });

  if (!deletejob) {
    throw new NotFoundError(`No job with this user id ${jobId}`);
  }
  res.status(StatusCodes.CREATED).json({ message: "Succesffully deleted" });
};
