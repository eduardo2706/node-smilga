const http = require('http')

const server = http.createServer()

// Using Event Emitter API

server.on('request', (req, res)=> {
    res.end('Welcome')
})

server.listen(5000)