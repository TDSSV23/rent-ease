import { Router } from 'express';
import ClienteController from '../controllers/controller.cliente.js'

const routeCliente = Router();

routeCliente.get("/cliente", ClienteController.getAllClientes);
routeCliente.post("/cliente", ClienteController.createCliente);
routeCliente.put("/cliente/:cnh", ClienteController.editCliente);
routeCliente.delete("/cliente/:cnh", ClienteController.removeCliente);


export default routeCliente;