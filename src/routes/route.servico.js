import { Router } from "express";
import ServicoController from "../controllers/controller.servico.js";

const routeServico = Router()

routeServico.get("/servico", ServicoController.getAllServicos);
routeServico.post("/servico", ServicoController.createServico);
routeServico.put("/servico/:id", ServicoController.editServico);
routeServico.delete("/servico/:id", ServicoController.removeServico);

export default routeServico;