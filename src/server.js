'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// Global Middleware
app.use(logger);
app.use(express.json());

app.get('/', (req,res) => {
    res.send('this is the main page')
})
app.get('/person', validator, (req,res)=> {
res.status(200).json({
    name: req.query.name 
})
})

function start(){
    app.listen(process.env.PORT, () => {
        console.log(`I'm in port ${process.env.PORT}`)
    })
}
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
    app,
    start
}