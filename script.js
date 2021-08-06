const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];;
const main = document.getElementById("main");

const criarMuro = () => {
    const novaDiv = document.createElement("div");
    novaDiv.id = "muro"
    main.appendChild(novaDiv)
}
const criarCaminho = () => {
    const novaDiv = document.createElement("div");
    novaDiv.id = "caminho"
    main.appendChild(novaDiv)
}
const criarInicio = () => {
    const novaDiv = document.createElement("div");
    novaDiv.id = "start"
    main.appendChild(novaDiv)
}
const criarSaida = () => {
    const novaDiv = document.createElement("div");
    novaDiv.id = "finish"
    main.appendChild(novaDiv)
}


const renderBloco = () => {
    for(let i = 0 ; i<map.length; i++){
       
        for(let j = 0; j<map[i].length; j++){
           if(map[i][j] == "W"){
            criarMuro()
           }
           if(map[i][j] == " "){
               criarCaminho()
           }
           if(map[i][j] == "S"){
               criarInicio()
           }
           if(map[i][j] == "F"){
                criarSaida()
           }
           
       } 
    }
}

renderBloco()



const inicio = document.getElementById("start")
const criarPlayer = () => {
    const novaDiv = document.createElement("div");
    novaDiv.id = "jogador"
    inicio.appendChild(novaDiv)
}
criarPlayer()
const vitoria = document.getElementById("vitoria")
const jogador = document.getElementById("jogador")
let initialPosition = 189
document.addEventListener('keydown', (evt) => {
    if (evt.key == "ArrowRight"){
        if (main.children[initialPosition + 1].id == "caminho" || main.children[initialPosition + 1].id == "finish") {
            initialPosition += 1
        main.children[initialPosition].appendChild(jogador)
        if (main.children[188] == main.children[initialPosition] ){
            vitoria.style.display = "block"
        }
        }   
    } 
    if (evt.key == "ArrowLeft"){
        if (main.children[initialPosition - 1].id == "caminho") {
        initialPosition -= 1
        main.children[initialPosition].appendChild(jogador)
        }

    } 
    if (evt.key == "ArrowUp"){
        if (main.children[initialPosition - 21].id == "caminho") {
        initialPosition -= 21
        main.children[initialPosition].appendChild(jogador)   
        }
    } 
    if (evt.key == "ArrowDown"){
        if (main.children[initialPosition + 21].id == "caminho") {
        initialPosition += 21
        main.children[initialPosition].appendChild(jogador)
        }   
    }
    

})

