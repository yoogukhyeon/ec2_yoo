let mysql = require('mysql2');
let db_info = {
    host: 'awsyoo.cxm95rfml4lf.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'dkswoah589318!!',
    database: 'awsYoo'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}