<?php 

    include('conection-db.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];         
        $query = "SELECT * FROM tbl_coleccion WHERE id = $id";
        $result = mysqli_query($connection, $query);

        if(!$result){
            die('Single Query Failed');
        }

        $json = array();
        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'ruta_img_portada' => $row['ruta_img_portada'],
                'nombre_coleccion' => $row['nombre_coleccion'],
                'autor' => $row['autor'],
                'link_autor' => $row['link_autor'],
                'descripcion' => $row['descripcion'],
                'id' => $row['id']
                );                
                
        }             
        $jsonstring = json_encode($json[0]);       
        echo $jsonstring;
    }

?>