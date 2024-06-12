import ClienteModel from "../models/model.cliente.js";

class ClienteController {
    // Lista todos os clientes
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
    // Cria um cliente
    static createCliente(req, res) {
        const p = req.body;

        try {
            PedidoModel.createPedido(p, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar cliente.', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o cliente." } )
                }

                return res.status(201).json( {
                    message: "Cliente cadastrado com sucesso.",
                    data: {
                        id: result.insertId,
                    }
                } )
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno do servidor." })
        }
    }
}

export default ClienteController;