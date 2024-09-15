const form = document.querySelector(".disciplinas--form")
const btnAdd = document.querySelector("#disciplinas--btn")


btnAdd.onclick = adicionarDisciplina

let listaDisciplina = []
let listaNota1 = []
let listaNota2 = []



function adicionarDisciplina (){
    disciplina = form.materias.value
    n1 = form.primeira.value
    n2 = form.segunda.value

    soma = n1 + n2
    media = (soma)/2

    const cards = document.querySelector(".cards")
    cards.innerHTML += `<p> Teste </p>`
    cards.innerHTML += `<p> Teste </p>`

    // const card = document.createElement('div')
    // const conteudo = document.createTextNode( `${disciplina} + ${n1}`)
    // card.appendChild(conteudo)
    // console.log(card)

   
  
}