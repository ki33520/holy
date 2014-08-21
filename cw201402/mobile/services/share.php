<?php
header('Content-type: application/json');
session_start();
include_once '../sdk/saetv2.ex.class.php';
require_once 'medoo.php';
require_once 'combineImage.class.php';

if (isset($_SESSION['oauthSource'])) {

	if ($_SESSION['oauthSource'] == 'sina') {
		if (isset($_SESSION['token']['access_token']) && !empty($_SESSION['token']['access_token']) && !empty($_SESSION['token']['uid'])) {
		    if (isset($_SESSION['uploadImage'])) {
/*
                $img = $_SESSION['uploadImage'];
                $simg = '../share_images/' . $img;
                imageWaterMark($simg, '../images/share_bg.jpg', 9999, '../upload_images/' . $img);
*/
                $simg = '../upload_images/' . $_SESSION['uploadImage'];
                if (!file_exists($simg)) {
                    $simg = '../images/share.jpg';
                }
    		    $text = '这一刻，靠近阳光，尽享自在。一起来分享阳光自拍吧，让我们无惧斑无惧黄！还可赢@雅诗兰黛 全新随行雪融BB！#正午阳光 无惧晒# http://t.cn/8F8b4kc';
                $database = new medoo(MYSQL_DATABASE);
                $id = $database->insert('el_cw201402_share', array (
                    'sns_uid' => $_SESSION['token']['uid'],
                    'sns_name' => $_SESSION['token']['name'],
                    'sharetext' => $text,
                    'sns_type' => $_SESSION['oauthSource'],
                    'type' => 'mobile',
                    'date' => date('Y-m-d H:i:s', time()),
                ));
                $database->update('el_cw201402', array ('sina_uid' => $_SESSION['token']['uid'], 'sina_name' => $_SESSION['token']['name'], 'status' => 1), array ('uid' => $_SESSION['uid']));
                $_SESSION['lottery'] = 1;
                $res = array('success' => 1, 'message' => 'ok', 'num' => $id);
	            try {
	                // 发送微博Start
	                $c = new SaeTClientV2(WB_AKEY, WB_SKEY, $_SESSION['token']['access_token']);
//		                $simg = '../images/share.jpg';
	                $ret = $c->upload($text, $simg);
	                // 发送微博End
	                if (isset($ret['error_code']) && $ret['error_code'] > 0) {
	                    $res = array("success" => 0, "message" => "发送失败，错误：{$ret['error_code']}:{$ret['error']}", 'code' => 4);
	                } else {
	                    $res = array("success" => 1, "message" => "发送成功");
	                }
	            } catch (PDOExecption $e) {
	                $res = array('success' => 0, 'message' => $e->getMessage(), 'code' => 2);
	            }

		    } else {
		        $res = array('success' => 0, 'message' => '缺少必要参数', 'code' => 1);
		    }
		} else {
		    $res = array('success' => 0, 'message' => '请重新授权', 'code' => 0);
		}
	}
	else {
		$res = array('success' => 0, 'message' => 'error', 'code' => -1);
	}
}
$res = json_encode($res);
echo $res;
die();
?>