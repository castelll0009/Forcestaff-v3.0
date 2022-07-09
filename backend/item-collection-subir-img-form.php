<?php
$ruta_carpeta =  "../imgs/collections/";
$ruta_portada_defecto = "../imgs/collections/place-holder-portada.png";


  if (($_FILES["file"]["type"] == "image/pjpeg")
        || ($_FILES["file"]["type"] == "image/jpeg")
        || ($_FILES["file"]["type"] == "image/png")
        || ($_FILES["file"]["type"] == "image/gif")) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $ruta_carpeta .$_FILES['file']['name'])) { //this rute should be the same rute od 
            //more code here...
            echo $ruta_carpeta.$_FILES['file']['name'];
        } else {
            echo 0;
        }
    } else {
        echo 0;
    }





