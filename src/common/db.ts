import mongoose from 'mongoose'
import config from '@/config/index'
const { mongodbConfig } = config

const Mongodb_Config = {
  user: mongodbConfig.user,
  password: mongodbConfig.password,
  host: process.env.NODE_ENV === 'development' ? 'localhost' : mongodbConfig.host,
  port: mongodbConfig.port,
  db: mongodbConfig.db
}
const Mongodb_Path = `mongodb://${Mongodb_Config.user}:${Mongodb_Config.password}@${Mongodb_Config.host}:${Mongodb_Config.port}/${Mongodb_Config.db}`

// 连接
export const Connect = () => {
  mongoose.connect(Mongodb_Path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    // console.log('\033[33mmongodb connect success\033[0m')
    console.log('mongodb connect success')
  }).catch((err: Error) => {
    console.log(err)
  })
}