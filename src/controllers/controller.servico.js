import ServicoModel from "../models/model.servico.js";

class ServicoController {
    // Lista todos os serviços
    static getAllServicos(req, res) {
        try {
            ServicoModel.getAllServicos(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( { error: "Ocorreu um erro ao buscar os serviços."} )
                }

                if (!result[0]) {
                    return res.status(404).json( { error: "Não foram encontrado serviços."} )
                }

                return res.status(200).json(result);
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Cria um serviço
    static createServico(req, res) {
        const p = req.body

        try {
            ServicoModel.createServico(p, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar serviço', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o serviço." } )
                }

                return res.status(201).json( { 
                    message: "Serviço cadastrado com sucesso",
                    data: { id: result.insertId}
                 })
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Edita um serviço
    static editServico(req, res) {
        const id = req.params.id;
        const p = req.body;
        const valor = p.valor;
        const oficina = p.oficina;
        const descricao = p.descricao;

        try {
            ServicoModel.editServico(p, id, function(err, result){
                if (err) {
                    console.error("Erro ao editar serviço", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao editar o serviço." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Serviço não encontrado" } );
                }

                return res.status(200).json({
                    message: "Serviço editado com sucesso",
                    data: {
                        id, valor, oficina, descricao
                    }
                })
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Remove um serviço
    static removeServico(req, res) {
        let id = req.params.id

        try {
            ServicoModel.removeServico(id, function(err, result){
                if (err) {
                    console.error("Erro ao deletar serviço.", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao deletar o serviço." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Serviço não encontrado." } );
                }

                return res.status(200).json( { message: "Serviço deletado com sucesso.", data:{ id } } );
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
}

export default ServicoController;