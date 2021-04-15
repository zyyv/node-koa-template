import OSS from 'ali-oss'
import config from '@/config'
const { aliossConfig } = config
const STS = OSS.STS;
let sts = new STS({
  accessKeyId: aliossConfig.Ak,
  accessKeySecret: aliossConfig.Sk
})
async function assumeRole() {
  try {
    let token = await sts.assumeRole(
      'acs:ram::1529173705316727:role/smalltalk', '<policy>', 1, '<session-name>');
    let client = new OSS({
      region: '<region>',
      accessKeyId: token.credentials.AccessKeyId,
      accessKeySecret: token.credentials.AccessKeySecret,
      stsToken: token.credentials.SecurityToken,
      bucket: '<bucket-name>'
    });
  } catch (e) {
    console.log(e);
  }
}
assumeRole();

export { }