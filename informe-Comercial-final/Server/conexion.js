'use strict'
var mongoose = require('mongoose');
var app = require('./app');
mongoose.Promise = global.Promise;

var port = process.env.PORT || 3308;

mongoose.connect('mongodb://localhost:27017/informesComerciales', { useNewUrlParser: true }).then(() => {
    console.log('Se conecto a la base de datos de Informes Comerciales');
    app.listen(port, () => {
        console.log('El servidor local esta corriendo perfectamente');
    });
}).catch(err => console.log(err));