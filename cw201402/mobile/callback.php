<?php
session_start();
include_once './sdk/entity.php';
include_once './sdk/saetv2.ex.class.php';
include_once './sdk/encrypt.php';
if (isset($_SESSION['oauthSource'])) {
    switch ($_SESSION['oauthSource']) {
        case 'sina':
            if (isset($_REQUEST['code'])) {
                include_once( './sdk/saetv2.ex.class.php' );
                $o = new SaeTOAuthV2(WB_AKEY, WB_SKEY);
                $keys = array();
                $keys['code'] = $_REQUEST['code'];
                $keys['redirect_uri'] = WB_CALLBACK_URL;
                try {
                    $token = $o->getAccessToken('code', $keys);
                } catch (OAuthException $e) {
                    $token = FALSE;
                }
                if (isset($token['access_token'])) {
                    $c = new SaeTClientV2(WB_AKEY, WB_SKEY, $token['access_token']);
                    $uid_get = $c->get_uid();
                    $uid = $uid_get['uid'];
                    $me = $c->show_user_by_id($uid);
                    $token['uid'] = $uid;
                    $token['name'] = print_r($me['name'], TRUE);
                    $token['picture'] = $me['avatar_large'];
                    $token['thumbnail'] = $me['status']['thumbnail_pic'];
                    $_SESSION['token'] = $token;
                    $result = sinaEntity::findFriends($uid);
                    if ($result['ok']) {
                        $_SESSION['friends'] = $result['friends'];
                    } else {
                        $friends = $c->bilateral($uid, 1, 200);
                        $records = array();
                        if (isset($friends['users'])) {
                            foreach ($friends['users'] as $key => $value) {
                                $id = sprintf('%0.0f', $value['id']);
                                $records[$key]['uid'] = $id;
                                $records[$key]['name'] = $value['name'];
                                $records[$key]['logo'] = $value['profile_image_url'];
                            }
                        }
                        $result = sinaEntity::saveFriends($uid, $records, $friends['next_cursor'], $friends['total_number']);
                        $_SESSION['friends']['uid'] = $uid;
                        $_SESSION['friends']['type'] = 'sina';
                        $_SESSION['friends']['friends'] = $records;
                        $_SESSION['friends']['next_cursor'] = $friends['next_cursor'];
                        $_SESSION['friends']['total_number'] = $friends['total_number'];
                    }
                    header('location:' . BASEPATH . 'cw201402/mobile/lottery.html');
                }
            }
        break;
        default:
        break;
    }
}
?>
<html><head></head><body>No Source!</body></html>
