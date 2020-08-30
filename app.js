const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //uso la distruzione con let {} o const{}
const argv = require('./config/yargs').argv; //cos¡, con .argv vado ed estrarre solo cio che mi interessa dal percorso e lo assegno alla nuova variabile argv
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('comando no reconocido');
}
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(argv.limite);