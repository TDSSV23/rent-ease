import { con } from "../config/database.js";

class CarroModel {
    // Lista todos os carros
    static getAllCarros(callback) {
        let sql = `select * from carro`;

        con.query(sql, function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
    // Cria um carro
    static createCarro(dados, callback) {
        let sql = `insert into carro (chassi, cor, modelo, marca, placa, ano, categoria_id_categoria) values (?, ?, ?, ?, ?, ?, ?)`

        con.query(sql, [dados.chassi, dados.cor, dados.modelo, dados.marca, dados.placa, dados.ano, dados.categoria_id_categoria], function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);

        })
    }
    // Edita um carro
    static editCarro(dados, chassi, callback) {
        let sql = `update carro set cor = ?, modelo = ?, marca = ?, placa = ?, ano = ?, categoria_id_categoria = ? where chassi = ?`;

        con.query(sql, [dados.cor, dados.modelo, dados.marca, dados.placa, dados.ano, dados.categoria_id_categoria, chassi], function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
    // Remove um carro
    static removeCarro(chassi, callback) {
        let sql = `delete from carro where chassi = ?`

        con.query(sql, chassi, function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);
        })
    }
}

export default CarroModel;