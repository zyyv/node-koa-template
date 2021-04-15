import { Context } from "koa"
import Router from 'koa-router'
import { getImageInfo } from '@/utils'
const router = new Router()

router.get('/a', async (ctx: Context) => {
  const url = 'https://qiniu-shop.zoombin.com/avatar.jpg'
  const res = await getImageInfo(url)
  console.log(res)
  ctx.body = res
})
router.get('/', async (ctx: Context) => {
  // console.log(ctx.state)

  // throw new Error('test error')
  // ctx.status = 504
  // const err = new Error('test error')
  // err.status = 504
  // throw err
  ctx.body = {
    msg: 'hello koa1'
  }
})

export default router
