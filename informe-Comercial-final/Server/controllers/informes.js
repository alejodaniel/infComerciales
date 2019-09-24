'use strict'
var InformesComerciales = require('../models/informes');

//Guardar 
exports.create = (req, res) => {
    //iniciar el objeto
    var informes = new InformesComerciales(req.body);

    //guardar 
    informes.save().then(data => {
        res.json(data);
        res.status(200).send({ informe: data });
    }).catch(err => {
        res.status(500).send({ message: 'Error al guardar' });
    });
}
//buscar todos
exports.findAll = (req, res) => {
    InformesComerciales.find().then(informes => {
        res.json(informes);
    }).catch(err => {
        res.status(500).send({ message: 'Error al buscar' });
    });
}

//encontrar uno solo
exports.findOne = (req, res) => {
    InformesComerciales.findById(req.params.informeId).then(informe => {
        if (!informe) {
            res.status(404).send({ message: 'No se encuentra ese Informe Comercial' });
        }
        res.json(informe);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({ message: 'No se encuentra el Informe Comercial' });
        }
        return res.status(500).send({ message: 'Error de servidor' });
    });
}

//actualizar

exports.update = (req, res) => {
    InformesComerciales.findByIdAndUpdate(req.body.id.req.body, { new: true }).then(informe => {
        if (!informe) {
            res.status(404).send({ message: 'Informe Comercial no se encuentra' });
        }
        res.json(informe);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            res.status(404).send({ message: 'Informe Comercial no encontrado' });
        }
        res.status(500).send({ message: 'Error de servidor' });
    });
}
// DELETE a Customer
exports.delete = (req, res) => {
    InformesComerciales.findByIdAndRemove(req.params.informesId)
        .then(informe => {
            if (!informe) {
                return res.status(404).json({
                    msg: "Informe Comercial no se ecuentra " + req.params.informesId
                });
            }
            res.json({ msg: "Se borro correctamente" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.razonSocialExpress === 'NotFound') {
                return res.status(404).json({
                    msg: "Informe Comercial no se encuentra" + req.params.informesId
                });
            }
            return res.status(500).json({
                msg: "No se puede borrar" + req.params.informesId
            });
        });
};

