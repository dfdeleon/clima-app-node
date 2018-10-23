const axios = require('axios');

const getClima = async(latitud, longitud) => {

    // let encodeUrl = encodeURI(latitud, longitud);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=35d514138453fcc210b908363f2b30d4`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}