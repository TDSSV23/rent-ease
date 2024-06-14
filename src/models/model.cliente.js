import { con } from "../config/database.js";

class ClienteModel {
    // Lista todos os clientes
    static getAllClientes(callback) {
        let sql = `select * from cliente`;

        con.query(sql, function(err, result){
            if (err)
                callback (err, null);
            else 
                callback(null, result);
        });
    }
    // Cria um cliente
    static createCliente(dados, callback) {
        let sql = `insert into cliente(cnh, nome, rg, idade, end_logradouro, end_numero, end_bairro, end_cidade, end_uf) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`

        con.query(sql, [dados.cnh, dados.nome, dados.rg, dados.idade, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf], function(err, result){
            if (err)
                callback(err, null)
            else 
                callback(null, result);
        });
    }
    // Edita um cliente
    static editCliente(dados, CNH, callback) {
        let sql = `update cliente set nome = ?, rg = ?, idade = ?, end_logradouro = ?, end_numero = ?, end_bairro = ?, end_cidade = ?, end_uf = ? where cnh = ?`;

        con.query(sql, [dados.nome, dados.rg, dados.idade, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, CNH], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }
    // Deleta um cliente
    static removeCliente(cnh, callback) {
        let sql = `delete from cliente where cnh = ?`

        con.query(sql, [cnh], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }
}

export default ClienteModel;