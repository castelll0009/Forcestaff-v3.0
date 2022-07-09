<?php
    include('conection-db.php');

    if(isset($_POST['id'])){
        $id =  $_POST['id'];
        //$ruta_img_portada = "imgs/collections/";
        //$ruta_img_portada = $ruta_img_portada .$_POST['nombre_imagen_portada'];
        $ruta_img_item = $_POST['ruta_img_item'];
        $id_item_collection = $_POST['id_item_collection'];
        $name_item = $_POST['name_item'];
        $collection_owner  = $_POST['collection_owner'];
        $price = $_POST['price'];          

        $query = "UPDATE tbl_item_coleccion SET ruta_img_item = '$ruta_img_item', id_item_coleccion = '$id_item_collection', nombre_item = '$name_item',
        coleccion_pertenece = '$collection_owner', precio = '$price' 
        WHERE id = '$id'";

        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Edit Query Failed');
        }
    }

    echo "Update Item Successfully";
?>