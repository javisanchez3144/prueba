import { Router } from 'express';
const router = Router();
import Tareas from '../controladores/tarea.controlador';

//Rutas para el formulario

router.get('/obtener',Tareas.Obtener.bind(Tareas));
router.get('/obtener/:id',Tareas.Obtenerid.bind(Tareas));
router.post('/enviar',Tareas.Enviar.bind(Tareas));
router.put('/actualizar/:id',Tareas.Actualizar.bind(Tareas));
router.delete('/eliminar/:id',Tareas.Eliminar.bind(Tareas));

module.exports = router;
