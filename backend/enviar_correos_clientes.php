<?php
if(isset($_POST['send'])){
    if(!empty($_POST['fullname']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['affair']) && !empty($_POST['message']) ){
        $fullname =  $_POST['fullname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $affair = $_POST['affair'];
        $message  = $_POST['message'];
        $header  = "From: noreply@example.com" . "\r\n"; 
        $header  .= "Reply-To: noreply@example.com" . "\r\n";
        $header .= "X-Mailer: PHP/".phpversion();
        $mail = @mail($email, $affair, $message, $header);
        if($mail){
            echo "<h4> !Mail send successfuly</h4>";
        }
    }
}

?>