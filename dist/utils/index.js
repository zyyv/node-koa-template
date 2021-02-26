"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageInfo = exports.useError = exports.num2Time = exports.getRandomNumber = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * 获取几位随机数字
 * @param {number} n
 */
const getRandomNumber = (n) => String(Math.random()).substring(2, n + 2);
exports.getRandomNumber = getRandomNumber;
/**
 * 多少分钟
 * @param {number} num
 */
const num2Time = (num) => ({
    timestamp: num * 1000 * 60,
    text: `${num}分钟`
});
exports.num2Time = num2Time;
/**
 * 自定义Error
 * @param {string} msessage 错误消息
 * @param {number} status 状态码 默认200
 * @param {boolean} same 是否一起更改ctx的状态码
 */
const useError = (msessage, status = 200, same = true) => {
    const error = new Error(msessage);
    error.status = status;
    error.same = same;
    return error;
};
exports.useError = useError;
const getImageInfo = (url) => {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`${url}?imageInfo`, {}).then((res) => {
            resolve(res.data);
        }).catch(() => {
            resolve(null);
        });
    });
};
exports.getImageInfo = getImageInfo;
