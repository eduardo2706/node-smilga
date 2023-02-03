const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('User hit the resourse');
    res.status(200).send('Welcome Home')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>Resourse not found</h1>')
})



app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})