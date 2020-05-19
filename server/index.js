const express = require('express')
const app = express()
const bc = require('./controllers/books_controller.js')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/books', bc.read)

app.post('/api/books', bc.create)

app.put('/api/books/:id', bc.update)

app.delete('/api/books/:id', bc.delete)

app.listen(SERVER_PORT, () => {
  console.log(`Running on server port ${SERVER_PORT}`)
})