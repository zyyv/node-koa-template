import Koa from 'koa'
import router from './routes'
import bodyParser from 'koa-bodyparser'
import xmlParser from 'koa-xml-body'
import cors from 'koa2-cors'
// import { Connect } from './config/db'
import { error } from './middleware/result'

const app = new Koa()
const port = 9999
// Connect()

app.use(error)
app.use(xmlParser())
app.use(bodyParser())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  // console.log(
  //   'server listening on' + '\033[33m http://localhost:' + port + '\033[0m'
  // )
  console.log(`server listening on http://localhost:${port}`);
})
