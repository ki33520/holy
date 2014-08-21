<?php
header('Content-type: application/json');

if (!isset($_POST['type'])) {
    $ret = array ('status' => 1, 'data' => array ());
    print json_encode($ret);
    exit();
}

include 'medoo.php';
$database = new medoo(MYSQL_DATABASE);
$page = $_POST['page'];
$page --;
$expire = 120;
$has_cached = true;
$now = time();
if ($_POST['type'] == 'all') {
    if (!isset($_POST['page']) || $_POST['page'] > 50 || $_POST['page'] < 1) {
        $ret = array ('status' => 1, 'data' => array ());
        print json_encode($ret);
        exit();
    }

    $per_page = 20;
    $data = $database->get('el_cw201402_cache', array ('data', 'expire'), array ('cid' => 'page-' . $page));
    if (empty($data)) {
        $has_cached = false;
    }
    
    $cache = $data['data'];
    $timestamp = $data['expire'] ? $data['expire'] : 0;
    
    if ($now < $timestamp + $expire) {
        $ret = unserialize($cache);
    }
    
    else {
        $filter = array ('status' => 1, 'LIMIT' => array ($page * $per_page, $per_page), 'ORDER' => 'uid DESC');
        $ret = array ();
        
        $datas = $database->select('el_cw201402', array ('uid', 'sina_name', 'picture'), $filter);
        
        foreach ($datas as $data) {
            $uid = $data['uid'];
            $ret[$uid]['uid'] = $uid;
            $ret[$uid]['sina_name'] = $data['sina_name'] ? $data['sina_name'] : '阳光自拍玩家';
            $ret[$uid]['picture'] = $data['picture'];
        }
        $cache = serialize($ret);
        if ($has_cached) {
            $database->update('el_cw201402_cache', array ('data' => $cache, 'expire' => $now), array ('cid' => 'page-' . $page));
        }
        else {
            $database->insert('el_cw201402_cache', array (
                'cid' => 'page-' . $page,
                'data' => $cache,
                'expire' => $now,
            ));
        }
    }
}
else if ($_POST['type'] == 'star') {
    $week_begin = strtotime('03 March 2014');
    $data = $database->get('el_cw201402_cache', array ('data', 'expire'), array ('cid' => 'page-star'));
    if (empty($data)) {
        $has_cached = false;
    }
    
    $cache = $data['data'];
    $timestamp = $data['expire'] ? $data['expire'] : 0;
    if ($now < $timestamp + $expire) {
        $ret = unserialize($cache);
    }
    else {
        $filter = array (array ('AND' => array ('status' => 1, 'stick' => 1)), 'ORDER' => 'uid DESC');
        $ret = array ();
        
        $datas = $database->select('el_cw201402', array ('uid', 'sina_name', 'picture', 'timestamp'), $filter);
        
        foreach ($datas as $data) {
            $t = $data['timestamp'];
            $week = ceil(($t - $week_begin)/(7*24*3600));
            $week = $week > 0 ? $week : 1;
            $uid = $data['uid'];
            $ret[$uid]['uid'] = $uid;
            $ret[$uid]['sina_name'] = $data['sina_name'] ? $data['sina_name'] : '阳光自拍玩家';
            $ret[$uid]['picture'] = $data['picture'];
            $ret[$uid]['week'] = $week;
        }

        $cache = serialize($ret);
        if ($has_cached) {
            $database->update('el_cw201402_cache', array ('data' => $cache, 'expire' => $now), array ('cid' => 'page-star'));
        }
        else {
            $database->insert('el_cw201402_cache', array (
                'cid' => 'page-star',
                'data' => $cache,
                'expire' => $now,
            ));
        }
    }
}

print json_encode(array ('status' => 1, 'data' => array_values($ret)));
exit();
?>