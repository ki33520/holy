<?php
/**
*@param<string>$origin_path 原始图片地址
*@param<int>newImageWidth 缩略图的宽度
*@param<int>newImageHeight缩略图的高度
*@param<string>to_image_path 缩略图地址
*return <string>
*/
//定宽
function _thumb_nail($origin_path,$newImageWidth,$to_image_path){
		if(!file_exists($origin_path)){
			return 'error';
		}
		$ext = end(explode('.',$origin_path));
		$size = getimagesize($origin_path);
		$source = load_from_image($ext,$origin_path);
		$rate = $size[0]/$size[1];

		$tmp = create_tmp_pic($ext,$source, $newImageWidth, $newImageWidth / $rate);
		$new_image = $tmp['new_image'];
		$source = $tmp['source'];
		//print_r($tmp);exit;
		imagecopyresampled($new_image,$source,0,0,0,0,$newImageWidth,$newImageWidth / $rate,$size[0],$size[1]);
		$thumb_image = create_img($ext, $new_image, $to_image_path);
		imagedestroy($new_image);
		imagedestroy($source);
		chmod($to_image_path,0777);
		return $to_image_path;
}

function thumb_nail($origin_path,$newImageWidth,$newImageHeight,$to_image_path){
		if(!file_exists($origin_path)){
			return 'error';
		}
		$ext = end(explode('.',$origin_path));
		$size = getimagesize($origin_path);
		$source = load_from_image($ext,$origin_path);
		$rate = $size[0]/$size[1];
		$new_rate = $newImageWidth/$newImageHeight;
		//等比例缩放，需要重新计算图片的宽度和高度
		if($rate > $new_rate){
			$newImageHeight = round($newImageWidth/$rate);
		}else{
			$newImageWidth = round($newImageHeight*$rate);
		}
		$tmp = create_tmp_pic($ext,$source, $newImageWidth, $newImageHeight);
		$new_image = $tmp['new_image'];
		$source = $tmp['source'];
		//print_r($tmp);exit;
		imagecopyresampled($new_image,$source,0,0,0,0,$newImageWidth,$newImageHeight,$size[0],$size[1]);
		$thumb_image = create_img($ext, $new_image, $to_image_path);
		imagedestroy($new_image);
		imagedestroy($source);
		chmod($to_image_path,0777);
		return $to_image_path;
}

/**
* 修改一个图片 让其翻转指定度数
*
* @param string $filename 文件名（包括文件路径）
* @param float $degrees 旋转度数
* @return boolean
*/
function flip($filename, $src, $degrees = 90) {
    $data = @getimagesize($filename);
    if ($data==false)return false;
    //读取旧图片
    switch ($data[2]) {
    case 1:
    $src_f = imagecreatefromgif($filename);break;
    case 2:
    $src_f = imagecreatefromjpeg($filename);break;
    case 3:
    $src_f = imagecreatefrompng($filename);break;
    }
    if($src_f=="")return false;
    $rotate = @imagerotate($src_f, $degrees,0);
    if(!imagejpeg($rotate,$src,100))return false;
    @imagedestroy($rotate);
    return true;
}

/**
*@param<string>$origin_path 原始图片位置
*@param<string>$to_image_path 打完水印的图片位置
*@param<string>$markobj 水印图片地址
*@param<int>
*/
function watermark($origin_path,$to_image_path,$markobj,$with,$height){
		if(!file_exists($origin_path)){
			return 'error';
		}
		if(!file_exists($markobj)){
			echo "22";
			return 'error';
		}else{
			$watermark_img = $markobj;
		}
		$imageType = end(explode('.',$origin_path));
		$size = getimagesize($origin_path);
		if($imageType !='png'){
			$color_photo = imagecreatetruecolor($size[0], $size[1]);
		}
		$source = load_from_image($imageType, $origin_path);
		if(!$source){
			return 'error';
		}

		if($imageType != 'png') {
			imageCopy($color_photo, $source, 0, 0, 0, 0, $size[0], $size[1]);
			$source = $color_photo;
		}
	
		$watermarkinfo = getimagesize($watermark_img);
		list($logo_w, $logo_h) = $watermarkinfo;
	
	

		$watermark_ext = end(explode('.',$watermark_img));
		$watermark_logo = load_from_image($watermark_ext, $watermark_img);
		if(!$watermark_logo){
			return  'error';
		}
		if($watermark_ext == 'png') {
			imagealphablending($source, true);
			imagesavealpha($source, true);
			imageCopy($source, $watermark_logo, $width, $height, 0, 0, $logo_w, $logo_h);
		}else{
			imageAlphaBlending($source, true);
			imageCopyMerge($source, $watermark_logo, $width, $height, 0, 0, $logo_w, $logo_h, 80);
		}
		
		create_img($imageType,$source,$to_image_path);
		if($type == 2){
			imagedestroy($watermark_logo);
		}
		imagedestroy($source);
		return  $to_image_path;
}

