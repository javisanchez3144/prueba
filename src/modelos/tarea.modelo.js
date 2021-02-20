
const mongoose = require ('mongoose');
const { Schema } = mongoose;
//creacion del modelo de datos de mongodb
const Tarea = new Schema({
    cedula: Number,
    nombre: String,
    apellido: String,
    fecha_nac: Date,
    profesion: String,
    estado_civil: String,
    hijos: Number,
    img: String

});

    

module.exports = mongoose.model('Tarea', Tarea);