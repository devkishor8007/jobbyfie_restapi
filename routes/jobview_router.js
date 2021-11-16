const express = require("express");
const router = express.Router();
const { getAllJob } = require("../controller/jobview_controller");

router.get("/", getAllJob);

module.exports = router;