/**
	 * 图片剪切
	 * @Author Tom
	 * @param
	 * @param <float> $start_width 开始剪切的x轴点
	 * @param <float> $start_height 开始剪切的y轴点
	 * @param <float> $dst_width 处理后的剪切图片宽度
	 * @param <float> $dst_height 处理后的剪切图片高度
	 * @param <float> $width  剪切的图片宽度
	 * @param <float> $height 剪切的图片高度
	 * @return
	 */
	function crop($origin_path,$start_width,$start_height,$dst_width,$dst_height,$width,$height,$to_image_path){
		//echo $origin_path;exit;
		if(!file_exists($origin_path)){
			return 'error';
		}
		$size = getimagesize($origin_path);
		//根据是横图或者竖图进行相关处理
		if($start_width >=$size[0]){//开始区域x轴超出原图范围
			$start_width = $size[0];
		}
		if($start_height >=$size[1]){//开始区域的y轴超出原图范围
			$start_height = $size[1];
		}
		/*if($dst_width >= $size[0]){
			$dst_width = $size[0];
		}
		if($dst_height >=$size[1]){
			$dst_height = $size[1];
		}*/
		$ext = end(explode('.',$origin_path));
		$source = load_from_image($ext, $origin_path);
		$total_width = $start_width +$width;
		$total_height = $start_height + $height;
		//echo $total_width.'--'.$total_height.'---'.$size[0].'--'.$size[1];exit;
		if($total_width > $size[0] || $total_height > $size[1]){//图片的选区不能超出原图的范围
			return 'error';
		}
		$tmp = create_tmp_pic($ext,$source, $dst_width, $dst_height);
		//$new_image = imagecreatetruecolor($width,$dst_height);
		$new_image = $tmp['new_image'];
		$source = $tmp['source'];
		if($ext == 'gif'){
			$transparent = imagecolortransparent($source);
			if ($transparent >= 0) {
				// The original must have a transparent color, allocate to the new image.
				$transparent_color = imagecolorsforindex($source, $transparent);
				$transparent = imagecolorallocate($new_image, $transparent_color['red'], $transparent_color['green'], $transparent_color['blue']);

				// Flood with our new transparent color.
				imagefill($new_image, 0, 0, $transparent);
				imagecolortransparent($new_image, $transparent);
			}
		}elseif ($ext == 'png') {
			imagealphablending($new_image, FALSE);
			$transparency = imagecolorallocatealpha($new_image, 0, 0, 0, 127);
			imagefill($new_image, 0, 0, $transparency);
			imagealphablending($new_image, TRUE);
			imagesavealpha($new_image, TRUE);
		}
		else {
			imagefill($new_image, 0, 0, imagecolorallocate($new_image, 255, 255, 255));
		}
		imagecopyresized($new_image,$source,0,0,$start_width,$start_height,$dst_width,$dst_height,$width,$height);
		create_img($ext, $new_image, $to_image_path);
		imagedestroy($new_image);
		imagedestroy($source);
		chmod($to_image_path, 0777);
		return $to_image_path;
	}

function create_tmp_pic($ext,$source,$width,$height){
		$new_image = imagecreatetruecolor($width,$height);
		if($ext == 'gif'){
			$transparent = imagecolortransparent($source);
			if ($transparent >= 0) {
				// The original must have a transparent $source, allocate to the new image.
				$transparent_color = imagecolorsforindex($source, $transparent);
				$transparent = imagecolorallocate($new_image, $transparent_color['red'], $transparent_color['green'], $transparent_color['blue']);

				// Flood with our new transparent color.
				imagefill($new_image, 0, 0, $transparent);
				imagecolortransparent($new_image, $transparent);
			}
		}elseif ($ext == 'png') {
			imagealphablending($new_image, FALSE);
			$transparency = imagecolorallocatealpha($new_image, 0, 0, 0, 127);
			imagefill($new_image, 0, 0, $transparency);
			imagealphablending($new_image, TRUE);
			imagesavealpha($new_image, TRUE);
		}
		else {
			imagefill($new_image, 0, 0, imagecolorallocate($new_image, 255, 255, 255));
		}
		return array('new_image' => $new_image,'source' => $source);
	}

