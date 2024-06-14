import { Router } from "express";
import CategoriaController from "../controllers/controller.categoria.js";

const routeCategoria = Router()

routeCategoria.get("/categoria", CategoriaController.getAllCategorias);

export default routeCategoria;