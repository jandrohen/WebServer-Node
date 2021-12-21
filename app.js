const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World en su ruta')
})
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

