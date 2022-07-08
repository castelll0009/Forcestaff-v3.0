<?php
    include('conection-db.php');
    if(isset($_POST['name_collection'])){
        //$ruta_img_portada = "../imgs/collections/";
        //$ruta_img_portada = $ruta_img_portada .$_POST['nombre_imagen_portada'];
        $ruta_img_portada = $_POST['ruta_img_portada'];
        $name_collection = $_POST['name_collection'];
        $name_autor  = $_POST['name_autor'];
        $link_autor = $_POST['link_autor'];
        $description  = $_POST['description'];                            

        $query = "INSERT into tbl_coleccion(ruta_img_portada, nombre_coleccion, autor, link_autor, descripcion) 
        VALUES ('$ruta_img_portada','$name_collection','$name_autor','$link_autor','$description')";        
        $result = mysqli_query($connection, $query);
        
        if(!$result) {
            die('Query Failed' . mysqli_error($connection));
        }

        echo 'Collection Added Successfully';
    }

?>