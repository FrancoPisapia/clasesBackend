import express from 'express'

const router = express.Router();
const app = express();

const users = [];

app.use(express.urlencoded({ extended: true }));

router.get ('/register', (req, res) => {
	res.render('register');
});

router.post('/user', (req, res) =>{
	// Obtener los datos del formulario
	const { nombre, correo, contraseña } = req.body;
	// Crear un objeto con los datos del usuario
	const user = { nombre, correo, contraseña };
	// Agregar el usuario al arreglo
	users.push(user);
	// Confirmar que el usuario se ha guardado exitosamente
	console.log('Usuario guardado:', user);
	// Redirigir al usuario a una página de confirmación
	res.redirect('/confirmation');
});

router.get('/confirmation', (req, res) => {
	res.send('¡Usuario registrado exitosamente!');
});


export default router