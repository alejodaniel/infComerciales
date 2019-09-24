'use strict'
var express = require('express');
var informesController = require('../controllers/informes');

var api = express.Router();



api.post('/informe',informesController.create);
api.get('/informe',informesController.findAll);
api.get('/informe/:informeId',informesController.findOne);
api.put('/informe',informesController.update);
api.delete('/informe/:informesId',informesController.delete);
module.exports = api;