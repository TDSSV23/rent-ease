import CategoriaModel from "../models/model.categoria.js";

class CategoriaController {
    // Lista as categorias
    static getAllCategorias(req, res) {
        try {
            CategoriaModel.getAllCategorias(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( { error: "Ocorreu um erro ao buscar as categorias."} )
                }

                if (!result[0]) {
                    return res.status(404).json( { error: "Não foram encontrado categorias."} )
                }

                return res.status(200).json(result);
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor."} );
        }
    }
    // Cria uma categoria
    static createCategoria(req, res) {
        const p = req.body;

        try {
            CategoriaModel.createCategoria(p, function(err, result){
                if (err) {
                    console.error('Erro ao cadastrar categoria', err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar a categoria." } )
                }

                return res.status(201).json( { 
                    message: "Categoria cadastrada com sucesso",
                    data: { id: result.insertId}
                 })
            })

        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno do servidor." })
        }
    }
    // Edita uma categoria
    static editCategoria(req, res) {
        const id = req.params.id;
        const p = req.body;
        const preco_diaria = p.preco_diaria;
        const nome = p.nome;
        const descricao = p.descricao;

        try {
            CategoriaModel.editCategoria(p, id, function(err, result){
                if (err) {
                    console.error("Erro ao editar categoria", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao editar a categoria." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Categoria não encontrada" } );
                }

                return res.status(200).json({
                    message: "Categoria editada com sucesso",
                    data: {
                        id, preco_diaria, nome, descricao
                    }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor." } )
        }
    }
    // Remove uma categoria
    static removeCategoria(req, res) {
        let id = req.params.id;

        try {
            CategoriaModel.removeCategoria(id, function(err, result){
                if (err) {
                    console.error("Erro ao deletar categoria.", err);
                    return res.status(500).json( { error: "Ocorreu um erro ao deletar a categoria." } );
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json( { message: "Categoria não encontrada." } );
                }

                return res.status(200).json( { message: "Categoria deletada com sucesso.", data:{ id } } );
            })
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor." } )
        }
    }
}

export default CategoriaController;