import express, {Express, Request, Response} from 'express';
import AdmissionController from '../Controllers/AdmissionController';

const admissionRoutes: Express = express();


// admissionRoutes.get('/get', ImmigrationController.getrecord)
// admissionRoutes.get('/:id?', ImmigrationController.getrecord)
admissionRoutes.post('/', AdmissionController.addAdmission)
admissionRoutes.get('/get', AdmissionController.getData)
admissionRoutes.get('/:id?', AdmissionController.getAdmissionbyID)


export default admissionRoutes;