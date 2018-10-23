const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coord.lat,
        longitud: coord.lng
    }
}

module.exports = {
    getLugarLatLng
}