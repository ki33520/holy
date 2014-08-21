<?php
session_start();
require_once 'uploadImage.class.php';

if (!isset($_FILES['upload'])) {
	$return = array ('success' => 0, 'msg' => '必须上传图片');
	echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
	exit;
}

$ext = end(explode('.', $_FILES['upload']['name']));


if ($_FILES['upload']['size'] > 3 * 1024 * 1024) {
	$return = array ('success' => 0, 'msg' => '图片文件不能超过3M');
	echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
	exit;
}

if (!is_uploaded_file($_FILES['upload']['tmp_name'])) {
	$error = (!isset($_FILES['upload']['error'])) ? 4 : $_FILES[$field]['error'];
	exit;
	switch($error) {
		case 1:	// UPLOAD_ERR_INI_SIZE
			$return = array ('success' => 0, 'msg' => '图片文件过大');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		case 2: // UPLOAD_ERR_FORM_SIZE
			$return = array ('success' => 0, 'msg' => '文件上传大小超出form限制');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		case 3: // UPLOAD_ERR_PARTIAL
			$return = array ('success' => 0, 'msg' => '文件不完整');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		case 4: // UPLOAD_ERR_NO_FILE
			$return  = array ('success' => 0, 'msg' => '必须上传图片');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return). ');</script>';
			exit;
			break;
		case 6: // UPLOAD_ERR_NO_TMP_DIR
			$return = array ('success' => 0, 'msg' => '没有临时文件目录');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		case 7: // UPLOAD_ERR_CANT_WRITE
			$return = array ('success' => 0, 'msg' => '文件不可写');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		case 8: // UPLOAD_ERR_EXTENSION
			$return  = array ('success' => 0, 'msg' => '不支持该文件类型');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
			exit;
			break;
		default :
			$return = array ('success' => 0, 'msg' => '请择上传文件');
			echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return). ');</script>';
			exit;
			break;
	}

	return FALSE;
}
// Set the uploaded data as class variables
$file_temp = $_FILES['upload']['tmp_name'];
list($usec, $sec) = explode(' ', microtime());

$random = mt_rand(0, 999999) + time();
$random_string = substr(sha1($random), 3, 8);
$_SESSION['uploadImage'] = $random_string . '.' . $ext;
$origin_file_name = '../origin_images/' . $_SESSION['uploadImage'];
$thumbnail_file_name = '../thumb_images/' . $_SESSION['uploadImage'];

unset($usec);
unset($sec);

if (!copy($file_temp, $origin_file_name)) {
	if (!move_uploaded_file($file_temp, $origin_file_name)) {
		$return = array ('success' => 0, 'msg' => '图片上传失败');
		echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
		exit;
	}
}

/*
$size = getimagesize($origin_file_name);

if ($size[0] > $size[1]) {
    flip($origin_file_name, $thumbnail_file_name, 270);
    _thumb_nail($thumbnail_file_name, 583, $thumbnail_file_name);
}
else {
    _thumb_nail($origin_file_name, 583, $thumbnail_file_name);
}
*/
flip($origin_file_name, $thumbnail_file_name, 270);
_thumb_nail($thumbnail_file_name, 583, $thumbnail_file_name);
$size = getimagesize($thumbnail_file_name);

$start_height = ($size[1]-502)/2;
crop($thumbnail_file_name, 0, $start_height, 583, 502, 583 ,502, $thumbnail_file_name);

$return =  array ('success' => 1, 'file_name' => 'thumb_images/' . $_SESSION['uploadImage']);
echo '<script type="text/javascript">window.parent.uploadDone(' . json_encode($return) . ');</script>';
exit;
	