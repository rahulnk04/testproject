const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./configuration/databaseConnection");


process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down the server due to uncaught Exception`)
    process.exit(1);
});

dotenv.config({ path: "./configuration/config.env" });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});

process.on('unhandledRejection', (err) => {
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down the server due to unhandled Rejection`)
    server.close(() => {
        process.exit(1);
    });
});