<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
//error_reporting(0);
date_default_timezone_set('Asia/Shanghai');

include_once('bin/medoo.min.php');
include_once('bin/excel.class.php');
include_once('bin/common.php');

$action=$_GET['action'];
$plat='pc';
if( $_GET['plat']=='mobile' ){
	$plat='mobile';
}

$COM=new common($plat);

switch ($action) {
	case 'miaopai':   //返回登录状态
		$COM->get_miaopai($_GET['uid']);
		break;

	case 'testdrive':
		$postdata['name']=$_POST['name'];
		$postdata['gender']=$_POST['gender'];
		$postdata['phone']=$_POST['phone'];
		$postdata['email']=$_POST['email'];
		$postdata['purchase']=$_POST['purchase'];
		$postdata['dealer']=$_POST['dealer'];
		$COM->testdrive($postdata);
		break;

	case 'exportmydatas':   //导出数据到EXCEl
		$COM->export_to_excel();
		break;

	case 'data':
		$COM->get_all($_GET['tb']);
		break;	

	default:		
		$COM->error();
		break;
}
