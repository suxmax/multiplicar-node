//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al.${limite}.txt `, data, (err) => {
            if (err) reject(err);
            else resolve(`${base} al ${limite}.txt `.green);
        });
    });
}

let listarTabla = (base, limite = 10) => { //mostra la tavola in base al limite con limite base =10       
    console.log('======================'.green);
    console.log(`===tabla de %{base}===`.red);
    console.log('======================'.white);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }


};

module.exports = {
    crearArchivo,
    listarTabla
};