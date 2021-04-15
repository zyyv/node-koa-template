import jwt from 'jsonwebtoken'

export const secret = 'chris' // 密钥

export const expiresIn = 1000 * 60 * 60 * 24 * 7 // 过期时间

export const generateToken = (payload: any) => jwt.sign(payload, secret, { expiresIn })
