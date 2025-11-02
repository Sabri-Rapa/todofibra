<?php
// contact.php - Envío SMTP con PHPMailer y respuesta JSON

// --- Configuración general ---
header('Content-Type: application/json; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ajustá la ruta a donde subiste PHPMailer
require __DIR__ . '/vendor/PHPMailer/src/Exception.php';
require __DIR__ . '/vendor/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/vendor/PHPMailer/src/SMTP.php';

// ---- SMTP de DonWeb ----
// Verificá en "Correos > Datos de configuración" del panel:
// En la mayoría de los planes es: smtp.donweb.com  (TLS 587 o SSL 465)
$SMTP_HOST   = 'a0010977.ferozo.com'; 
$SMTP_PORT   = 465;
$SMTP_SECURE = 'ssl';

// Remitente:
$SMTP_USER   = 'info@todofibra.com.ar';
$SMTP_PASS   = 'To3108mas*';

// Dónde se reciben las consultas:
$TO_EMAIL    = 'sabri.rapa@gmail.com'; 

// ---- Validación básica de POST ----
$body = file_get_contents('php://input');
$data = json_decode($body, true);   // si enviás JSON desde el front
if (!$data) {
  // Si tu formulario envía "application/x-www-form-urlencoded"
  $data = $_POST;
}

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode([
    'ok' => false,
    'error' => 'Faltan datos obligatorios: nombre, email y mensaje.'
  ]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([
    'ok' => false,
    'error' => 'El correo no es válido.'
  ]);
  exit;
}

try {
  $mail = new PHPMailer(true);

  // Servidor
  $mail->isSMTP();
  $mail->Host       = $SMTP_HOST;
  $mail->SMTPAuth   = true;
  $mail->Username   = $SMTP_USER;
  $mail->Password   = $SMTP_PASS;
  $mail->CharSet    = 'UTF-8';

  // Seguridad / Puerto
  $mail->SMTPSecure = $SMTP_SECURE;  // 'tls' o 'ssl'
  $mail->Port       = $SMTP_PORT;

  // Remitente (desde tu dominio) — importante para entregabilidad
  $mail->setFrom($SMTP_USER, 'Sitio Web Todo Fibra');

  // Destinatario (vos)
  $mail->addAddress($TO_EMAIL, 'Consultas Todo Fibra');

  // Para que puedas responder directamente al cliente
  $mail->addReplyTo($email, $name);

  // Contenido
  $mail->isHTML(true);
  $mail->Subject = 'Nueva consulta desde el sitio web';

  $html  = "<h2>Nueva consulta</h2>";
  $html .= "<p><strong>Nombre:</strong> " . htmlspecialchars($name) . "</p>";
  $html .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
  $html .= "<p><strong>Teléfono:</strong> " . htmlspecialchars($phone) . "</p>";
  $html .= "<p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";
  $html .= "<hr><small>Enviado el " . date('d/m/Y H:i:s') . "</small>";

  $mail->Body    = $html;
  $mail->AltBody = "Nueva consulta\n\n"
                 . "Nombre: $name\n"
                 . "Email: $email\n"
                 . "Teléfono: $phone\n"
                 . "Mensaje:\n$message\n";

  // Enviar
  if (!$mail->send()) {
    throw new Exception('No se pudo enviar el correo.');
  }

  echo json_encode(['ok' => true, 'message' => '¡Gracias! Te responderemos a la brevedad.']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    'ok'    => false,
    'error' => 'Error al enviar el correo: ' . $e->getMessage()
  ]);
}
