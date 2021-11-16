const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJobs,
} = require("../controller/jobs_controller");

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJobs);

module.exports = router;
