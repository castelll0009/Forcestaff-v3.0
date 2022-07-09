<?php 

    include('conection-db.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];         
        $query = "SELECT * FROM tbl_item_coleccion WHERE id = $id";
        $result = mysqli_query($connection, $query);

        if(!$result){
            die('Single Item Query Failed');
        }

        $json = array();
        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'ruta_img_item' => $row['ruta_img_item'],
                'id_item_coleccion' => $row['id_item_coleccion'],
                'nombre_item' => $row['nombre_item'],
                'precio' => $row['precio'],
                'coleccion_pertenece' => $row['coleccion_pertenece'],
                'id' => $row['id']
                );                
                
        }             
        $jsonstring = json_encode($json[0]);       
        echo $jsonstring;
    }

?>