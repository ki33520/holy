<?php
if (!isset($_COOKIE['cw201402mk'])) {
    die('Access denied!');
}

if ($_POST['type'] == 'stock') {

    include 'medoo.php';

    $week_begin = strtotime('03 March 2014');
    $now = time();

    $database = new medoo(MYSQL_DATABASE);
    $datas = $database->select('el_cw201402_stock', array ('id', 'name', 'week', 'percent', 'bingo', 'stock', 'status'));

    $msg = '<table class="table table-striped">';
    $msg .= '<thead><tr><th>id</th><th>week</th><th>name</th><th>percent</th><th>bingo</th><th>stock</th></tr></thead><tbody>';

    foreach ($datas as $data) {
        $week = ceil(($now - $week_begin)/(7*24*3600));
        $week = $week > 0 ? $week : 1;
        $msg .= '<tr class="row-' . $data['id'] . '">';
        $msg .= '<td class="id">' . $data['id'] . '</td><td class="week">' . $data['week'] . '</td><td class="name">' . $data['name'] . '</td><td class="percent"><input name="' . $data['id'] . '" ' . ($week == $data['week'] ? '' : 'disabled="true" ') . 'type="text" size="3" value="' . $data['percent'] . '"/> %</td><td class="bingo">' . $data['bingo'] . '</td><td class="stock"><input name="' . $data['id'] . '"' . ($week == $data['week'] ? '' : 'disabled="true" ') . ' type="text" size="5" value="' . $data['stock'] . '"/></td>';
        $msg .= '</tr>';
    }
    $msg .= '</tbody></table>';
    print $msg;
}
?>