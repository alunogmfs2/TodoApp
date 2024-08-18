function pegarTodo() {
    let elemento = document.querySelector("#todocaixa").value
    return elemento
}

function criarLi() {
    let li = document.createElement("li")
    li.textContent = pegarTodo()
    document.querySelector("#lista").appendChild(li)
    document.querySelector("#todocaixa").value = ""
}
