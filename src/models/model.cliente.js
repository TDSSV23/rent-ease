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
    static createCliente(nome, email, senha, callback) {
        const hash = bcrypt.hashSync(senha, 10);
        senha = hash;
        
        let sql = `insert into usuario (nome, email, senha) values (?, ?, ?)`;

        con.query(sql, [nome, email, senha], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    static editCliente(id, nome, email, callback) {
        let sql = `update usuario set nome = ?, email = ? where id_usuario = ?`;

        con.query(sql, [nome, email, id], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    static removeCliente(id, callback) {
        let sql = `delete from usuario where id_usuario=?`

        con.query(sql, [id], function(err, result){
            if (err)
                callback(err, null)
            else 
                callback(null, result)
        });
    }
}

export default ClienteModel;