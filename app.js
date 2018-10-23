// const axios = require('axios');
const colors = require('colors/safe');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.latitud, coord.longitud);

        return (`El clima en ${colors.cyan(coord.direccion)} es de ${colors.cyan(temp)}°`)
    } catch (e) {
        return `No se pudo determinar el clima en ${colors.red(direccion)}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));