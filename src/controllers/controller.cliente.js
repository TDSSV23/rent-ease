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
            ClienteModel.createCliente(p, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar cliente', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o cliente." } )
                }

                return res.status(201).json( { 
                    message: "Cliente cadastrado com sucesso"
                 })
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno do servidor." })
        }
    }
    // Edita um cliente
    static editCliente(req, res) {
        const cnh = req.params.cnh;
        const p = req.body;
        const nome = p.nome;
        const rg = p.rg;
        const idade = p.idade;
        const end_logradouro = p.end_logradouro;
        const end_numero = p.end_numero;
        const end_bairro = p.end_bairro;
        const end_cidade = p.end_cidade;
        const end_uf = p.end_uf;

        try {
            ClienteModel.editCliente(p, cnh, function(err, result){
                if (err) {
                    console.error("Erro ao editar cliente", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao editar o cliente." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Cliente não encontrado" } );
                }

                return res.status(200).json({
                    message: "Cliente editado com sucesso",
                    data: {
                        cnh, nome, rg, idade, end_logradouro, end_numero, end_bairro, end_cidade, end_uf
                    }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor." } )
        }
    }
    // Deleta um cliente
    static removeCliente(req, res) {
        let cnh = req.params.cnh;

        try {
            ClienteModel.removeCliente(cnh, function(err, result){
                if (err) {
                    console.error("Erro ao deletar cliente.", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao deletar o cliente." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Cliente não encontrado." } );
                }

                return res.status(200).json( { message: "Cliente deletado com sucesso.", data:{ cnh } } );
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor." } )
        }
    }
}

export default ClienteController;