<?php
header('Content-type: application/json');
session_start();

if (!isset($_SESSION['uid']) || !isset($_SESSION['token']['uid'])) {
    $ret = array ('status' => 0, 'message' => 'error request');
    print json_encode($ret);
    exit();
}

require_once 'medoo.php';

$database = new medoo(MYSQL_DATABASE);

$week_begin = strtotime('24 February 2014');
$now = time();
$week = ceil(($now - $week_begin)/(7*24*3600));

if (!isset($_SESSION['lottery'])) {
    $ret = array ('status' => 1, 'message' => 'error', 'lottery' => '0');
    print json_encode($ret);
    exit();
}

unset($_SESSION['lottery']);

$status = $database->has('el_cw201402', array ('AND' => array ('lottery[!]' => 0, 'uid' => $_SESSION['uid'])));
if ($status) {
    $ret = array ('status' => 1, 'message' => 'already submitted', 'lottery' => '0');
    print json_encode($ret);
    exit();
}

$status = $database->has('el_cw201402', array ('AND' => array ('lottery[>]' => 0, 'sina_uid' => $_SESSION['token']['uid'])));
if ($status) {
    $ret = array ('status' => 1, 'message' => 'already won', 'lottery' => '0');
    print json_encode($ret);
    exit();
}

$bingo = false;
$prize = rand(1, 3);
$percent = $database->get('el_cw201402_stock', 'percent', array ('AND' => array ('aid' => $prize, 'week' => $week)));
if ($percent > 0) {
    $v = floor(10000 / $percent);
    $r = rand(1, $v);
    if ($r <= 100) {
        $bingo = true;
    }
}

if ($bingo) {
    $count = $database->get('el_cw201402_stock', 'stock', array ('AND' => array ('aid' => $prize, 'week' => $week)));
    if ($count) {
        $database->update('el_cw201402_stock', array ('stock[-]' => 1, 'bingo[+]' => 1), array ('AND' => array ('aid' => $prize, 'week' => $week)));
        $database->update('el_cw201402', array ('lottery' => $prize), array ('AND' => array ('lottery' => 0, 'uid' => $_SESSION['uid'])));
        $ret = array ('status' => 1, 'message' => 'ok', 'lottery' => $prize);
        print json_encode($ret);
        exit();
    }
    else {
        $database->update('el_cw201402', array ('lottery' => -1), array ('AND' => array ('lottery' => 0, 'uid' => $_SESSION['uid'])));
        $ret = array ('status' => 1, 'message' => 'emply', 'lottery' => 0);
        print json_encode($ret);
        exit();
    }

}
else {
    $database->update('el_cw201402', array ('lottery' => -1), array ('AND' => array ('lottery' => 0, 'uid' => $_SESSION['uid'])));
    $ret = array ('status' => 1, 'message' => 'ok', 'lottery' => 0);
    print json_encode($ret);
    exit();
}


?>