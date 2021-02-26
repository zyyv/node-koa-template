"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpToken = exports.uptoken = void 0;
const qiniu_1 = __importDefault(require("qiniu"));
const qiniu_2 = __importDefault(require("../config/qiniu"));
const { Ak, Sk, Bucket, BucketDomain } = qiniu_2.default;
function uptoken() {
    const mac = new qiniu_1.default.auth.digest.Mac(Ak, Sk);
    const options = {
        scope: Bucket,
        expires: 3600 * 24
    };
    const putPolicy = new qiniu_1.default.rs.PutPolicy(options);
    return putPolicy.uploadToken(mac);
}
exports.uptoken = uptoken;
/**
 * 获取bucket下面的所有文件
 * @param {string} bucket bucket 名称
 */
async function getBucketFileList(bucket) {
    const mac = new qiniu_1.default.auth.digest.Mac(Ak, Sk);
    const client = new qiniu_1.default.rs.BucketManager(mac);
    return new Promise((resolve, reject) => {
        client.listPrefix(bucket, null, (err, res) => {
            if (!err)
                resolve(res.items);
            else
                reject(err);
        });
    });
}
/**
 * 将旧bucket所有文件移动到新bucket
 * @param {string} oldBucket 旧bucket
 * @param {string} newBucket 新bucket
 * @param {object} options 配置
 */
async function converBucket(oldBucket, newBucket, options = null) {
    const mac = new qiniu_1.default.auth.digest.Mac(Ak, Sk);
    const client = new qiniu_1.default.rs.BucketManager(mac);
    const items = await getBucketFileList(oldBucket);
    if (!items.length) {
        items.forEach((it) => {
            client.move(oldBucket, it.key, newBucket, it.key, options, (err, res) => {
                if (!err) {
                    console.log(res);
                }
            });
        });
    }
}
async function getUpToken(ctx) {
    return (ctx.body = { token: uptoken(), domainUrl: BucketDomain });
}
exports.getUpToken = getUpToken;