/**
	 *
	 * @Author Tom
	 * @param
	 * @param <string? $ext 文件后缀
	 * @param <resource> $source 文件resource
	 * @param <string> $full_path 生成的文件的实际完整地址
	 * @return
	 */
	function create_img($ext,$source,$full_path){
		switch($ext){
			case 'png':
				$image	= imagepng($source,$full_path);
				break;
			case 'gif':
				$image	= imagegif($source,$full_path);
				break;
			case 'jpg':
			case 'jpeg':
				$image	= imagejpeg($source,$full_path,90);
				break;
		}
		return $image;
	}

	/**
	 * load 图片
	 * @Author Tom
	 * @param
	 * @param <string> $ext 文件扩展名
	 * @param <string> $full_path 文件实际完整地址
	 * @return
	 */
	function load_from_image($ext,$full_path){
		$is_exist = file_exists($full_path);
		if($is_exist){
			switch($ext) {
				case "gif":
					$source=imagecreatefromgif($full_path);
					break;
				case "jpeg":
				case "jpg":
					$source=imagecreatefromjpeg($full_path);
					break;
				case "png":
					$source=imagecreatefrompng($full_path);
					break;
			}
			return $source;
		}else{
			return FALSE;
		}
	}
	
	    /**
    *$text为要打水印的图片或文字
    *$type 1为图片2为文字
    *$x x轴位置
    *$y y轴位置
    *$from 背景图
    *$to 生成后的图片
    *$fontSize 字体大小
    $r,$g,$b 字体颜色
    */
    function _watermark($text,$type,$x,$y,$from,$to,$fontSize="",$r="",$g="",$b=""){
                    $imageType = end(explode('.',$text));
                    $imageType = 'jpg';
                    $size = getimagesize($from);
                    if($imageType !='png'){
                            $color_photo = imagecreatetruecolor($size[0], $size[1]);
                    }
     				
                    $source = load_from_image($imageType, $from);
                    if(!$source){
                            return  FALSE;
                    }
                    if($imageType != 'png') {
                            imageCopy($color_photo, $source, 0, 0, 0, 0, $size[0], $size[1]);
                            $source = $color_photo;
                    }
                    if($type == 1){
                            $watermark_text = $text;
                            $font = "msyh.ttf";
                            $bg = imagecolorallocate($source, 255, 255, 255);
                            $textcolor = imagecolorallocate($source, $r, $g, $b);
                            $box = imagettfbbox(2, 0, $font, $watermark_text);
                            $logo_h = max($box[1], $box[3]) - min($box[5], $box[7]);
                            $logo_w = max($box[2], $box[4]) - min($box[0], $box[6]);
                            $ax = min($box[0], $box[6]) * -1;
                            $ay = min($box[5], $box[7]) * -1;
                    }elseif($type ==2){
                            $watermarkinfo = getimagesize($from);
                            list($logo_w, $logo_h) = $watermarkinfo;
                    }
                    
     
                    //1为文字水印，2为图片水印
                    if($type == 1){
                            $height = $y + $ay;
                            $width = $x + $ax;
                            imagettftext($source, $fontSize,0,$x, $y, $textcolor, $font, $watermark_text);
                    }elseif($type ==2){
                            $watermark_logo = load_from_image('jpg', $text);
    $watermark_ext = 'jpg';
                            if($watermark_ext == 'png') {
                                    imagealphablending($source, true);
                                    imagesavealpha($source, true);
                                    //imageCopy($source, $text,0, 0, 0, 0, $logo_w, $logo_h);
                            }else{
                                    imageAlphaBlending($source, true);
                                    imageCopyMerge($source, $watermark_logo, $x, $y, 0, 0, $logo_w, $logo_h, 80);
                            }
                    }
    //return $source;
                    create_img('jpg',$source,$to);
                    if($type == 2){
                            imagedestroy($watermark_logo);
                    }
                    imagedestroy($source);
                    return  $to;
            }

