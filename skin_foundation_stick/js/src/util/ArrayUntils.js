

/**
*	js数组类
*/
var ArrayUntils = {};


/**
 * 从小到大排序
 * 
 *	@param: arr:数组;
 *	return 新数组;
 * */

 ArrayUntils.sortMinToMax = function (arr)
{
	
	
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] > my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return my_arr;
}

/**
 * 从大到小排序
 * 
 *	@param: arr:数组;
 *	return 新数组;
 * */

ArrayUntils.sortMaxToMin = function (arr)
{
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] < my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return my_arr;
}

/**
 * 找到最大数
 * 
 *	@param: arr:数组;
 *	return 最大数字;
 * */

ArrayUntils.findMaxNum = function (arr)
{
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] > my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return my_arr[my_arr.length-1];
}

/**
 * 找到最小数
 *	@param: arr:数组;
 *	return 最小数字;
 * 
 * */

ArrayUntils.findMinNum = function (arr)
{
	
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] > my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return my_arr[0];
}


/**
 * 找到最大数字的键值
 *
 *	@param: arr:数组;
 *	return 返回最大数字的键值;
 * */

ArrayUntils.findMaxNumKey = function (arr)
{
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] > my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return arr.indexOf(my_arr[my_arr.length - 1]);
}

/**
 * 找到最小数字的键值
 *
 *	@param: arr:数组;
 *	return 返回最小数字的键值;
 * 
 **/
 
ArrayUntils.findMinNumKey = function (arr)
{
	var my_arr = arr.slice();
	var temp = 0;
	for (var i = 0 ; i < my_arr.length - 1 ; i++) 
	{
		for(var j = 0 ; j < my_arr.length - 1 ; j++)
		{
			if (my_arr[j] > my_arr[j+1]) 
			{	
				temp = my_arr[j+1];
				my_arr[j+1] = my_arr[j];
				my_arr[j] = temp;
			}	
		}
		
	}
	return arr.indexOf(my_arr[0]);
}


/**
 * 
 * 随机数组形式1
 * 
 *	@param: arr:数组;
 *	return 新数组;
 *
 **/

ArrayUntils.random1 = function (arr)
{
	arr.sort(function(){ return Math.random()-0.5; });
	return arr;
}


/**
 * 区间不重复随机数组
 *
 * @param	start:开始数
 * @param	end:结束数 
 * 
 *	return 新数组;
 * */

ArrayUntils.RandomArray = function (start,end)
{
	var my_array = new Array();      
	var i = 0;       
	for (i = start ; i <= end; i++) 
	{          
		my_array.push(i);      
	}       
	var id = parseInt(Math.random()*3)+1;
	
	return ArrayUntils["random"+id](my_array); 
}

