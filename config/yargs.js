const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
};

const argv = require('yargs')
    .command('direccion', 'Ingresar dirección de ciudad', direccion)
    .help()
    .argv;

module.exports = {
    argv
};