function extrairLinks(arrlinks) {
    //return arrlinks.map((objetoLink) => Object.keys(objetoLink).join())
    return arrlinks.map((objetoLink) => Object.values(objetoLink).join())
}

export default function listaValidada(listaDeLinks) {
    return extrairLinks(listaDeLinks);
}
