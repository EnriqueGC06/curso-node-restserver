const role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error( `El corre: ${ correo }, ya está registrado` );
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el id existe
    const existeUsuario = await Usuario.findById();
    if ( !existeUsuario ) {
        throw new Error( `El id: ${ id } no existe!!` );
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}