const express = require("express");
const {
    newEmployee,
    getAllEmployee,
    getSingleEmpDetail,
    deleteEmployee,
    updateEmployee
} = require("../controller/employeeController");

const router = express.Router();

// create New Employee entry 
router.route("/employee/new").post(newEmployee);

// Get All Employee
router.route("/allemployee").get(getAllEmployee);

// Update Employee - Delete
router.route("/employee/:id")
    .put(updateEmployee)
    .delete(deleteEmployee);

// Get Employee
router.route("/employee/:id").get(getSingleEmpDetail);
module.exports = router;