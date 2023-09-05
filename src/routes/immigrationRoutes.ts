import express, {Express, Request, Response} from 'express';
import ImmigrationController from '../Controllers/ImmigrationController';

const immigrationRoutes: Express = express();


// immigrationRoutes.get('/get', ImmigrationController.getrecord)
// immigrationRoutes.get('/:id?', ImmigrationController.getrecord)
immigrationRoutes.post('/', ImmigrationController.addForm)
immigrationRoutes.get('/get', ImmigrationController.getRecord)
immigrationRoutes.get('/:id?', ImmigrationController.getRecordbyID)

export default immigrationRoutes;