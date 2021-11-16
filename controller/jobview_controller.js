const Job = require("../model/jobs_model");

exports.getAllJob = async (req, res) => {
  const { jobname, company } = req.query;

  const queryObj = {};

  if (company) {
    queryObj.company = { $regex: company, $options: "i" };
  }

  if (jobname) {
    queryObj.jobname = { $regex: jobname, $options: "i" };
  }
  console.log(req.query);
  const see = await Job.find(queryObj);
  res.json({ count: see.length, see });
};
