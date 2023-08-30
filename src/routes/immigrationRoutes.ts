import express, {Express, Request, Response} from 'express';
import ImmigrationController from '../Controllers/ImmigrationController';

const immigrationRoutes: Express = express();


// immigrationRoutes.get('/get', ImmigrationController.getrecord)
// immigrationRoutes.get('/:id?', ImmigrationController.getrecord)
immigrationRoutes.post('/', ImmigrationController.addBook)


export default immigrationRoutes;