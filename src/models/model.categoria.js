import { con } from "../config/database.js";

class CategoriaModel {
    // Lista as categorias
    static getAllCategorias(callback) {
        let sql = `select * from categoria`

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else 
                callback(null, result);
        });
    }
    // Cria uma categoria
    static createCategoria(dados, callback) {
        let sql = `insert into categoria (preco_diaria, nome, descricao) values (?, ?, ?)`

        con.query(sql, [dados.preco_diaria, dados.nome, dados.descricao], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }
    // Edita uma categoria
    static editCategoria(dados, id, callback) {
        let sql = `update categoria set preco_diaria = ?, nome = ?, descricao = ? where id_categoria = ?`;

        con.query(sql, [dados.preco_diaria, dados.nome, dados.descricao, id], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }
    // Remove uma categoria
    static removeCategoria(id, callback) {
        let sql = `delete from categoria where id_categoria = ?`

        con.query(sql, [id], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }
}

export default CategoriaModel;