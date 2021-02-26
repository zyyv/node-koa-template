"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ali_oss_1 = __importDefault(require("ali-oss"));
const alioss_1 = __importDefault(require("../config/alioss"));
const STS = ali_oss_1.default.STS;
let sts = new STS({
    accessKeyId: alioss_1.default.Ak,
    accessKeySecret: alioss_1.default.Sk
});
async function assumeRole() {
    try {
        let token = await sts.assumeRole('acs:ram::1529173705316727:role/smalltalk', '<policy>', 1, '<session-name>');
        let client = new ali_oss_1.default({
            region: '<region>',
            accessKeyId: token.credentials.AccessKeyId,
            accessKeySecret: token.credentials.AccessKeySecret,
            stsToken: token.credentials.SecurityToken,
            bucket: '<bucket-name>'
        });
    }
    catch (e) {
        console.log(e);
    }
}
assumeRole();
