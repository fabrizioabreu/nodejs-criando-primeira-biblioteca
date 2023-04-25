import chalk from "chalk";

function extrairLinks(arrlinks) {
    //return arrlinks.map((objetoLink) => Object.keys(objetoLink).join())
    return arrlinks.map((objetoLink) => Object.values(objetoLink).join())
}

// Checando o array de URLs
async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status
            } catch (error) {
                return manejaErros(error);
            }
            
        })
    )
    return arrStatus;
}

function manejaErros(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        console.log(chalk.red('Link não encontrado.'))
        return 'Link não encontrado';
    } else {
        console.log(chalk.red('Ocorreu algum erro.'), erro)
        return 'Ocorreu algum erro';
    }
}

export default async function listaValidada(listaDeLinks) {
    const links = extrairLinks(listaDeLinks);
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

// Validando links com fetch
// https://nodejs.org/en/blog/release/v18.0.0#fetch-experimental
// 
// const res = await fetch('https://nodejs.org/api/documentation.json');
// if (res.ok) {
//   const data = await res.json();
//   console.log(data);
// }
