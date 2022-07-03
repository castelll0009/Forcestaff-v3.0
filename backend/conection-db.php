<?php //gestiona las peticiones que se hacen desde el request-app.js 
    //No conectamos a la base de datos
    $connection = mysqli_connect(
        //host,user,pasword,nombre base datos,
        /* base de datos Clever cloud
        'blzwwwafrtnoulyompah-mysql.services.clever-cloud.com', 'uflmxyisjbdu7w7l', 'k5ulb9EJWmdqIgYLjNHF', 'blzwwwafrtnoulyompah'
        */
        //conexion Base de datos hosgatos
        /*'127.0.0.1', 'root','','db-forcestaff'*/
        // CONECTION TO DB HOSTGATOR
        '162.241.2.168','forcesta_castelll009','Castillo1997177-','forcesta_forcestaff-db'
    );

    /*
    if($connection){
        echo "database is connected";
    }else{
        echo "no se pudo conectar a la BD";
    }
    */

?>