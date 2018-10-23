// const axios = require('axios');

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

        return (`El clima en ${coord.direccion} es de ${temp}°`)
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));