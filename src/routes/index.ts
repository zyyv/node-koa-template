import Router from 'koa-router'
const router = new Router()
import koaJwt from 'koa-jwt'
import { secret } from '../utils/jwt'
import unlessRoutes from '../config/unless'
import { success } from '../middleware/result'
import api from './api'

router.use(koaJwt({ secret }).unless({
  path: unlessRoutes
}))
router.use('/api', success, api.routes(), api.allowedMethods())
export default router
