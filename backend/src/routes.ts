import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesContoller from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC - Model - View - Controllers

routes.get('/orphanages', OrphanagesContoller.index); 
routes.get('/orphanages/:id', OrphanagesContoller.show); 
routes.post('/orphanages', upload.array('images'), OrphanagesContoller.create); 

export default routes;