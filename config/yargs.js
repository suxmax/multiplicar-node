const opts = {
    base: {
        demand: true, //campo obbliagorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //di default se la persona non mette un limite
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la table de multiplicar', opts)
    .command('crear', 'genera un archivo con la table de multiplicar', opts)
    .help() //per dare info se si scrive  node app crear/listar --help
    .argv;
module.exports = {
    argv
};