import {} from "dotenv/config.js";
import express from "express";
import cors from "cors";
import routeCliente from "./routes/route.cliente.js";
import routeCategoria from "./routes/route.categoria.js";
import routeServico from "./routes/route.servico.js";
import routeCarro from "./routes/route.carro.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use(routeCliente);
app.use(routeCategoria);
app.use(routeServico);
app.use(routeCarro);

// Levanta o Servidor
app.listen(process.env.PORT, function(){
    console.log("Servidor executando na porta 3001");
});