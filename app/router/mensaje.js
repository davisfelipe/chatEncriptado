"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    var mensaje = req.query.mensaje;
    res.send(mensaje);
});
exports.default = router;
