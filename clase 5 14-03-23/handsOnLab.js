const ManagerUsuarios= require('./managerUsuario');

const manager = new ManagerUsuarios();

// Ejemplo de uso de crearUsuario
const nuevoUsuario = {
  nombre: 'Juan',
  apellido: 'Pérez',
  edad: 25,
  curso: 'Programación',
};

const nuevoUsuario2 = {
  nombre: 'Sol',
  apellido: 'Pérez',
  edad: 25,
  curso: 'Programación',
};

const nuevoUsuario3 = {
  nombre: 'CACA',
  apellido: 'Pérez',
  edad: 25,
  curso: 'Programación',
};
// manager.crearUsuario(nuevoUsuario)
//   .then(() => console.log('Usuario creado correctamente'))
//   .catch(error => console.error(error));

//   manager.crearUsuario(nuevoUsuario2)
//   .then(() => console.log('Usuario creado correctamente'))
//   .catch(error => console.error(error));

// // Ejemplo de uso de consultarUsuarios

  manager.crearUsuario(nuevoUsuario3)
  .then(() => console.log('Usuario creado correctamente'))
  .catch(error => console.error(error));


  manager.consultarUsuarios()
  .then(usuarios => console.log(usuarios))
  .catch(error => console.error(error));
