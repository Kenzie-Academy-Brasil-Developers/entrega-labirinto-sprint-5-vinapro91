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

const jogador = document.getElementById("jogador")

// main.children[189].firstElementChild