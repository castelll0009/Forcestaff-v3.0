<?php

include("conection-db.php");

  $query = "SELECT * 
    FROM tbl_coleccion
  ";
  $result = mysqli_query($connection, $query);
  // si no hay  encuentra resultados se cierra la conexion
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
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
  echo $jsonstring = json_encode($json);
  //echo $jsonstring;  
?>
