const Employee = require("../model/employeeModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Employee
exports.newEmployee = catchAsyncErrors(
    async(req, res, next) => {
        const employee = await Employee.create(req.body);
        res.status(201).json({
            success: true,
            employee
        });
    }
);

// get All Employee
exports.getAllEmployee = catchAsyncErrors(async(req, res, next) => {
    const employee = await Employee.find()
    res.status(200).json({
        success: true,
        showingUser: employee.length,
        employee,
    });
});

// get Single Employee
exports.getSingleEmpDetail = catchAsyncErrors(async(req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
        return next(new ErrorHandler("User doesnot exist", 404));
    }
    res.status(200).json({
        success: true,
        employee,
    });
});

// Update Employee
exports.updateEmployee = catchAsyncErrors(
    async(req, res, next) => {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json({
            success: true,
            employee
        });
    }
);

// Delete Employee
exports.deleteEmployee = catchAsyncErrors(async(req, res, next) => {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
        return next(new ErrorHandler(`not found for Id: ${req.params.id}`, 404))
    };
    await employee.remove();
    res.status(200).json({
        success: true,
        message: "employee deleted successfully"
    });
});