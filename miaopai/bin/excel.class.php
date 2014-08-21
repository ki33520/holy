<?php
class Excel {

 var $inEncode; //一般是页面编码
 var $outEncode; //一般是Excel文件的编码

 public function __construct(){

 }
 /**
 *设置编码
 */
 public function setEncode($incode,$outcode){
    $this->inEncode=$incode;
    $this->outEncode=$outcode;
 }
 /**
 *设置Excel的标题栏
 */
 public function setTitle($titlearr){
   $title="";
    foreach($titlearr as $v){
     if($this->inEncode!=$this->outEncode){
      $title.=iconv($this->inEncode,$this->outEncode,$v)."\t";
     }
     else{
      $title.=$v."\t";
     }
    }
    $title.="\n";
    return $title;
 }
 /**
 *设置Excel内容
 */
 public function setRow($array){
    $content="";
    foreach($array as $k => $v){
     foreach($v as $vs){
      if($this->inEncode!=$this->outEncode){
       $content.=iconv($this->inEncode,$this->outEncode,$vs)."\t";
      }
      else{
       $content.=$vs."\t";
      }
     }
     $content.="\n";
    }
    return $content;
 }
 /**
 *生成并自动下载Excel
 * $titlearr 标题栏数组
 * $array 内容数组
 * $filename 文件名称 (为空，已当前日期为名称)
 */
  public function getExcel($titlearr,$array,$filename=''){
      if($filename==''){
       $filename=date("Y-m-d");
      }
      $title=$this->setTitle($titlearr);
      $content=$this->setRow($array);
      header("Content-type:application/vnd.ms-excel");
      header("Content-Disposition:filename=".$filename.".xls");
      echo $title;
      echo $content;
  }
  
}
