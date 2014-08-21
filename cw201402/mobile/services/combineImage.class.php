<?php

/*
 * 功能：PHP图片水印 (水印支持[zhi chi]图片或文字[wen zi]) 
 * 参数[can shu]： 
 *       $groundImage     背景图片，即需要加水印的图片，暂只支持[zhi chi]GIF,JPG,PNG格式； 
 *       $waterPos        水印位置[wei zhi]，有10种状态[zhuang tai]，0为随机位置[wei zhi]； 
 *                       1为顶端居左，2为顶端居中，3为顶端居右； 
 *                       4为中部居左，5为中部居中，6为中部居右； 
 *                       7为底端居左，8为底端居中，9为底端居右； 
 *       $waterImage      图片水印，即作为水印的图片，暂只支持[zhi chi]GIF,JPG,PNG格式； 
 *       $waterText       文字[wen zi]水印，即把文字[wen zi]作为为水印，支持[zhi chi]ASCII码，不支持[zhi chi]中文[zhong wen]； 
 *       $fontSize        文字[wen zi]大小，值为1、2、3、4或5，默认[mo ren]为5； 
 *       $textColor       文字[wen zi]颜色，值为十六进制[shi liu jin zhi]颜色值，默认[mo ren]为#CCCCCC(白灰色)； 
 *       $fontfile        ttf字体[zi ti]文件[wen jian]，即用来设置[she zhi]文字[wen zi]水印的字体[zi ti]。使用windows的用户[yong hu]在系统[xi tong]盘[xi tong pan]的目录中 
 *                       搜索[sou suo]*.ttf可以得到系统[xi tong]中安装[an zhuang]的字体[zi ti]文件[wen jian]，将所要的文件[wen jian]拷到网站[wang zhan]合适的目录中, 
 *                       默认[mo ren]是当前目录[dang qian mu lu]下arial.ttf。 
 *       $xOffset         水平偏移量[pian yi liang]，即在默认[mo ren]水印坐标值基础上加上这个值，默认[mo ren]为0，如果你想留给水印留 
 *                       出水平方向上的边距，可以设置[she zhi]这个值,如：2 则表示在默认[mo ren]的基础上向右移[you yi]2个单位[dan wei],2 表示向左移[zuo yi]两单位[dan wei] 
 *       $yOffset         垂直偏移量[pian yi liang]，即在默认[mo ren]水印坐标值基础上加上这个值，默认[mo ren]为0，如果你想留给水印留 
 *                       出垂直方向上的边距，可以设置[she zhi]这个值,如：2 则表示在默认[mo ren]的基础上向下移2个单位[dan wei],2 表示向上移两单位[dan wei] 
 * 返回值： 
 *        0   水印成功 
 *        1   水印图片格式目前不支持[zhi chi] 
 *        2   要水印的背景图片不存在 
 *        3   需要加水印的图片的长度或宽度比水印图片或文字[wen zi]区域[qu yu]还小，无法生成水印 
 *        4   字体[zi ti]文件[wen jian]不存在 
 *        5   水印文字[wen zi]颜色格式不正确 
 *        6   水印背景图片格式目前不支持[zhi chi] 
 * 修改[xiu gai]记录： 
 *          
 * 注意：Support GD 2.0，Support FreeType、GIF Read、GIF Create、JPG 、PNG 
 *       $waterImage 和 $waterText 最好不要同时使用，选其中之一即可，优先使用 $waterImage。 
 *       当$waterImage有效[you xiao]时，参数[can shu]$waterString、$stringFont、$stringColor均不生效。 
 *       加水印后的图片的文件[wen jian]名[wen jian ming]和 $groundImage 一样。 
 * 作者：高西林 
 * 日期：2007428 
 * 说明[shuo ming]：本程序根据longware的程序改写而成。 
 */

