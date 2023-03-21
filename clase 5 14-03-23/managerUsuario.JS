const fs = require ('fs').promises

class ManagerUsuarios
{
    constructor()
    {
        this.path = 'Usuarios.json'
    }

    async crearUsuario (usuario) 
    {
        let usuarios =[]
        //Verifico la existencia del archivo y si no existe creo el ID y lo pusheo
        try
        {
            const contenido = await fs.readFile(this.path, 'utf-8');
            usuarios = JSON.parse(contenido);
        }
        catch (error)
        {
            if (error.code !== 'ENOENT') {
                throw new Error(`Error al leer el archivo ${this.path}: ${error.message}`);
              }
        }

        const ultimoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id : 0;
        usuario.id = ultimoId + 1; //No le hace falta crear la variable, directamente se lo asigna.

        usuarios.push(usuario);
        try {
          await fs.writeFile(this.path, JSON.stringify(usuarios));
        } catch (error) {
          throw new Error(`Error al escribir en el archivo ${this.path}: ${error.message}`);
        }

    }

    async consultarUsuarios() {
        // Leer el archivo Usuarios.json y parsear su contenido a un array
        let usuarios = [];
        try {
          const contenido = await fs.readFile(this.path, 'utf-8');
          usuarios = JSON.parse(contenido);
        } catch (error) {
          // Si el archivo no existe, no hay usuarios registrados aún
          if (error.code !== 'ENOENT') {
            throw new Error(`Error al leer el archivo ${this.path}: ${error.message}`);
          }
        }
    
        return usuarios;
      }
    
    
}

module.exports = ManagerUsuarios;