const express = require("express");
const {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
  createUserJobsHistory,
} = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const router = express.Router();

//user routes

//api/all/users
router.get("/allUsers", isAuthenticated, isAdmin, allUsers);

//api/user/id
router.get("/user/:id", isAuthenticated, isAdmin, singleUser);

//api/user/edit/id
router.put("/user/edit/:id", isAuthenticated, editUser);

//api/admin/user/delete/id
router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);

//api/admin/user/jobHistory
router.post("/user/jobHistory/", isAuthenticated, createUserJobsHistory);

module.exports = router;
