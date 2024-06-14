import { con } from "../config/database.js";

class CategoriaModel {
    // Lista as categorias
    static getAllCategorias(callback) {
        let sql = `select * from categoria`

        con.query(sql, function(err, result){
            if (err)
                callback (err, null);
            else 
                callback(null, result);
        });
    }
    // Cria uma categoria
}

export default CategoriaModel;