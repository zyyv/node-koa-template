const Koa = require('koa')
const app = new Koa()
const router = require('../routes')
const port = 9999
const bodyParser = require('koa-bodyparser')
const xmlParser = require('koa-xml-body')
const cors = require('koa2-cors')
const { Connect } = require('../config/db')
const { error } = require('../middleware/result')

module.exports = {
  app,
  bodyParser,
  xmlParser,
  cors,
  router,
  dbConnect: Connect,
  error,
  port
}
