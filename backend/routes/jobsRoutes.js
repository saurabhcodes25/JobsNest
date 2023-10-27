const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJob,
  singleJob,
  updateJob,
  showJobs,
} = require("../controllers/jobsController");
const router = express.Router();

//job type routes

// /api/job/create
router.post("/job/create", isAuthenticated, isAdmin, createJob);

// /api/job/id
router.get("/job/id", isAdmin, singleJob);

// /api/job/update/job_id
router.put("/job/update/:job_id", isAuthenticated, updateJob);


// /api/jobs/show
router.get("/job/show/", showJobs);

module.exports = router;
