<?php
class common
{
	private $DB; 
	private static $Plat;

	function __construct($plat='pc'){
		$this->DB = new medoo(array(
					'database_type' => 'mysql',
					'database_name' => 'tiguan',
					'server' => 'localhost',
//<<<<<<< .mine
					'username' => 'root',
					'password' => '', 
//=======
					//'username' => 'tiguan',
					//'password' => 'HTx!E2gK%A', 
//>>>>>>> .r1850
					'port' => 3306,
					'charset' => 'utf8',
					'option' => array(PDO::ATTR_CASE => PDO::CASE_NATURAL)));
		$this->Plat=$plat;
	}

	function get_all($tb){
		$datas=$this->DB->select($tb,"*");
		print_r($datas);
	}


	function get_miaopai($uid){
		$miaopai=file_get_contents('http://api.yixia.com/m/v2_user.json?weiboid='.$uid.'&page=1&per=20&ver=mulfollowv2&vend=miaopai');
		echo $miaopai;
	}

	function testdrive($udata){
		$bool=false;
		
		if($udata AND $this->check_array_item($udata)){ 
			$last_user_id=$this->DB->insert('testdrive',array('name'=>$udata['name'],'gender'=>$udata['gender'],'phone'=>$udata['phone'],'email'=>$udata['email'],'purchase'=>$udata['purchase'],'dealer'=>$udata['dealer'],'plat'=>$this->Plat));	
			if( !! $last_user_id )
			{
			    $bool=true;
			}
		}else{
			$data=array('msg'=>'提交失败','error_code'=>10002);
			$this->output($data);
			return;
		}
		
		if($bool){
			$data=array('msg'=>'提交成功','error_code'=>0);
		}else{
			$data=array('msg'=>'提交失败','error_code'=>10001);
		}
		$this->output($data);
	}

	function export_to_excel(){
		$datas=$this->DB->select('testdrive',array('name','gender','phone','email','purchase','dealer','plat','rec_date'));

		$excel=new Excel();
		//设置编码：
		$excel->setEncode("utf-8","gb2312"); //如果不转码，参数写一样即可，例如$excel->setEncode("utf-8","utf-8"); $excel->setEncode("utf-8","gb2312");
		 //设置标题栏
		 $title=array("姓名","称谓","电话","Email","意向购车时间","经销商","平台","提交时间");
		 //设置内容栏

		//生成EXCEL
		$excel->getExcel($title,$datas,"tiguan launch testdrive-".date('Y.m.d'));
	}

	function check_array_item($arr){
		$bool=true;
		foreach ($arr as $key => $value) {
			if( empty($value) ){
				$bool=false;
			}
		}
		return $bool;
	}

	function error(){
		$data['msg']='数据异常';
		$data['error_code']=10001;
		$this->output($data);
	}

	//输出JSON数据
	function output($data){
		echo json_encode($data);
	}
}
