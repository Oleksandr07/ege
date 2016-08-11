<?php

	header('Access-Control-Allow-Origin: *');

	$to = "anton.rechkalov@gmail.com, pavelyuriev27@gmail.com"; // <-- Укажите здесь свою почту (через запятую, если несколько адресов)
	
	$from = "form@spb-ege.ru"; // <-- Укажите здесь адрес отправителя
	
	$i_domain = $_SERVER['SERVER_NAME'];
	$i_hour = date('H');
	$i_min = date('i');
	$i_day = date('d');
	$i_month = date('m');
	
	$mainConfig = array(
		'mailServ' => 'mail.nic.ru',
		'mailDefaultFrom' => $from,
		'mailDefaultFromName' => $i_domain,
		'mailParams' => array(
			//'ssl' => 'tls',
			'port' => 25,
			'auth' => 'login',
			'username' => 'contact@spb-ege.ru',
			'password' => 'Asdasd123asdf2'
		),
	);
	
	//$headers = "From: $from\nMIME-Version: 1.0\nContent-Type: text/plain;charset=utf-8"; 
	$subject = "Заявка с сайта ".$i_domain."_".$i_hour.":".$i_min."--".$i_day."-".$i_month;

	$body = "Заполненные поля формы:\n\n";

	foreach ($_POST as $a => $b) {
		$body .= htmlspecialchars(sprintf("%s:\n%s\n\n",$a,$b), ENT_NOQUOTES);
	}

	//$send = mail($to, substr(iconv_mime_encode("S", $subject, array("input-charset" => "UTF-8", "output-charset" => "UTF-8")), 3), $body, $headers);
	
	require_once 'Zend/Mail/Transport/Smtp.php';
	require_once 'Zend/Exception.php';
	require_once 'Zend/Mail.php';
	
	$send = ZendSend($subject, $body, $to);

	if ($send) echo "Ваше сообщение было успешно отправлено.";
	else echo "К сожалению, произошла ошибка, отправка не удалась.";




function ZendSend($subject, $message, $to, $toName = '', $from = '', $fromName = '') {
	global $mainConfig;
	
	$to = explode(',', $to);

	$transport = new Zend_Mail_Transport_Smtp($mainConfig['mailServ'], $mainConfig['mailParams']);

	$mail = new Zend_Mail('UTF-8');
	$mail->setHeaderEncoding(Zend_Mime::ENCODING_BASE64);
	$mail->setBodyText($message,null,Zend_Mime::ENCODING_BASE64);
	$mail->setFrom($from?$from:$mainConfig['mailDefaultFrom'], $fromName ? $fromName : $mainConfig['mailDefaultFromName']);
	foreach ($to as $email){
		$mail->addTo(trim($email), $toName);
	}
	$mail->setSubject($subject);

	try {
		$mail->send($transport);
		return true;
	} catch (\Exception $e){
		return false;
	}

}

?>