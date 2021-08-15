require("dotenv").config
const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser');
const { Nuxt, Builder } = require('nuxt')
const app = express()
const userRouter = require("../api/users/user.router");
const adminRouter = require("../api/admin/admin.router");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b3acc71509fe4c8681669759e4fbf140');

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.disable('etag');

app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);


app.get('/news', function (req, res) {
  newsapi.v2.everything({
    q: 'api',
    language: 'nl',
  }).then(response => {
    // console.log(response);
    res.send(response)
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
})


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
