import { Router } from 'express';
import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.post('/clients', ClientController.create);

export default routes;