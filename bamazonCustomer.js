var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "12345678",

    database: "bamazon"
});

var readproducts = function(){
    connection.query(
        "SELECT * FROM products",
        function(err,res){
            console.log(res);

            connection.end();
        }
    );
}

connection.connect(function(err){
    if (err) throw err;
    readproducts();
});