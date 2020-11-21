const mysql = require('mysql');
const {database} = require('./config');
const {promisify} = require('util');

const conexion = mysql.createConnection(database);

conexion.connect((error) => {

    if(error) throw error
    
    console.log("Se ha realizado la conexion");

    return

})

conexion.query = promisify(conexion.query);

module.exports = {
    conexion
}