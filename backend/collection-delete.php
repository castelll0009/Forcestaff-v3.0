<?php 

    include('conection-db.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_coleccion WHERE id = $id";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Delete Query Failed' . mysqli_error($connection));
        }

        echo 'Collection Deleted Successfully';
    }

?>