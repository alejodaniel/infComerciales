'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var infSchema = Schema({
    razonSocialExpress: String,
    fecha: String,
    solicitante: String,
    nombreComercialExpress: String,
    rucExpress: String,
    formaLegalExpress: String,
    estadoExpress: String,
    inicioActividadesExpress: String,
    actividadPrincipalExpress: String,
    provinciaCiudadExpress: String,
    direccionExpress: String,
    sucursalesExpress: String,
    telefonoExpress: String,
    paginaCorreoExpress: String,
    representanteLegalExpress: String,
    personaContactoExpress: String,
    cargoExpress: String,
    empresasRelacionadasExpress: String,
    numeroEmpleadosExpress: String,
    pagoRentaUnoExpress: String,
    pagoRentaDosExpress: String,
    impuestoDivisasExpressUno: String,
    impuestoDivisasExpressDos: String,
    requeridoClienteExpress: String,
    requeridoServiratingExpress: String,
    nombreReferenciaExpress: String,
    direccionReferenciaExpress: String,
    telefonoReferenciaExpress: String,
    contactoReferenciaExpress: String,
    lineaCreditoExpress: String,
    pagosReferenciaExpress: String,
    productoServicioReferenciaExpress: String,
    clienteDesdeExpress: String,
    compraMensualExpress: String,
    checks: String,
    checks1: String,
    puntualidad:String,
    procesosJudicialesExpress: String,
    accionesDelitosExpress: String,
    informacionRelevanteExpress: String,
    informacionBancariaExpress: String,
    ventas2014Express: String,
    ventas2015Express: String,
    activos2014Express: String,
    activos2015Express: String,
    pasivo2014Express: String,
    pasivo2015Express: String,
    patrimonio2014Express: String,
    patrimonio2015Express: String,
    utilidad2014Express: String,
    utilidad2015Express: String,
    terrenoAreaExpress: String,
    terrenoAvaluoExpress: String,
    construccionAreaExpress: String,
    construccionAvaluoExpress: String,
    avaluoTotalAreaExpress: String,
    avaluoTotalAvaluoExpress: String,
    marcaExpress: String,
    marcaExpress1: String,
    marcaExpress2: String,
    marcaExpress3: String,
    marcaExpress4: String,
    tipoExpress: String,
    tipoExpress1: String,
    tipoExpress2: String,
    tipoExpress3: String,
    tipoExpress4: String,
    fechavahiculosExpress: String,
    fechavahiculosExpress1: String,
    fechavahiculosExpress2: String,
    fechavahiculosExpress3: String,
    fechavahiculosExpress4: String,
    avaluoExpress: String,
    avaluoExpress1: String,
    avaluoExpress2: String,
    avaluoExpress3: String,
    avaluoExpress4: String,
    observacionesExpress: String



});

module.exports = mongoose.model('Proveedor', infSchema);