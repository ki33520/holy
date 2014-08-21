<?php

include_once 'entityinterface.php';

class sinaEntity implements entityinterface {

    static public function save($uid, $name, $text, $friends=array()) {
        $record = new stdClass();
        $record->uid = sprintf('%0.0f', $uid);
        $record->name = $name;
        $record->type = 'sina';
        $record->wish = $text;
        $record->response = array();
        $record->friends = $friends;
        $record->created = date('c');
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402', $record);
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function getEntityById($id, $type) {
        $mongo = new soheeMongo();
        return $mongo->find('cw201402', array('_id' => $id, 'type' => $type));
    }

    static public function saveFriends($uid, $friends=array(), $next_cursor=0, $total_number=50) {
        $record = new stdClass();
        $record->type = 'sina';
        $record->uid = sprintf('%0.0f', $uid);
        $record->friends = $friends;
        $record->next_cursor = $next_cursor;
        $record->total_number = $total_number;
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402_friends', $record, array('uid' => $record->uid), array('safe' => TRUE, 'upsert' => TRUE));
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function findFriends($uid) {
        $condition = array('type' => 'sina', 'uid' => sprintf('%0.0f', $uid));
        try {
            $mongo = new soheeMongo();
            $friends = $mongo->find('cw201402_friends', $condition, array(), TRUE);
        } catch (Exception $exc) {
            return array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        if (!$friends) {
            return array('ok' => 0, 'err' => 'no friends');
        } else {
            return array('ok' => 1, 'friends' => $friends);
        }
    }

    static public function todo($function, $args=array()) {
        $record = new stdClass();
        $record->function = $function;
        $record->args = $args;
        $record->done = 0;
        $record->type = 'sina';
        $record->exetime = 0;
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('todolist', $record);
            $return['id'] = $args['itemid'];
        } catch (Exception $exc) {
            $return = array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        return $return;
    }

}

class rrEntity implements entityinterface {

    static public function save($uid, $name, $text, $friends=array()) {
        $record = new stdClass();
        $record->uid = sprintf('%0.0f', $uid);
        $record->name = $name;
        $record->type = 'renren';
        $record->wish = $text;
        $record->response = array();
        $record->friends = $friends;
        $record->created = date('c');
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402', $record);
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function getEntityById($id, $type) {
        $mongo = new soheeMongo();
        return $mongo->find('cw201402', array('_id' => $id, 'type' => $type));
    }

    static public function saveFriends($uid, $friends=array(), $next_cursor=0, $total_number=50) {
        $record = new stdClass();
        $record->type = 'renren';
        $record->uid = sprintf('%0.0f', $uid);
        $record->friends = $friends;
        $record->next_cursor = $next_cursor;
        $record->total_number = $total_number;
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402_friends', $record, array('uid' => $record->uid), array('safe' => TRUE, 'upsert' => TRUE));
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function findFriends($uid) {
        $condition = array('type' => 'renren', 'uid' => sprintf('%0.0f', $uid));
        try {
            $mongo = new soheeMongo();
            $friends = $mongo->find('cw201402_friends', $condition, array(), TRUE);
        } catch (Exception $exc) {
            return array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        if (!$friends) {
            return array('ok' => 0, 'err' => 'no friends');
        } else {
            return array('ok' => 1, 'friends' => $friends);
        }
    }

    static public function todo($function, $args=array()) {
        $record = new stdClass();
        $record->function = $function;
        $record->args = $args;
        $record->done = 0;
        $record->type = 'renren';
        $record->exetime = 0;
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('todolist', $record);
            $return['id'] = $args['itemid'];
        } catch (Exception $exc) {
            $return = array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        return $return;
    }

}

class kxEntity implements entityinterface {

    static public function save($uid, $name, $text, $friends=array()) {
        $record = new stdClass();
        $record->uid = sprintf('%0.0f', $uid);
        $record->type = 'kaixin';
        $record->name = $name;
        $record->wish = $text;
        $record->response = array();
        $record->friends = $friends;
        $record->created = date('c');
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402', $record);
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function getEntityById($id, $type) {
        $mongo = new soheeMongo();
        return $mongo->find('cw201402', array('_id' => $id, 'type' => $type));
    }

    static public function saveFriends($uid, $friends=array(), $next_cursor=0, $total_number=50) {
        $record = new stdClass();
        $record->type = 'kaixin';
        $record->uid = sprintf('%0.0f', $uid);
        $record->friends = $friends;
        $record->next_cursor = $next_cursor;
        $record->total_number = $total_number;
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402_friends', $record, array('uid' => $record->uid), array('safe' => TRUE, 'upsert' => TRUE));
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function findFriends($uid) {
        $condition = array('type' => 'kaixin', 'uid' => sprintf('%0.0f', $uid));
        try {
            $mongo = new soheeMongo();
            $friends = $mongo->find('cw201402_friends', $condition, array(), TRUE);
        } catch (Exception $exc) {
            return array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        if (!$friends) {
            return array('ok' => 0, 'err' => 'no friends');
        } else {
            return array('ok' => 1, 'friends' => $friends);
        }
    }

    static public function todo($function, $args=array()) {
        $record = new stdClass();
        $record->function = $function;
        $record->args = $args;
        $record->done = 0;
        $record->type = 'kaixin';
        $record->exetime = 0;
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('todolist', $record);
            $return['id'] = $args['itemid'];
        } catch (Exception $exc) {
            $return = array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        return $return;
    }

}

class qqEntity implements entityinterface {

    static public function save($uid, $name, $text, $friends=array()) {
        $record = new stdClass();
        $record->uid = $uid;
        $record->type = 'qq';
        $record->wish = $text;
        $record->response = array();
        $friend = array();
        $record->friends = $friends;
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402', $record);
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function getEntityById($id) {
        $mongo = new soheeMongo();
        return $mongo->find('cw201402', array('_id' => $id));
    }

    static public function saveFriends($uid, $friends=array(), $next_cursor=0, $total_number=50) {
        $record = new stdClass();
        $record->type = 'qq';
        $record->uid = $uid;
        $record->friends = $friends;
        $record->next_cursor = $next_cursor;
        $record->total_number = $total_number;
        $return = array('ok' => 0, 'err' => 'init');
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('cw201402_friends', $record, array('uid' => $record->uid), array('safe' => TRUE, 'upsert' => TRUE));
            if (is_null($return['err'])) {
                $id = '$id';
                $return['id'] = $record->_id->$id;
            } else {
                $return['ok'] = 0;
            }
        } catch (Exception $exc) {
            $return['ok'] = 0;
            $return['err'] = $exc->getTraceAsString();
        }
        return $return;
    }

    static public function findFriends($uid) {
        $condition = array('type' => 'qq', 'uid' => $uid);
        try {
            $mongo = new soheeMongo();
            $friends = $mongo->find('cw201402_friends', $condition, array(), TRUE);
        } catch (Exception $exc) {
            return array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        if (!$friends) {
            return array('ok' => 0, 'err' => 'no friends');
        } else {
            return array('ok' => 1, 'friends' => $friends);
        }
    }

    static public function todo($function, $args=array()) {
        $record = new stdClass();
        $record->function = $function;
        $record->args = $args;
        $record->done = 0;
        $record->type = 'qq';
        $record->exetime = 0;
        try {
            $mongo = new soheeMongo();
            $return = $mongo->writeRecord('todolist', $record);
            $return['id'] = $args['itemid'];
        } catch (Exception $exc) {
            $return = array('ok' => 0, 'err' => $exc->getTraceAsString());
        }
        return $return;
    }

}