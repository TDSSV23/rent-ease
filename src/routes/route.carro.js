import { Router } from "express";
import CarroController from "../controllers/controller.carro.js";

const routeCarro = Router()

routeCarro.get("/carro", CarroController.getAllCarros);
routeCarro.post("/carro", CarroController.createCarro);
routeCarro.put("/carro/:chassi", CarroController.editCarro);
routeCarro.delete("/carro/:chassi", CarroController.removeCarro);

export default routeCarro;