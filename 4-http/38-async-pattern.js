const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === ('/')) {
        res.end('Welcome to our page')
        return
    }
    if (req.url === ('/about')) {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} and ${j}`);
            }
        }

        res.end('This is about')
        return
    }
    res.end(`
    <h1>Oops!</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'> back home</a>
    `)

})

server.listen(5000, () => {
    console.log('Server listening on port 5000...');
})


