<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $destinataire = "vous@exemple.com";
    $sujet = "Nouveau message de $nom";
    $contenu = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";
    
    if (mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Message envoyé !";
    } else {
        echo "Erreur d'envoi.";
    }
}
?>