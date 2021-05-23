<?php


try{
    $mysqli = new mysqli("localhost","root","test","myDb");
    echo  "Connected !!!";
}
catch(Exception $e){
    echo $e->getMessage();
    echo "Error !!!";
}   

?>