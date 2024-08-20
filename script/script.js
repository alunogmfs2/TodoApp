function pegarTodo() {
    let elemento = document.querySelector("#todocaixa").value
    return elemento
}

function criarLi() {
    let li = document.createElement("li")
    let input = document.createElement("input")
    let label = document.createElement("label")
    label.textContent = pegarTodo()
    label.htmlFor = pegarTodo()
    input.type = "checkbox"
    input.name = pegarTodo()
    input.id = pegarTodo()
    li.appendChild(input)
    li.appendChild(label)
    document.querySelector("#lista").appendChild(li)
    document.querySelector("#todocaixa").value = ""
}
