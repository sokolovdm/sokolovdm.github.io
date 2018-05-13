<?php
$text = $_POST['text'];
$email = $_POST['email'];
$text = htmlspecialchars($text);
$email = htmlspecialchars($email);
$text = urldecode($text);
$email = urldecode($email);
$text = trim($fio);
$email = trim($email);

mail('naraxiss@gmail.com', "Заявка с сайта", "Текст:".$text.". E-mail: ".$email)
?>