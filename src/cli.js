import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

function imprimeLista(resultado, identificador = '') {
    console.log(
        chalk.yellow(`Lista de links: `),
        chalk.black.bgGreen(identificador), 
        resultado
    );
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (error) {
         if (error.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe!');
            return
         }
    }

    if (fs.lstatSync(caminho).isFile()) {

        const resultado = await pegaArquivo(argumentos[2]);

        imprimeLista (resultado, );
        console.log('caminho -> ',)

    } else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho)

        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista (lista, nomeDeArquivo);
        })
    }
    
}

processaTexto(caminho);

// console.log(caminho[2]);
// node src/cli.js ./arquivos/texto.md