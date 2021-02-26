"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = exports.Mongodb_Path = exports.Mongodb_Config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Mongodb_Config = {
    user: 'admin',
    password: 'admin',
    host: process.env.NODE_ENV === 'development' ? 'localhost' : '47.103.219.72',
    port: '27017',
    db: '' // dbname
};
exports.Mongodb_Path = `mongodb://${exports.Mongodb_Config.user}:${exports.Mongodb_Config.password}@${exports.Mongodb_Config.host}:${exports.Mongodb_Config.port}/${exports.Mongodb_Config.db}`;
// 连接
const Connect = () => {
    mongoose_1.default.connect(exports.Mongodb_Path, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('\033[33mmongodb connect success\033[0m');
    }).catch((err) => {
        console.log(err);
    });
};
exports.Connect = Connect;
