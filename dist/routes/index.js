"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const jwt_1 = require("../utils/jwt");
const unless_1 = __importDefault(require("../config/unless"));
const result_1 = require("../middleware/result");
const api_1 = __importDefault(require("./api"));
router.use(koa_jwt_1.default({ secret: jwt_1.secret }).unless({
    path: unless_1.default
}));
router.use('/api', result_1.success, api_1.default.routes(), api_1.default.allowedMethods());
exports.default = router;
