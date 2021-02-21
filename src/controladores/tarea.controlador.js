'use strict';
import TareaModelo from '../modelos/tarea.modelo';

class Tarea {
    //controladores
    async Obtener(req, res) {
        try {
            
            let resultado = await TareaModelo.find();
            let i=[]
            resultado.forEach(x=>{
                i.push({
                    _id: x._id,
                    fecha_nac: ((JSON.stringify(x.fecha_nac)).split('T')[0]).replace(/["']/g, ''),
                    cedula: x.cedula,
                    nombre: x.nombre,
                    apellido: x.apellido,
                    profesion: x.profesion,
                    estado_civil: x.estado_civil,
                    hijos: x.hijos
                })
            })
            
            res.status(200).json({ ok: true, data:i })

            
        } catch (e) {
            console.log(e)
            res.status(500).json({ ok: false, mensaje: 'Ocurrió un error inesperado al procesar la petición.' })
        }
            
    }
    async Obtenerid(req, res) {
        try {
            
            let resultado = await TareaModelo.findById(req.params.id);
            res.status(200).json({ ok: true, data:resultado })

            
        } catch (e) {
            console.log(e)
            res.status(500).json({ ok: false, mensaje: 'Ocurrió un error inesperado al procesar la petición.' })
        }
            
    }
    async Enviar(req, res) {
        try {
            let datos = {
                cedula: req.body.cedula,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha_nac: req.body.fecha_nac,
                profesion: req.body.profesion,
                estado_civil: req.body.estado_civil,
                hijos: req.body.hijos
            }
            //console.log(req.file)
            let resultado = new TareaModelo(datos);
            await resultado.save();
            res.status(200).json({ ok: true, observacion: 'tarea guardada' })

            
        } catch (e) {
            console.log(e)
            res.status(500).json({ ok: false, mensaje: 'Ocurrió un error inesperado al procesar la petición.' })
        }
            
    }
    async Actualizar(req, res) {
        try {
            
            await TareaModelo.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({ ok: true, observacion: 'tarea actualizada' })

            
        } catch (e) {
            console.log(e)
            res.status(500).json({ ok: false, mensaje: 'Ocurrió un error inesperado al procesar la petición.' })
        }
            
    }
    async Eliminar(req, res) {
        try {
            
            await TareaModelo.findByIdAndRemove(req.params.id,req.query);
            res.status(200).json({ ok: true, observacion: 'tarea eliminada' })

            
        } catch (e) {
            console.log(e)
            res.status(500).json({ ok: false, mensaje: 'Ocurrió un error inesperado al procesar la petición.' })
        }
            
    }
    

}

module.exports = new Tarea(new TareaModelo())