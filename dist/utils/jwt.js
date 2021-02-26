"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.expiresIn = exports.secret = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secret = 'chris'; // 密钥
exports.expiresIn = 1000 * 60 * 60 * 24 * 7; // 过期时间
const generateToken = (payload) => jsonwebtoken_1.default.sign(payload, exports.secret, { expiresIn: exports.expiresIn });
exports.generateToken = generateToken;
