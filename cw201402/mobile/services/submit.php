<?php
header('Content-type: application/json');
session_start();

if (!isset($_SESSION['uid'])) {
    $ret = array ('status' => 0, 'message' => 'error request');
    print json_encode($ret);
    exit();
}

if (!isset($_POST['name'])) {
    print json_encode(array ('status' => 0, 'message' => 'name is required'));
    exit();
}
if (!isset($_POST['mobile'])) {
    print json_encode(array ('status' => 0, 'message' => 'mobile is required'));
    exit();
}
if (!isset($_POST['email'])) {
    print json_encode(array ('status' => 0, 'message' => 'email is required'));
    exit();
}
if (!isset($_POST['address'])) {
    print json_encode(array ('status' => 0, 'message' => 'address is required'));
    exit();
}

$mobileRex = '/^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/';
if (!preg_match($mobileRex, $_POST['mobile'])) {
    print json_encode(array ('status' => 0, 'message' => 'mobile error'));
    exit();
}

$emailRex = '/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/';
if (!preg_match($emailRex, $_POST['email'])) {
    $ret = array ('status' => 0, 'message' => 'email error');
    print json_encode($ret);
    exit();
}

require_once 'medoo.php';
$database = new medoo(MYSQL_DATABASE);

$database->update('el_cw201402', array ('name' => trim($_POST['name']), 'mobile' => $_POST['mobile'], 'email' => $_POST['email'], 'address' => $_POST['address']), array ('AND' => array ('uid' => $_SESSION['uid'], 'lottery[>]' => 0)));

$ret = array ('status' => 1, 'message' => 'submit success');
print json_encode($ret);
exit();
?>