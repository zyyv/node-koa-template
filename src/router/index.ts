import Router from 'koa-router'
import koaJwt from 'koa-jwt'
import { secret } from '@/utils/jwt'
import unlessRoutes from '@/config/unless'
import { success } from '@/middleware/result'
import api from './api'
const router = new Router()

router.use(koaJwt({ secret }).unless({
  path: unlessRoutes
}))
router.use('/api', success, api.routes(), api.allowedMethods())

export default router
