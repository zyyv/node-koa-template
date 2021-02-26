"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
const utils_1 = require("../utils");
router.get('/a', async (ctx) => {
    const url = 'https://qiniu-shop.zoombin.com/avatar.jpg';
    const res = await utils_1.getImageInfo(url);
    console.log(res);
    ctx.body = res;
});
router.get('/', async (ctx) => {
    // console.log(ctx.state)
    // throw new Error('test error')
    // ctx.status = 504
    // const err = new Error('test error')
    // err.status = 504
    // throw err
    ctx.body = {
        msg: 'hello koa'
    };
});
exports.default = router;
