const {
  app,
  port,
  router,
  bodyParser,
  xmlParser,
  cors,
  dbConnect,
  error
} = require('./utils/init')
// dbConnect()

app.use(error)
app.use(xmlParser())
app.use(bodyParser())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(
    'server listening on' + '\033[33m http://localhost:' + port + '\033[0m'
  )
})
