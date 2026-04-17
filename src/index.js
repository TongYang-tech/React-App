const http = require('http')
const app = require('./server/app.js')

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
