const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name:"Everton Pirula",
        avatar: "https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
        whatsapp: "11 52367845",
        bio: "ntusiasta das melhores tecnologias em química avançada, Apaixonado por explodir coisa em laboratorio e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. ",
    }

    classValue = {
        subject: 1,
        cost: "50",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
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

    //await createProffy(db, { proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    
    // console.log(selectClassesSchedules)
})

/* Esse arquivo test foi feito para testar o banco de dados */