<?php

interface entityinterface {

    static public function save($uid, $name, $text, $friends=array());

    static public function saveFriends($uid, $friends=array(), $next_cursor=0, $total_number=50);

    static public function todo($function, $args=array());
}

/**
 * 提供面向程序员简单的运用mongodb的Layer
 * 
 * @access public
 */
class soheeMongo {

    private $connect;
    private $db;

    /**
     * Implement __construct().
     * @global type $databases settings文件中的数据库配置
     */
    public function __construct($db='cw201402') {
        $this->connect = new Mongo('mongodb://localhost:27017');//192.168.102.2
        $this->db = $this->connect->selectDB($db);
    }

    /**
     * 返回当前链接所保函的所有的数据库
     * @return mixed 
     */
    public function listDBs() {
        return $this->connect->listDBs();
    }

    /**
     * 得到当前数据库对象
     * @return mixed 
     */
    public function getDB() {
        return $this->db;
    }

    /**
     * 创建一个数据集
     * @param string $name 数据集名字
     * @return MongoCollection Returns a collection object representing the new collection. 
     * @link http://cn.php.net/manual/zh/mongodb.createcollection.php
     */
    public function createCollection($name) {
        return $this->db->createCollection($name);
    }

    /**
     * 删除记录
     * @param string $collection 数据集名字
     * @param array $condition 条件数组
     * @param array $options 配置项数组(justOne,safe,fsync,timeout)
     * @return mixed 
     * @link http://cn2.php.net/manual/en/mongocollection.remove.php
     */
    public function removeRecord($collection, $condition, $options=array('justOne' => FALSE)) {
        if (isset($condition['_id']) && !is_array($condition['_id'])) {
            $condition['_id'] = new MongoId($condition['_id']);
        }
        return $this->db->$collection->remove($condition, $options);
    }

    /**
     * 插入或更新数据
     * @param string $collection 数据集名字
     * @param string $record 需要更新或者插入的数据，在更新操作时需要使用$操作符,例如$record = array('$set' => array('name' => 'tony', 'sex' => 'm'));
     * @param array $condition 当需要更新时传入更新记录的条件
     * @param array $options 可选值（upsert，multiple，safe，fsync，timeout）
     * @return mixed If safe was set, returns an array containing the status of the save. Otherwise, returns a boolean representing if the array was not empty (an empty array will not be inserted).
     * @link http://cn2.php.net/manual/en/mongocollection.save.php 
     * @link http://cn2.php.net/manual/en/mongocollection.update.php
     */
    public function writeRecord($collection, $record, $condition=array(), $options=array('safe' => TRUE)) {
        if (empty($condition)) {
            $return = $this->db->$collection->save($record, $options);
        } else {
            if (isset($condition['_id']) && !is_array($condition['_id'])) {
                $condition['_id'] = new MongoId($condition['_id']);
            }
            $return = $this->db->$collection->update($condition, $record, $options);
        }
        return $return;
    }

    /**
     * 查询语句
     * @param string $collection 数据集名字
     * @param array $condition 条件数组
     * @param array $fields 字段数组
     * @param boolean $findOne 是否只返回1条记录
     * @param boolean $obj 是否返回MongoCursor对象
     * @return mixed 
     * @link http://cn2.php.net/manual/en/mongocollection.find.php
     * @link http://cn2.php.net/manual/en/mongocollection.findone.php
     * @link http://cn2.php.net/manual/en/class.mongocursor.php
     */
    public function find($collection, $condition=array(), $fields=array(), $findOne=FALSE, $obj=FALSE) {
        if (isset($condition['_id']) && !is_array($condition['_id'])) {
            $condition['_id'] = new MongoId($condition['_id']);
        }
        if ($findOne) {
            return $this->db->$collection->findOne($condition, $fields);
        } else {
            if ($obj) {
                return $this->db->$collection->find($condition, $fields);
            }
            return iterator_to_array($this->db->$collection->find($condition, $fields));
        }
    }

    /**
     * 删除一个数据集
     * @param string $collection 数据集名字
     * @return mixed 
     * @link http://cn2.php.net/manual/en/mongocollection.drop.php
     */
    public function dropCollection($collection) {
        return $this->db->$collection->drop();
    }

    /**
     * 得到某个条件下的数据集数量
     * @param string $collection 数据集名字
     * @param array $condition 条件数组
     * @param int $limit 显示数量
     * @param int $skip 位移数量
     * @return int Returns the number of documents matching the query. 
     * @link http://cn2.php.net/manual/en/mongocollection.count.php
     */
    public function countData($collection, $condition=array(), $limit=0, $skip=0) {
        return $this->db->$collection->count($condition, $limit, $skip);
    }

    /**
     * 建立索引
     * @param string $collection 数据集名字
     * @param array $keys 需要创建索引的字段
     * @param array $options (unique,dropDups,background,safe,name,timeout)
     * @return boolean TRUE
     * @link http://cn2.php.net/manual/en/mongocollection.ensureindex.php
     */
    public function ensureIndex($collection, $keys, $options=array('background' => TRUE, 'safe' => TRUE)) {
        return $this->db->$collection->ensureIndex($keys, $options);
    }

    /**
     * 删除索引
     * @param string $collection 数据集名字
     * @param string|array $keys 需要删除索引的字段
     * @param boolean $all 是否是删除所有索引
     * @return mixed Returns the database response.
     * @link http://cn2.php.net/manual/en/mongocollection.deleteindexes.php
     * @link http://cn2.php.net/manual/en/mongocollection.deleteindex.php
     */
    public function deleteIndex($collection, $keys, $all=FALSE) {
        if ($all) {
            return $this->db->$collection->deleteIndexes();
        }
        return $this->db->$collection->deleteIndex($keys);
    }

}

?>