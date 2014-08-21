<?php
if (!isset($_COOKIE['cw201402'])) {
    die('Access denied!');
}
include 'medoo.php';

if (isset($_POST['uid']) && isset($_POST['status'])) {
    $update = array ();
    if ($_POST['status'] == 0) {
        $update['status'] = 0;
    }
    else if ($_POST['status'] == 1) {
        $update['status'] = 1;
    }
    else if ($_POST['status'] == 2) {
        $update['stick'] = 0;
    }
    else if ($_POST['status'] == 3) {
        $update['stick'] = 1;
    }
    $database = new medoo(MYSQL_DATABASE);
    $database->update('el_cw201402', $update, array ('uid[=]' => $_POST['uid']));
    print 'ok';exit();
}
if (isset($_POST['id']) && isset($_POST['type']) && isset($_POST['value'])) {

    $database = new medoo(MYSQL_DATABASE);
    $database->update('el_cw201402_stock', array ($_POST['type'] => $_POST['value']), array ('id' => $_POST['id']));
    
    print 'ok';exit();
}
print 'error';exit();
?>