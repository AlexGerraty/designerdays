const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGO_PASS}@designer-days.vzgpimj.mongodb.net/?retryWrites=true&w=majority`);

module.exports = mongoose.connection;
