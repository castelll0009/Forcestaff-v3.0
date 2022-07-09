<?php

include("conection-db.php");

  $query = "SELECT * 
    FROM tbl_item_coleccion
    ORDER BY id DESC
  ";
  $result = mysqli_query($connection, $query);
  // si no hay  encuentra resultados se cierra la conexion
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }


  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'ruta_img_item' => $row['ruta_img_item'],
      'nombre_item' => $row['nombre_item'],
      'precio' => $row['precio'],
      'coleccion_pertenece' => $row['coleccion_pertenece'],
      'id' => $row['id']
    );
  }  
  echo $jsonstring = json_encode($json);
  //echo $jsonstring;  
?>
