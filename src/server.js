import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from "./rutas/index.ruta" 
const mongoose = require ('mongoose');
const app = express();
const http = require('http').Server(app);
import multer from 'multer';

app.use(cors())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );
    if('OPTIONS' === req.method) res.status(200).end()
    else next()
});

//conexion a la base de datos mongo

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
//mostrar las peticiones
app.use(morgan('dev'));
//iteraccion de tipo json
app.use(json());
// Midleware de rutas
app.use(multer({
    dest: 'public/img'
}).single('file'));
app.use('/',router)
//hacemos de tipo public la carpeta public
app.use(express.static(__dirname + '/public'));

//corriendo el serrvidor
async function main(){
    await http.listen(3000, () =>{
        console.log('Servidor backend corriendo en el puerto 3000.')
    });
}
main()

export default app;
