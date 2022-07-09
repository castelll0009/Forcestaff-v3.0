<?php
include("conection-db.php");
/*
  $query = "SELECT * 
    FROM tbl_coleccion
    ORDER BY id DESC
  ";
  */
  /*
  $query="SELECT DISTINCT tbl_coleccion.id AS currentID, tbl_coleccion.ruta_img_portada AS ruta_img_portada, tbl_coleccion.nombre_coleccion AS nombre_coleccion, tbl_coleccion.autor AS autor, tbl_coleccion.link_autor AS link_autor, tbl_coleccion.descripcion AS descripcion,
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id DESC
  LIMIT 1) AS ruta_img_item1,
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id DESC
  LIMIT 1) AS ruta_img_item2,
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id DESC
  LIMIT 1) AS ruta_img_item3
FROM tbl_coleccion, tbl_item_coleccion
ORDER BY tbl_coleccion.id DESC
";
*/
$query="SELECT DISTINCT tbl_coleccion.id AS currentID, tbl_coleccion.ruta_img_portada AS ruta_img_portada, tbl_coleccion.nombre_coleccion AS nombre_coleccion, tbl_coleccion.autor AS autor, tbl_coleccion.link_autor AS link_autor, tbl_coleccion.descripcion AS descripcion,
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id DESC
  LIMIT 1) AS ruta_img_item1,
  
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id < (SELECT  MAX(tabla1.iditem) AS id_maxitem
									FROM ( (SELECT tbl_item_coleccion.nombre_item, tbl_item_coleccion.ruta_img_item, tbl_item_coleccion.id 									   AS iditem, tbl_coleccion.id as idcol
        							FROM tbl_item_coleccion, tbl_coleccion) AS tabla1)) DESC
  LIMIT 1) AS ruta_img_item2,
  
  (SELECT DISTINCT tbl_item_coleccion.ruta_img_item
  FROM tbl_item_coleccion, tbl_coleccion
  WHERE  tbl_coleccion.id = tbl_item_coleccion.id_item_coleccion AND tbl_coleccion.id = currentID 
  ORDER BY tbl_item_coleccion.id < (SELECT  MAX(tabla1.iditem) AS id_maxitem
									FROM ( (SELECT tbl_item_coleccion.nombre_item, tbl_item_coleccion.ruta_img_item, tbl_item_coleccion.id 									   AS iditem, tbl_coleccion.id as idcol
        							FROM tbl_item_coleccion, tbl_coleccion
                                    WHERE tbl_item_coleccion.id < (SELECT  MAX(tabla1.iditem) AS id_maxitem
									FROM ( (SELECT tbl_item_coleccion.nombre_item, tbl_item_coleccion.ruta_img_item, tbl_item_coleccion.id 									   AS iditem, tbl_coleccion.id as idcol
        							FROM tbl_item_coleccion, tbl_coleccion) AS tabla1)) ) AS tabla1)) DESC
  LIMIT 1) AS ruta_img_item3
  
FROM tbl_coleccion, tbl_item_coleccion
ORDER BY tbl_coleccion.id DESC
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
        'ruta_img_item1' => $row['ruta_img_item1'],
        'ruta_img_item2' => $row['ruta_img_item2'],
        'ruta_img_item3' => $row['ruta_img_item3'],
        'nombre_coleccion' => $row['nombre_coleccion'],
        'autor' => $row['autor'],
        'link_autor' => $row['link_autor'],
        'descripcion' => $row['descripcion'],
        'id' => $row['currentID']
    );
  }  

  echo $jsonstring = json_encode($json);
  //echo $jsonstring;  
?>
