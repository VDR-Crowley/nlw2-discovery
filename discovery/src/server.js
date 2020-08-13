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
    }
]

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res){
    return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()
/* config do servidor */
server.use(express.static("public"))
// Rotas da minha aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

