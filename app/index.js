"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var pagina_1 = __importDefault(require("./router/pagina"));
var mensaje_1 = __importDefault(require("./router/mensaje"));
var server = server_1.default.init(3000);
server.app.use('/mensaje', mensaje_1.default);
server.app.use('/', pagina_1.default);
server.start(function () { return console.log("servidor iniciado"); });
