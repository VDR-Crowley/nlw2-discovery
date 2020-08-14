// Dados 
const proffys = [
    { 
        name:"Everton Pirula",
        avatar: "https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
        whatsapp: "11 52367845",
        bio: "ntusiasta das melhores tecnologias em química avançada, Apaixonado por explodir coisa em laboratorio e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. ",
        subject: "Química",
        cost: "50",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    },
    { 
        name:"vando",
        avatar: "https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
        whatsapp: "11 52367845",
        bio: "ntusiasta das melhores tecnologias em química avançada, Apaixonado por explodir coisa em laboratorio e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. ",
        subject: "Química",
        cost: "50",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    },
    { 
        name:"vando",
        avatar: "https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
        whatsapp: "11 52367845",
        bio: "ntusiasta das melhores tecnologias em química avançada, Apaixonado por explodir coisa em laboratorio e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. ",
        subject: "Química",
        cost: "50",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    }     
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",   
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// funcionalidades

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber -1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    const data = req.query

    // se tiver
    const isNoEmpy = Object.keys(data).length > 0
    if (isNoEmpy) {

        data.subject = getSubject(data.subject)
        
        // Adicionando dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    // se não mostrar a pagina
    return res.render("give-classes.html", { subjects, weekdays})
}

// servidor 
const express = require('express')
const server = express()

// configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure( 'src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor 
server
/* configura os arquivos estaticos (css, javascip, imagem) */
.use(express.static("public"))
// Rotas da minha aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do servidor 
.listen(5500)

