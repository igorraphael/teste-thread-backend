import { Router } from 'express';
import ClientController from './app/controllers/ClientController';
import AddressController from './app/controllers/AddressController';

const routes = new Router();

routes.post('/clients', ClientController.create);
routes.post('/address', AddressController.create);

export default routes;