import { Context, Next } from 'koa'

export const error = async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch ({ status = 500, message, same = true, originalError }) {
    if (same) ctx.status = status
    ctx.body = {
      msg: originalError ? originalError.message : message,
      status
    }
  }
}

export const success = async (ctx: Context, next: Next) => {
  await next()
  ctx.body = {
    status: 200,
    msg: 'success',
    data: {
      ...ctx.body as any
    }
  }
}

