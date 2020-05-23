export {}

import express = require('express')
import routes from './routes'
import cors from 'cors'
import http from 'http'
import socketio from 'socket.io'

const app: express.Application = express();

app.use(cors())
app.use(routes)

const server: http.Server = http.createServer(app)
const io: socketio.Server = socketio(server)

io.on('connection', function(socket: socketio.Socket) {
  console.log('a user connected')
})

// Start the server
server.listen(8000, () => {
  console.log('Go to http://localhost:8000/graphiql to run queries!')
});
