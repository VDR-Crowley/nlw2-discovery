// Procurar o botão
document.querySelector("#add-time")
// Quandp clicar no botão
.addEventListener('click', cloneField)

// Executar um ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFiledcontainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // pegar os campos. Que campos?
    const fields = newFiledcontainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field){
        // pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector("#schedule-items").appendChild(newFiledcontainer)
}
