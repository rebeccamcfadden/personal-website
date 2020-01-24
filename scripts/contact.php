<?php


    $from = 'Demo contact';
    $sendTo = 'rmcfadden@tamu.edu';
    $subject = 'New message from website contact form';
    $fields = array('first'=>'First', 'last'=>'Last', 'email'=>'Email', 'company'=>'Company', 'message'=>'Message');
    $submitMessage = "Thank you for reaching out! I will get back to you as soon as possible.";
    $errorMessage = "There was an error submitting the form. Please try again later.";

    error_reporting(E_ALL & ~E_NOTICE);

    try{
        if(count($_POST) == 0) throw new \Exception('Form is empty');
        $emailText = "New contact form message!\n\n";
        foreach ($_POST as $key => $value) {
            if(isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }
        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );
        mail($sendTo, $subject, $emailText, implode("\n", $headers));
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
    catch (\Exception $e){
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }

    // if requested by AJAX request return JSON response
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;
    }
    // else just display the message
    else {
        echo $responseArray['message'];
    }
?>