function imageWaterMark($imgName, $groundImage, $waterPos=0, $waterImage="", $waterText="", $fontSize=12, $textColor="#CCCCCC", $fontfile='arial.ttf', $xOffset=0, $yOffset=0) {

    $isWaterImage = FALSE;
    //读取[du qu]水印文件[wen jian]  
    if (!empty($waterImage) && file_exists($waterImage)) {
        $isWaterImage = TRUE;
        $water_info = getimagesize($waterImage);
        $water_w = $water_info[0]; //取得水印图片的宽  
        $water_h = $water_info[1]; //取得水印图片的高  

        switch ($water_info[2]) {    //取得水印图片的格式    
            case 1:$water_im = imagecreatefromgif($waterImage);
                break;
            case 2:$water_im = imagecreatefromjpeg($waterImage);
                break;
            case 3:$water_im = imagecreatefrompng($waterImage);
                break;
            default:return 1;
        }
    }
    //读取[du qu]背景图片  
    if (!empty($groundImage) && file_exists($groundImage)) {
        $ground_info = getimagesize($groundImage);
        $ground_w = $ground_info[0]; //取得背景图片的宽  
        $ground_h = $ground_info[1]; //取得背景图片的高  

        switch ($ground_info[2]) {    //取得背景图片的格式    
            case 1:$ground_im = imagecreatefromgif($groundImage);
                break;
            case 2:$ground_im = imagecreatefromjpeg($groundImage);
                break;
            case 3:$ground_im = imagecreatefrompng($groundImage);
                break;
            default:return 1;
        }
    } else {
        return 2;
    }

    //水印位置[wei zhi]  
    if ($isWaterImage) { //图片水印    
        $w = $water_w;
        $h = $water_h;
        $label = "图片的";
    } else {
        //文字[wen zi]水印  
        if (!file_exists($fontfile))
            return 4;
        $temp = imagettfbbox($fontSize, 0, $fontfile, $waterText); //取得使用 TrueType 字体[zi ti]的文本[wen ben]的范围[fan wei]  
        $w = $temp[2] - $temp[6];
        $h = $temp[3] - $temp[7];
        unset($temp);
    }
    if (($ground_w < $w) || ($ground_h < $h)) {
        return 3;
    }
    switch ($waterPos) {
        case 0://随机  
            $posX = rand(0, ($ground_w - $w));
            $posY = rand(0, ($ground_h - $h));
            break;
        case 1://1为顶端居左  
            $posX = 0;
            $posY = 0;
            break;
        case 2://2为顶端居中  
            $posX = ($ground_w - $w) / 2;
            $posY = 0;
            break;
        case 3://3为顶端居右  
            $posX = $ground_w - $w;
            $posY = 0;
            break;
        case 4://4为中部居左  
            $posX = 0;
            $posY = ($ground_h - $h) / 2;
            break;
        case 5://5为中部居中  
            $posX = ($ground_w - $w) / 2;
            $posY = ($ground_h - $h) / 2;
            break;
        case 6://6为中部居右  
            $posX = $ground_w - $w;
            $posY = ($ground_h - $h) / 2;
            break;
        case 7://7为底端居左  
            $posX = 0;
            $posY = $ground_h - $h;
            break;
        case 8://8为底端居中  
            $posX = ($ground_w - $w) / 2;
            $posY = $ground_h - $h;
            break;
        case 9://9为底端居右  
            $posX = $ground_w - $w;
            $posY = $ground_h - $h;
            break;
        case 1001;//自定义
            $posX = 197;
            $posY = 542;
            break;
        case 1002;//自定义
            $posX = 197;
            $posY = 542+23+28;
            break;
        case 1003;//自定义
            $posX = 197;
            $posY = 542+2*(23+28);
            break;
        case 9999;//自定义
            $posX = (630-583)/2 - 2;
            $posY = 406;
            break;

        default://随机  
            $posX = rand(0, ($ground_w - $w));
            $posY = rand(0, ($ground_h - $h));
            break;
    }

    //设定图像[tu xiang]的混色模式[mo shi]  
    imagealphablending($ground_im, true);

    if ($isWaterImage) { //图片水印  
        imagecopy($ground_im, $water_im, $posX + $xOffset, $posY + $yOffset, 0, 0, $water_w, $water_h); //拷贝[kao bei]水印到目标[mu biao]文件[wen jian]           
    } else {//文字[wen zi]水印  
        if (!emptyempty($textColor) && (strlen($textColor) == 7)) {
            $R = hexdec(substr($textColor, 1, 2));
            $G = hexdec(substr($textColor, 3, 2));
            $B = hexdec(substr($textColor, 5));
        } else {
            return 5;
        }
        imagettftext($ground_im, $fontSize, 0, $posX + $xOffset, $posY + $h + $yOffset, imagecolorallocate($ground_im, $R, $G, $B), $fontfile, $waterText);
    }

    //生成水印后的图片  
    //@unlink($groundImage);
    $name = $imgName;
    switch ($ground_info[2]) {//取得背景图片的格式  
        case 1:imagegif($ground_im, $name);
            break;
        case 2:imagejpeg($ground_im, $name);
            break;
        case 3:imagepng($ground_im, $name);
            break;
        default: return 6;
    }

    //释放[shi fang]内存[nei cun]  
    if (isset($water_info))
        unset($water_info);
    if (isset($water_im))
        imagedestroy($water_im);
    unset($ground_info);
    imagedestroy($ground_im);
    //  
    return $name;
}

