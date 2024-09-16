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


    soma =parseFloat(n1) + parseFloat(n2)
    
    media = (soma)/2

    faltante = 18 - soma

    porcentagem = ((soma * 100) / 18).toFixed(1)

    const cards = document.querySelector(".cards")

    const card = document.querySelector(".card")
    cards.innerHTML += `
        <div class="card">
                <div class="card-notas">
                    <h4>${disciplina}</h4>
                    <h5>${n1}</h5>
                    <h5>${n2}</h5>
                </div>
                <div class="barra">
                    <div class="progresso--bar" style="width:${porcentagem}%"></div>
                    <div class="barra--valor" >${porcentagem}%</div>
                </div>
                <p class="card--resultado">Você precisa de uma nota ${faltante} no 3 trimestre</p>
                <p class="card--resultado">Falta pouco para passar!</p>
            </div>
    `



    // const card = document.createElement('div')
    // const conteudo = document.createTextNode( `${disciplina} + ${n1}`)
    // card.appendChild(conteudo)
    // console.log(card)

   
  
}

