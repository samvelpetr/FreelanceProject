<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Обязательное поле ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Обязательное поле ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
//if (empty($_POST["msg_subject"])) {
//    $errorMSG .= "Обязательное поле ";
//} else {
//    $msg_subject = $_POST["msg_subject"];
//}

// Phone Number
if (empty($_POST["phone_number"])) {
    $errorMSG .= "Обязательное поле ";
} else {
    $phone_number = $_POST["phone_number"];
}


// MESSAGE
//if (empty($_POST["message"])) {
//    $errorMSG .= "Обязательное поле ";
//} else {
//    $message = $_POST["message"];
//}


$EmailTo = "mrwebsite@yandex.ru";

$Subject = "Сообщение с сайта МОТО";

// prepare email body text
$Body = "";
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Тема: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Телефон: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Сообщение: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Что-то пошло не так :(";
    } else {
        echo $errorMSG;
    }
}

?>