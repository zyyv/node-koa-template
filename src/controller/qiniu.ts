import { Context } from "koa"

import qiniu from 'qiniu'
import config from '@/config'
const { qiniuConfig: { Ak, Sk, Bucket, BucketDomain } } = config
export function uptoken() {
  const mac = new qiniu.auth.digest.Mac(Ak, Sk)
  const options = {
    scope: Bucket,
    expires: 3600 * 24
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  return putPolicy.uploadToken(mac)
}

/**
 * 获取bucket下面的所有文件
 * @param {string} bucket bucket 名称
 */
async function getBucketFileList(bucket: string) {
  const mac = new qiniu.auth.digest.Mac(Ak, Sk)
  const client = new qiniu.rs.BucketManager(mac)
  return new Promise((resolve, reject) => {
    client.listPrefix(bucket, null, (err: any, res: any) => {
      if (!err) resolve(res.items)
      else reject(err)
    })
  })
}

/**
 * 将旧bucket所有文件移动到新bucket
 * @param {string} oldBucket 旧bucket
 * @param {string} newBucket 新bucket
 * @param {object} options 配置
 */
async function converBucket(oldBucket: string, newBucket: string, options = null) {
  const mac = new qiniu.auth.digest.Mac(Ak, Sk)
  const client = new qiniu.rs.BucketManager(mac)
  const items: any = await getBucketFileList(oldBucket)
  if (!items.length) {
    items.forEach((it: any) => {
      client.move(oldBucket, it.key, newBucket, it.key, options, (err: any, res: any) => {
        if (!err) {
          console.log(res)
        }
      })
    })
  }
}

export async function getUpToken(ctx: Context) {
  return (ctx.body = { token: uptoken(), domainUrl: BucketDomain })
}
