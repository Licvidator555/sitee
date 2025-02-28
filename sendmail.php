
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHtml(true);

$mail->setForm('info@fls.guru', 'Фрилансер по жизни');
$mail->addAddress('ignatvasin2009god@gmail.com');
$mail->Subject = 'Привет Это фрилансер по жизни';

$hand = "Правая";
if($_POST['hand'] == "left"){
    $hand ="Левая";
}

$body = '<h1>Встречайте письмо</h1>';
if (trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}




if (trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}


if (!empty($_FILES['image']['tmp_name'])) {
    
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];

    if (copy($_FILES['image']['tmp_name'], $filePath)) {
     $fileAttach = $filePath;
     $body.='<p><strong>Фото в приложении</strong>';
     $mail->addAttachment($fileAttach);
    }

}
$mail->Body = $body;


if (!$mail->send()) {
    $message = 'Ошибка';

} else {
    $message = 'Данные отправлены';
}
$response = ['message'=>$message];

header('Content-type: application/json')
echo json_encode($response );

?>
 