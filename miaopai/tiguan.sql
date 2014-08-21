/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50509
 Source Host           : localhost
 Source Database       : tiguan

 Target Server Type    : MySQL
 Target Server Version : 50509
 File Encoding         : utf-8

 Date: 07/23/2014 14:55:31 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `testdrive`
-- ----------------------------
DROP TABLE IF EXISTS `testdrive`;
CREATE TABLE `testdrive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(35) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `age` varchar(3) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `purchase` varchar(10) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `dealer` varchar(50) NOT NULL,
  `plat` varchar(10) NOT NULL,
  `rec_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `testdrive`
-- ----------------------------
BEGIN;
INSERT INTO `testdrive` VALUES ('1', 'sl', '先生', '10.', '13222222222', 'sl@sl.com', '三个月', 'tiguan', '上海XX经销商', 'pc', '2014-07-17 19:37:54'), ('2', 'sl', '先生', '10.', '13222222222', 'sl@sl.com', '三个月', 'tiguan', '上海XX经销商', 'pc', '2014-07-17 19:38:43'), ('3', 'sl', '先生', '10.', '13222222222', 'sl@sl.com', '三个月', 'tiguan', '上海XX经销商', 'mobile', '2014-07-17 19:39:58');
COMMIT;

-- ----------------------------
--  Table structure for `user_contacts`
-- ----------------------------
DROP TABLE IF EXISTS `user_contacts`;
CREATE TABLE `user_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(12) NOT NULL,
  `nickname` varchar(30) NOT NULL,
  `realname` varchar(20) NOT NULL,
  `mobile` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `plat` varchar(10) NOT NULL,
  `rec_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user_contacts`
-- ----------------------------
BEGIN;
INSERT INTO `user_contacts` VALUES ('1', '1886746124', 'shellykingz', '雷锋', '13522222222', 'sk@sk.com', 'pc', '2014-07-10 17:42:39'), ('2', '1886551310', 'Pinocao17', 'test1', '13511111111', 'test1@qq.com', 'pc', '2014-07-11 18:00:16'), ('3', '1886746124', 'shellykingz', '雷神', '13255555555', 'sk@ls.com', 'pc', '2014-07-11 18:04:24'), ('4', '1733394683', '小擦剂', '1', '13678942100', '1234@126.com', 'pc', '2014-07-11 18:08:31'), ('5', '1886746124', 'shellykingz', 'skl', '13652245413', 'asdf@s.s', 'pc', '2014-07-16 22:20:02'), ('6', '1886746124', 'shellykingz', 'skl', '13652245413', 'asdf@s.s', 'pc', '2014-07-16 22:22:38'), ('7', '1886746124', 'shellykingz', 'skl', '13652245413', 'asdf@s.s', 'pc', '2014-07-16 22:26:04'), ('8', '1886746124', 'shellykingz', 'sdkf', '13652222222', 'sls@sls.com', 'pc', '2014-07-16 22:37:18'), ('9', '1886551310', 'Pinocao17', 'test', '13511111111', 'test@qq.com', 'pc', '2014-07-16 22:55:12'), ('10', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:47:52'), ('11', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:47:53'), ('12', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:47:54'), ('13', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:48:10'), ('14', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:48:49'), ('15', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 16:53:44'), ('16', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:06:57'), ('17', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:06:57'), ('18', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:06:58'), ('19', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:06:59'), ('20', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:06:59'), ('21', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:07:00'), ('22', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:07:01'), ('23', '1886746124', 'shellykingz', 'sllll', '13555555555', 'sksksk@slls.com', 'pc', '2014-07-17 17:07:16'), ('24', '1886551310', 'Pinocao17', 'test1', '13411111111', 'test@qq.com', 'pc', '2014-07-17 17:08:59'), ('25', '1886551310', 'Pinocao17', 'Test', '13411111111', 'Test@qq.com', 'mobile', '2014-07-17 18:22:12'), ('26', '1886551310', 'Pinocao17', 'Test', '13411111111', 'Test@qq.com', 'mobile', '2014-07-17 18:22:13'), ('27', '1886551310', 'Pinocao17', 'Test', '13411111111', 'Test@qq.com', 'mobile', '2014-07-17 18:22:13'), ('28', '1886551310', 'Pinocao17', 'Test', '13411111111', 'Test@qq.com', 'mobile', '2014-07-17 18:22:14'), ('29', '1886551310', 'Pinocao17', 'Test', '13411111111', 'Test@qq.com', 'mobile', '2014-07-17 18:22:15'), ('30', '1886551310', 'Pinocao17', 'Test', '13511111111', 'Test@qq.com', 'mobile', '2014-07-17 20:29:12');
COMMIT;

-- ----------------------------
--  Table structure for `user_share`
-- ----------------------------
DROP TABLE IF EXISTS `user_share`;
CREATE TABLE `user_share` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(12) NOT NULL,
  `nickname` varchar(35) NOT NULL,
  `plat` varchar(10) NOT NULL,
  `rec_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user_share`
-- ----------------------------
BEGIN;
INSERT INTO `user_share` VALUES ('1', '1886746124', 'shellykingz', 'pc', '2014-07-10 17:42:54'), ('2', '1886551310', 'Pinocao17', 'pc', '2014-07-11 18:00:29'), ('3', '1886746124', 'shellykingz', 'pc', '2014-07-11 18:04:36'), ('4', '1733394683', '小擦剂', 'pc', '2014-07-11 18:08:48'), ('5', '1886746124', 'shellykingz', 'pc', '2014-07-16 22:37:24'), ('6', '1886551310', 'Pinocao17', 'pc', '2014-07-16 22:55:23'), ('7', '1886746124', 'shellykingz', 'pc', '2014-07-17 17:07:38');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(12) NOT NULL,
  `nickname` varchar(35) NOT NULL,
  `face` varchar(50) NOT NULL,
  `plat` varchar(10) NOT NULL,
  `rec_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', '1886746124', 'shellykingz', 'http://tp1.sinaimg.cn/1886746124/180/5628469391/1', 'pc', '2014-07-10 17:41:41'), ('2', '1886551310', 'Pinocao17', 'http://tp3.sinaimg.cn/1886551310/180/5691385468/0', 'pc', '2014-07-11 18:00:14'), ('3', '3190861200', '灯神索姆拉', 'http://tp1.sinaimg.cn/3190861200/180/40015561560/1', 'pc', '2014-07-11 18:05:11'), ('4', '1733394683', '小擦剂', 'http://tp4.sinaimg.cn/1733394683/180/5633408085/1', 'pc', '2014-07-11 18:08:23'), ('5', '1791646681', '1988J', 'http://tp2.sinaimg.cn/1791646681/180/5655779331/0', 'mobile', '2014-07-17 18:05:34'), ('6', '1873980594', '小黑小黑小', 'http://tp3.sinaimg.cn/1873980594/180/5606641417/0', 'pc', '2014-07-17 19:34:45');
COMMIT;

