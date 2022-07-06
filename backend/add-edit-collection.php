<?php
    include("conection-db.php");

    $search = $_POST["search"];

    if(!empty($search)){
        $query = "SELECT * FROM tbl_coleccion WHERE nombre_coleccion LIKE '$search%'";
        $result  = mysqli_query($connection, $query);
        if(!$result){
            die("Query Error". mysqli_error($connection));
        }

        $json = array(); 
        while ($row = mysqli_fetch_array($result)){
            $json[] = array(
                'ruta_img_portada' => $row['ruta_img_portada'],
                'nombre_coleccion' => $row['nombre_coleccion'],
                'autor' => $row['autor'],
                'descripcion' => $row['descripcion'],
                'id' => $row['id']
            );          
        }
        $json_string = json_encode($json);
        echo $json_string;
    }
?>