<?php
    include("conection-db.php");

    $search = $_POST["search"];

    if(!empty($search)){
        $query = "SELECT tbl_coleccion.id AS currentID, tbl_coleccion.ruta_img_portada AS ruta_img_portada, tbl_coleccion.nombre_coleccion AS 				nombre_coleccion, tbl_coleccion.autor AS autor, tbl_coleccion.link_autor AS link_autor, tbl_coleccion.descripcion AS descripcion,
        (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
          FROM tbl_item_coleccion, tbl_coleccion
          WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id =currentID
          ORDER BY tbl_item_coleccion.id DESC
          LIMIT 1)AS ruta_img_item1,
    
          (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
          FROM tbl_item_coleccion, tbl_coleccion
          WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id =currentID
          ORDER BY tbl_item_coleccion.id DESC
          LIMIT 1,1) AS ruta_img_item2,
    
          (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
          FROM tbl_item_coleccion, tbl_coleccion
          WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id =currentID
          ORDER BY tbl_item_coleccion.id DESC
          LIMIT 2,1) ruta_img_item3
    FROM tbl_coleccion 
    WHERE nombre_coleccion 
    LIKE '$search%'
    ORDER BY tbl_coleccion.id DESC";

        $result  = mysqli_query($connection, $query);
        if(!$result){
            die("Query Error". mysqli_error($connection));
        }

        $json = array(); 
        while ($row = mysqli_fetch_array($result)){
            $json[] = array(
                'ruta_img_portada' => $row['ruta_img_portada'],
                'ruta_img_item1' => $row['ruta_img_item1'],
                'ruta_img_item2' => $row['ruta_img_item2'],
                'ruta_img_item3' => $row['ruta_img_item3'],
                'nombre_coleccion' => $row['nombre_coleccion'],
                'autor' => $row['autor'],
                'descripcion' => $row['descripcion'],
                'id' => $row['currentID']
            );          
        }
        $json_string = json_encode($json);
        echo $json_string;
    }
?>