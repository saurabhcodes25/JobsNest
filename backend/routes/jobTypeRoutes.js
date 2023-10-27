const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJobType,
  allJobType,
  updateJobType,
  deleteJobType,
} = require("../controllers/jobTypeController");
const router = express.Router();

//job type routes

//api/type/create
router.post("/type/create", isAdmin, isAuthenticated, createJobType);

//api/type/create
router.get("/type/jobs", allJobType);

//api/type/update/type_id
router.put("/type/update/:type_id", isAuthenticated, isAdmin, updateJobType);

//api/type/delete/type_id
router.put("/type/delete/:type_id", isAuthenticated, isAdmin, deleteJobType);

module.exports = router;
