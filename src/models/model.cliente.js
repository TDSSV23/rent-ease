import { con } from "../config/database.js";

class ClienteModel {

    static getAllClientes(callback) {
        let sql = `select * from cliente`;

        con.query(sql, function(err, result){
            if (err)
                callback (err, null);
            else 
                callback(null, result);
        });
    }

}

export default ClienteModel;