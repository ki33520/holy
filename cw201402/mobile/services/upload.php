<?php
header('Content-type: application/json');
session_start();

/*
if (!isset($GLOBALS['HTTP_RAW_POST_DATA'])) {
    $ret = array ('status' => 'error', 'data' => 'image data is null');
    print json_encode($ret);
    exit();
}
*/

if (!isset($_POST['imgDate'])) {
    $ret = array ('status' => 0, 'message' => 'image data is null');
    print json_encode($ret);
    exit();
}

require_once 'medoo.php';

//$imageData = $GLOBALS['HTTP_RAW_POST_DATA'];
$imageData = $_POST['imgDate'];
$filteredData=substr($imageData, strpos($imageData, ",")+1);
$unencodedData = base64_decode($filteredData);
$random = mt_rand(0, 999999) + time();
$random_string = substr(sha1($random), 3, 8);
$_SESSION['uploadImage'] = $random_string . '.jpg';
$fp = fopen(dirname(dirname(__FILE__)) . '/upload_images/' . $_SESSION['uploadImage'], 'wb');
fwrite($fp, $unencodedData);
fclose($fp);

$database = new medoo(MYSQL_DATABASE);
$time = time();
$id = $database->insert('el_cw201402', array (
    'picture' => $_SESSION['uploadImage'],
    'lottery' => 0,
    'status' => 0,
    'stick' => 0,
    'timestamp' => $time,
    'date' => date('Y-m-d H:i:s', $time),
));
$_SESSION['uid'] = $id;
$ret = array ('status' => 1, 'message' => 'success', 'data' => 'upload_images/' . $_SESSION['uploadImage']);
print json_encode($ret);
exit();

?>