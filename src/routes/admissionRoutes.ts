import express, {Express, Request, Response} from 'express';
import ImmigrationController from '../Controllers/ImmigrationController';
import AdmissionController from '../Controllers/AdmissionController';

const admissionRoutes: Express = express();


// admissionRoutes.get('/get', ImmigrationController.getrecord)
// admissionRoutes.get('/:id?', ImmigrationController.getrecord)
admissionRoutes.post('/', AdmissionController.addBook)


export default admissionRoutes;