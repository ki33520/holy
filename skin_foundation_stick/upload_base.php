<?php

//include 'config.inc.php';

define( 'ROOT_PATH', realpath(dirname(__FILE__)).'/' );

if ($_POST['imageData']) {
	$base64 = $_POST['imageData'];
	$IMG = base64_decode(substr($base64,22));
    $targetPath   = ROOT_PATH . 'uploads/';
    if( !is_dir($targetPath) ){
        mkdir($targetPath,0777,true);
    }
    $new_file_name = time().rand(1,1000).'.jpg';
    $targetFile = $targetPath . $new_file_name;
		
	file_put_contents($targetFile, $IMG );
	
    if( !file_exists( $targetFile ) ){
        $ret['status'] = 0;
    } elseif( !$imginfo=getImageInfo($targetFile) ) {
        $ret['status'] = 101;
    } else {
        $img = 'uploads/'.$new_file_name;
        $ret['status'] = 1;
        $ret['data'] = $img;
		$imginfo = getImageInfo($targetFile);
		$ret['result_width'] = $imginfo['width'];
		$ret['result_height'] = $imginfo['height'];
    }
}else{
	 $ret['status'] = 100;
     $ret['result_des'] = 'not find any files';	
}

function getImageInfo( $img ){
	$imageInfo = getimagesize($img);
	if( $imageInfo!== false) {
		$imageType = strtolower(substr(image_type_to_extension($imageInfo[2]),1));
		$info = array(
				"width"		=>$imageInfo[0],
				"height"	=>$imageInfo[1],
				"type"		=>$imageType,
				"mime"		=>$imageInfo['mime'],
		);
		return $info;
	}else {
		return false;
	}
}
exit( json_encode( $ret ) );