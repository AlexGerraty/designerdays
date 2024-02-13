const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://alexgerraty:Hawthorn10@designer-days.vzgpimj.mongodb.net/?retryWrites=true&w=majority`);

module.exports = mongoose.connection;
