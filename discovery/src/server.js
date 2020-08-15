// servidor 
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} =require('./pages')

// configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure( 'src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor 
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
/* configura os arquivos estaticos (css, javascip, imagem) */
.use(express.static("public"))
// Rotas da minha aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor 
.listen(5500)

