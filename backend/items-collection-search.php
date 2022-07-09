<?php
    include("conection-db.php");

    $search = $_POST["search"];

    if(!empty($search)){
        $query = "SELECT * FROM tbl_item_coleccion WHERE nombre_item LIKE '$search%'
        ";
        $result  = mysqli_query($connection, $query);
        if(!$result){
            die("Query Error". mysqli_error($connection));
        }

        $json = array(); 
        while ($row = mysqli_fetch_array($result)){
            $json[] = array(
                'ruta_img_item' => $row['ruta_img_item'],
                'id_item_coleccion' => $row['id_item_coleccion'],
                'nombre_item' => $row['nombre_item'],
                'precio' => $row['precio'],
                'coleccion_pertenece' => $row['coleccion_pertenece'],
                'id' => $row['id']
            );          
        }
        $json_string = json_encode($json);
        echo $json_string;
    }
?>