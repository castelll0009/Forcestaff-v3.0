<?php
    include('conection-db.php');
if(isset($_POST['name_item'])){
        //$ruta_img_portada = "../imgs/collections/";
        //$ruta_img_portada = $ruta_img_portada .$_POST['nombre_imagen_portada'];
        $ruta_img_item = $_POST['ruta_img_item'];
        $id_item_collection = $_POST['id_item_collection'];
        $name_item = $_POST['name_item'];
        $collection_owner  = $_POST['collection_owner'];
        $price = $_POST['price'];                       

        $query = "INSERT into tbl_item_coleccion(ruta_img_item, id_item_coleccion, nombre_item, coleccion_pertenece, precio) 
        VALUES ('$ruta_img_item','$id_item_collection','$name_item','$collection_owner','$price')";        
        $result = mysqli_query($connection, $query);
        
        if(!$result) {
            die('Query Failed' . mysqli_error($connection));
        }

        echo 'Item Collection Added Successfully';
    }

?>