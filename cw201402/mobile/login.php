<?php
session_start();
include_once './sdk/saetv2.ex.class.php';
if (isset($_GET['t'])) {
    switch ($_GET['t']) {
        case 's':
            $_SESSION['oauthSource'] = 'sina';
            $o = new SaeTOAuthV2(WB_AKEY, WB_SKEY);
            $code_url = $o->getAuthorizeURL(WB_CALLBACK_URL, 'code', null, 'mobile');
            header('location:' . $code_url);
        break;
    }
}
exit;