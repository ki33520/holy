<?php
include 'medoo.php';

define('THINK_PAGE_KEY', 'AIE01AIP72');
define('THINK_PAGE_URL', 'http://api.thinkpage.cn/v1/weather/all.json');

$expire = 3*3600;
$has_cached = true;
$now = time();
if (isset($_GET['city']) && trim($_GET['city']) != '') {
    $city = $_GET['city'];
}
else {
    $ip_address = get_client_ip();
    $ip_str=file_get_contents('http://int.dpool.sina.com.cn/iplookup/iplookup.php?ip='.$ip_address);
    $ip_tmp = explode('	', $ip_str);
    $ip_city = iconv('GBK', 'UTF-8', $ip_tmp[5]);
    $city = $ip_city;
}

$database = new medoo(MYSQL_DATABASE);
$data = $database->get('el_cw201402_cache', array ('data', 'expire'), array ('cid' => 'weather-' . $city));

if (empty($data)) {
    $params = array ('city' => $city, 'language' => 'zh-chs', 'unit' => 'c', 'aqi' => 'city', 'key' => THINK_PAGE_KEY);
    $weather = get_data($params);
    $database->insert('el_cw201402_cache', array (
        'cid' => 'weather-' . $city,
        'data' => $weather,
        'expire' => $now + $expire,
    ));
}
else {
    $cache = $data['data'];
    $timestamp = $data['expire'] ? $data['expire'] : 0;
    if ($now < $timestamp) {
        $weather = $cache;
    }
    else {
        $params = array ('city' => $city, 'language' => 'zh-chs', 'unit' => 'c', 'aqi' => 'city', 'key' => THINK_PAGE_KEY);
        $weather = get_data($params);
        $database->update('el_cw201402_cache', array ('data' => $weather, 'expire' => $now + $expire), array ('cid' => 'weather-' . $city));
    }
}

print_r($weather);

function get_data($params) {/* print THINK_PAGE_URL . '?' . http_build_query($params);exit(); */
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, THINK_PAGE_URL . '?' . http_build_query($params)); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

function get_client_ip() {
    $arr = array (/* 'HTTP_CLIENT_IP',  */'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR');
    foreach ($arr as $key) {
        if (array_key_exists($key, $_SERVER)) {
            foreach (explode(',', $_SERVER[$key]) as $ip) {
                $ip = trim($ip);
                if ((bool) filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $ip;
                }
            }
        }
    }
    return null;
}

?>