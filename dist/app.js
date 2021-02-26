"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const routes_1 = __importDefault(require("./routes"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_xml_body_1 = __importDefault(require("koa-xml-body"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
// import { Connect } from './config/db'
const result_1 = require("./middleware/result");
const app = new koa_1.default();
const port = 9999;
// Connect()
app.use(result_1.error);
app.use(koa_xml_body_1.default());
app.use(koa_bodyparser_1.default());
app.use(koa2_cors_1.default());
app.use(routes_1.default.routes()).use(routes_1.default.allowedMethods());
app.listen(port, () => {
    // console.log(
    //   'server listening on' + '\033[33m http://localhost:' + port + '\033[0m'
    // )
    console.log(`server listening on ${port}`);
});
