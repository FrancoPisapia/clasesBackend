import multer from 'multer';
import {fileURLToPath} from 'url';
import {dirname} from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

// donde se almacenarán los archivos

// const storage = multer.diskStorage({
//     //destination hace referencia a donde se almacenaran las cosas
//     destination: function(req,file,cb){
//         cb(null,__dirname+'/public/img')//Especificamos ruta
//     },
//     //filename  hace referencia al nombre final que contendrá el archivo
//     filename:function(req,file,cb){
//         cb(null,file.originalname)//originalname indica que se mantendra el nombre inicial
//     }
// })
// const uploader = multer ({storage});
// export default uploader

export default __dirname