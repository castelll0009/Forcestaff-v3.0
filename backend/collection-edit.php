<?php
    include('conection-db.php');

    if(isset($_POST['id'])){
        $id =  $_POST['id'];
        //$ruta_img_portada = "imgs/collections/";
        //$ruta_img_portada = $ruta_img_portada .$_POST['nombre_imagen_portada'];
        $ruta_img_portada = $_POST['ruta_img_portada'];
        $name_collection = $_POST['name_collection'];
        $name_autor  = $_POST['name_autor'];
        $link_autor = $_POST['link_autor'];
        $description  = $_POST['description'];        

        $query = "UPDATE tbl_coleccion SET ruta_img_portada = '$ruta_img_portada', nombre_coleccion = '$name_collection',
        autor = '$name_autor', link_autor = '$link_autor', descripcion = '$description' 
        WHERE id = '$id'";

        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Edit Query Failed');
        }
    }

    echo "Update Product Successfully";
?>