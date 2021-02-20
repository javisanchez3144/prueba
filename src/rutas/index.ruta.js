'use strict';

import { Router } from 'express';
import tarea from './tarea.ruta';

//ruta prinicipal para la api
const router = Router();


router.use('/tarea', tarea);



module.exports = router;