<?php
if (!isset($_COOKIE['cw201402mk'])) {
    die('Access denied!');
}

if ($_POST['page']) {
    include 'medoo.php';
    $page = $_POST['page'];
    $cur_page = $page;
    $page -= 1;
    $per_page = 40; // Per page records
    $previous_btn = true;
    $next_btn = true;
    $first_btn = true;
    $last_btn = true;
    $start = $page * $per_page;
    $database = new medoo(MYSQL_DATABASE);
    
    $filter = array ('LIMIT' => array ($start, $per_page), 'ORDER' => 'uid DESC');
    if (isset($_POST['tp'])) {
        $count_filter = array ();
        if ($_POST['tp'] == 'all') {}
        else if ($_POST['tp'] == 'published') {
            $filter[] = array ('status' => 1);
            $count_filter = array ('status' => 1);
        }
        else if ($_POST['tp'] == 'unpublished') {
            $filter[] = array ('status' => 0);
            $count_filter = array ('status' => 0);
        }
        else if ($_POST['tp'] == 'stick') {
            $filter[] = array ('stick' => 1);
            $count_filter = array ('stick' => 1);
        }
        else if ($_POST['tp'] == 'unstick') {
            $filter[] = array ('stick' => 0);
            $count_filter = array ('stick' => 0);
        }
        else if ($_POST['tp'] == 'winner') {
            $filter[] = array ('lottery[>]' => 0);
            $count_filter = array ('lottery[>]' => 0);
        }
    }
    $datas = $database->select('el_cw201402', array ('uid', 'name', 'sina_name', 'mobile', 'email', 'address', 'picture', 'lottery','status', 'stick', 'date'), $filter);

    $msg = '<table class="table table-striped">';
    $msg .= '<thead><tr><th>uid</th><th>name</th><th>sina name</th><th>mobile</th><th>email</th><th>address</th><th>picture</th><th>lottery</th><th>publish</th><th>stick</th><th>date</th></tr></thead><tbody>';
    $lottery = array (
        -1 => '未中奖',
        0 => '未抽奖',
        1 => '阳光分享奖',
        2 => '阳光幸运奖',
        3 => '阳光参与奖',
    );
    foreach ($datas as $data) {
        $msg .= '<tr class="row-' . $data['uid'] . '">';
        $msg .= '<td class="uid">' . $data['uid'] . '</td><td class="name">' . $data['name'] . '</td><td class="sina_name">' . $data['sina_name'] . '</td><td class="mobile">' . $data['mobile'] . '</td><td class="email">' . $data['email'] . '</td><td>' . $data['address'] . '</td><td class="picture"><a href="' . (file_exists('../upload_images/' . $data['picture']) ? ('upload_images/' . $data['picture']) : 'images/default.png') . '"><img src="' . (file_exists('../upload_images/' . $data['picture']) ? ('upload_images/' . $data['picture']) : 'images/default.png') . '" style="height:50px"/></a></td><td class="lottery">' . $lottery[$data['lottery']] . '</td><td class="status"><div class="checkbox"><label><input value="' . $data['uid'] . '" class="sta" type="checkbox"' . ($data['status'] == 1 ? ' checked' : '') . '></label></div></td><td class="stick"><div class="checkbox"><label><input value="'. $data['uid'] . '" class="stk" type="checkbox"' . ($data['stick'] == 1 ? ' checked' : '') . '></label></div></td><td class="date">' . $data['date'] . '</td>';
        $msg .= '</tr>';
    }
    
    $msg .= '</tbody></table>';
    
    $count = $database->count('el_cw201402', $count_filter);
    $no_of_paginations = floor($count / $per_page);

    $msg .= '<ul class="pagination"><li name="1"><a href="#">&laquo;</a></li>';
    for ($i=0; $i<= $no_of_paginations; $i++) {
        $msg .= '<li class="pager-button pager-button-' . ($i + 1) . '" name="' . ($i + 1) . '"><a href="#">' . ($i + 1) . '</a></li>';
    }
    $msg .= '<li name="' . $i . '"><a href="#">&raquo;</a></li></ul>';

    print $msg;
}
?>