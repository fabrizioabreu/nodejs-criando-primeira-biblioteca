import pegaArquivo from './index.js';

const caminho = process.argv;

pegaArquivo(caminho[2]);
// console.log(caminho[2]);

// node src/cli.js ./arquivos/texto.md