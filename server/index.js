const server = require('./server')

const port = process.env.PORT || 6969

server.listen(port, function () {
  console.log('Listening on port', port)
})
