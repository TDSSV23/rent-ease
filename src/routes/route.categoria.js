import { Router } from "express";
import CategoriaController from "../controllers/controller.categoria.js";

const routeCategoria = Router()

routeCategoria.get("/categoria", CategoriaController.getAllCategorias);
routeCategoria.post("/categoria", CategoriaController.createCategoria);
routeCategoria.put("/categoria/:id", CategoriaController.editCategoria);
routeCategoria.delete("/categoria/:id", CategoriaController.removeCategoria);

export default routeCategoria;