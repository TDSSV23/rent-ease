import { con } from "../config/database.js";

class ServicoModel {
    // Lista todos os serviços
    static getAllServicos(callback) {
        let sql = `select * from servico`

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
    // Cria um serviço
    static createServico(dados, callback) {
        let sql = `insert into servico (valor, oficina, descricao) values (?, ?, ?)`

        con.query(sql, [dados.valor, dados.oficina, dados.descricao], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
    // Edita um serviço
    static editServico(dados, id, callback) {
        let sql = `update servico set valor = ?, oficina = ?, descricao = ? where id_servico = ?`

        con.query(sql, [dados.valor, dados.oficina, dados.descricao, id], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
    // Remove um serviço
    static removeServico(id, callback) {
        let sql = `delete from servico where id_servico = ?`

        con.query(sql, id, function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
}   

export default ServicoModel;