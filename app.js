const express = require('express');
const bodyparser = require('body-parser');
const graphqlHttp = require('express-graphql')

const app = express()

const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGO_PASS}@designer-days.vzgpimj.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            app.listen(3000);
        });
    
        
