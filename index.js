// configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// forma de ler json / middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rotas da API
const rotasCadastro = require('./routes/rotasCadastro')

app.use('/cadastro', rotasCadastro)

// rota inicial // endpoint
app.get('/', (req, res) => {

    // mostrar requisição
    res.json({ massage: 'Mostrar requisições' })

})

//entregar uma porta

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent (process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9kcxx.mongodb.net/test`
        
)
.then(() => {
    console.log('Conectado ao MongoDB!')
    app.listen(5000)
})

.catch((err) => console.log(err))

