const Router = require('koa-router')
const router = new Router()
const { getImageInfo } = require('../utils')

router.get('/a', async (ctx) => {
  const url = 'https://qiniu-shop.zoombin.com/avatar.jpg'
  const res = await getImageInfo(url)
  console.log(res)
  ctx.body = res
})
router.get('/', async (ctx) => {
  // console.log(ctx.state)

  // throw new Error('test error')
  // ctx.status = 504
  // const err = new Error('test error')
  // err.status = 504
  // throw err
  ctx.body = {
    msg: 'hello koa'
  }
})


module.exports = router