'use strict'

import { pesquisarCachorro } from "./dogapi.js"

const criarImg = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    return img
}


const carregarImagens = async () => {
    const raca = document.getElementById('raca').value
    const imagens = await pesquisarCachorro(raca)
    const galeria = document.getElementById('galeria')
    const tagImagens = imagens.map(criarImg)
    galeria.replaceChildren(...tagImagens)
}

const handleKeypress = (event) => {
    if (event.key == "Enter") {
        carregarImagens()
    }

}


document.getElementById('raca').addEventListener('keypress', handleKeypress)

