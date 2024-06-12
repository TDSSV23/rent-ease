import { Router } from 'express';
import ClienteController from '../controllers/controller.cliente.js'
import ClienteModel from '../models/model.cliente.js';

const routeCliente = Router();

routeCliente.get("/cliente", ClienteController.getAllClientes);
routeCliente.post("/clientes", ClienteModel.createCliente)

export default routeCliente;