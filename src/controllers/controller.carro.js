import CarroModel from "../models/model.carro.js";

class CarroController {
    // Lista todos os carros
    static getAllCarros(req, res) {
        try {
            CarroModel.getAllCarros(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( { error: "Ocorreu um erro ao buscar os carros."} )
                }

                if (!result[0]) {
                    return res.status(404).json( { error: "Não foram encontrados carros."} )
                }

                return res.status(200).json(result);
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Cria um carro
    static createCarro(req, res) {
        const p = req.body

        try {
            CarroModel.createCarro(p, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar carro', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o carro." } )
                }

                return res.status(201).json( { 
                    message: "Carro cadastrado com sucesso"
                 })
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Edita um carro
    static editCarro(req, res) {
        const chassi = req.params.chassi;
        const p = req.body;
        const cor = p.cor;
        const modelo = p.modelo;
        const marca = p.marca;
        const placa = p.placa;
        const ano = p.ano;
        const categoria_id_categoria = p.categoria_id_categoria;
        
        try {
            CarroModel.editCarro(p, chassi, function(err, result){
                if (err) {
                    console.error("Erro ao editar carro", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao editar o carro." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Carro não encontrado" } );
                }

                return res.status(200).json({
                    message: "Carro editado com sucesso",
                    data: {
                        chassi, cor, modelo, marca, placa, ano, categoria_id_categoria
                    }
                })
            })            

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Remove um carro
    static removeCarro(req, res) {
        let chassi = req.params.chassi;

        try {
            CarroModel.removeCarro(chassi, function(err, result){
                if (err) {
                    console.error("Erro ao deletar carro.", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao deletar o carro." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Carro não encontrado." } );
                }

                return res.status(200).json( { message: "Carro deletado com sucesso.", data:{ chassi } } );
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
}

export default CarroController;