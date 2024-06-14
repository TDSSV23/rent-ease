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
}

export default CategoriaController;