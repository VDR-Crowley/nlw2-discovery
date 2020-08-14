const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    // Inserir dados

    proffyValue = {
        name:"Everton Pirula",
        avatar: "https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
        whatsapp: "11 52367845",
        bio: "ntusiasta das melhores tecnologias em química avançada, Apaixonado por explodir coisa em laboratorio e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. ",
    }

    classValue = {
        subject: "Química",
        cost: "50",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValue [
        // class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday:  1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:  0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // createProffy(db, { proffyValue, classValue, classScheduleValue})

    // Consultar os dados inseridos
})