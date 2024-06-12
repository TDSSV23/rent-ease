import ClienteModel from "../models/model.cliente.js";

class ClienteController {
    
    static getAllClientes(req, res){
        try {
            ClienteModel.getAllClientes(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( { error: "Ocorreu um erro ao buscar os clientes."} )
                }

                if (!result[0]) {
                    return res.status(404).json( { error: "Não foram encontrados clientes."} )
                }

                return res.status(200).json(result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }

}

export default ClienteController;