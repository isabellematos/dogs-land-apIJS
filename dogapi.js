'use strict'

const pesquisarCachorro = async (raca) => {

    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)

    const listaCachorros = await response.json()

    return listaCachorros.message
}

export{
    pesquisarCachorro
}