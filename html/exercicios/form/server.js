const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios/', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluído<h1><br><a href="http://localhost:3030/">Voltar</a><br></br>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado<h1><br><a href="http://localhost:3030/">Voltar</a><br></br>')
})

app.listen(3003)

// http-server -p3030 -c-1 rodar o servidor no index.html