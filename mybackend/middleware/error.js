const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Cast Mongo Error
    if (err.name === "CastError") {
        const message = `Resourse Not Found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400)
    }
    // Duplicate email error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        error: {
            message: err.message,
            statusCode: err.statusCode,
            stack: err.stack
        },

    });
};