/**
 * 注意需要字体支持
 */

/**
 *
 * @params
 * @$imgname 要处理的图片地址
 * @$text 文字
 *
 */
function LoadJpeg($imgname,$text)
{
    /* Attempt to open */
    $im = @imagecreatefromjpeg($imgname);
    if(!$im)
    {
        /* Create a black image */
        $im  = imagecreatetruecolor(150, 30);
        $bgc = imagecolorallocate($im, 255, 255, 255);
        $tc  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $bgc);
        /* Output an error message */
        
        imagestring($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }else{
	    $font = "../simsun.ttc";

		$im = imagecreatetruecolor(400, 30);
		
		// Create some colors
		$white = imagecolorallocate($im, 255, 255, 255);
		$grey = imagecolorallocate($im, 128, 128, 128);
		$black = imagecolorallocate($im, 0, 0, 0);
		imagefilledrectangle($im, 0, 0, 399, 29, $white);
				
		// Add some shadow to the text
		imagettftext($im, 20, 0, 11, 21, $grey, $font, $text);
		
		// Add the text
		imagettftext($im, 214, 268+146, 214+120, 268+146+20, $black, $font, $text);
    }
    return $im;
}



/**
 * @截取字符串
 * @params
 * @<string>$str要截取的字符串
 * @num 每行多少字
 * @return <string>$rStr处理之后的字符串
 *
 */
if(!function_exists('sub_str')) {
	function sub_str($str, $num,$l)
  {
    $sublen = strlen($str);
    $line = 0;
          $I = 0;
          $k = 0;
          $StringTMP="";
          while ($I<$sublen) {
              $StringTMP = substr($str,$I,1);
                if (ord($StringTMP)>=224) {
                  $k++;
                  if($k == $num){
                    $StringTMP = substr($str,$I,3)."\r\n";
                     $k=0;
                      $line ++;
                      if($line==$l){
                        break;
                      }
                  }else{
                    $StringTMP = substr($str,$I,3);
                  }
                  $I = $I + 3;
                } elseif (ord($StringTMP)>=192) {
                    $k++;
                  if($k == $num){
                    $StringTMP = substr($str,$I,2)."\r\n";
                    $k=0;
                      $line ++;
                      if($line==$l){
                        break;
                      }
                  }else{
                    $StringTMP = substr($str,$I,2);
                  }
                    $I = $I + 2;
                   
                } else {
                  $k++;
                  if($k == $num){
                    $StringTMP = $StringTMP."\r\n";
                    $k = 0;
                      $line++;
                    if($line==$l){
                      $StringLast[] = $StringTMP;
                        break;
                      }
                  }
                  $I = $I + 1;
                }
              $StringLast[] = $StringTMP;
              
          }
            $rStr = implode("",$StringLast);
        return $rStr;
    }
}

function resizeImage($image,$width,$height,$scale) {
	list($imagewidth, $imageheight, $imageType) = getimagesize($image);
	$imageType = image_type_to_mime_type($imageType);
	$newImageWidth = ceil($width * $scale);
	$newImageHeight = ceil($height * $scale);
	$newImage = imagecreatetruecolor($newImageWidth,$newImageHeight);
	switch($imageType) {
		case "image/gif":
			$source=imagecreatefromgif($image); 
			break;
	    case "image/pjpeg":
		case "image/jpeg":
		case "image/jpg":
			$source=imagecreatefromjpeg($image); 
			break;
	    case "image/png":
		case "image/x-png":
			$source=imagecreatefrompng($image); 
			break;
  	}
	imagecopyresampled($newImage,$source,0,0,0,0,$newImageWidth,$newImageHeight,$width,$height);
	
	switch($imageType) {
		case "image/gif":
	  		imagegif($newImage,$image); 
			break;
      	case "image/pjpeg":
		case "image/jpeg":
		case "image/jpg":
	  		imagejpeg($newImage,$image,90); 
			break;
		case "image/png":
		case "image/x-png":
			imagepng($newImage,$image);  
			break;
    }
	
	chmod($image, 0777);
	return $image;
}

?>