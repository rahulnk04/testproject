const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((mongo) => {
        console.log(`Mongodb connected with server : ${mongo.connection.host}`);
    });
};

module.exports = connectDatabase;