const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    empName: {
        type: String,
        required: [true, "Please enter your Name"],
    },

    empAge: {
        type: Number,
        required: [true, "Please enter your age"],
    },
    empSalary: {
        type: Number,
        required: [true, "Please enter your Salary"],
    },

    empRole: {
        type: String,
        required: [true, "Please enter your role"],
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    empActive: {
        type: Boolean,
        default: 1
    },

    attrId: {
        type: String,
    },
    attrClass: {
        type: String,
    },
    attrSize: {
        type: String,
    },
    attrName: {
        type: String,
    },

})
module.exports = mongoose.model("employee", employeeSchema);