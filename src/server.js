const express = require('express')
const port = 3000
const userController = require('./controllers/userController')


const app = express()
app.user(express.json())
app.use('/api/user', userController);


app.listen( port, () =>{
    console.log('Servidor rodando na porta',port)
})