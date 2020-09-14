---
sidebar: auto
title: javaScript常用语法
sidebarDepth: 2
---
## 字符串操作
``` js
// 截取
str = str.substring(startInd, ?endInd[exclude]);
```

## 数组操作
``` js
var a = ['a', 'b', 'c'];

// 从startInd开始删除deleteCount个元素,若deleteCount不指定,将删除startInd及之后的所有元素
a.splice(startInd[from 0], ?deleteCount);

// 截取元素 endInd超过原数组长度也不会报错，正常截取
a = a.slice(startInd, ?endInd[exclude]);

// 拼接数组
c = a.concat(b);

// 复制数组
b = [].concat(a); // 浅拷贝,对任一数组中的【对象】进行修改将影响其他数组,而若元素不为对象则无影响
b = JSON.parse(JSON.stringify(a)); // 深拷贝,对元素进行修改将不影响其他数组

// 获取指定元素在数组中的下标
a.indexOf(ele);

// 遍历数组
$(a).each(function(index, val){
	console.log(index + '-' + val);
});
```

## js对象操作
``` js
// 遍历对象的key-value
for(var key in infoObj){
	console.log(infoObj[key]);
}

// 获取对象的所有key
var keyList = Object.keys(infoObj);

// 获取对象的所有value
var valueList = Object.values(infoObj);
```

## js单选框
``` js
// 获取单选框的值
console.log($('input[type=radio][name=radioName]:checked').val());

// 设置单选框的值,index指定第几个单选框(从0开始)
$('input[type=radio][name=radioName]').eq(index).prop('checked', true);

// 判断指定的单选框是否被勾选
console.log($('input[type=radio][name=radioName][value=radioValue]').is(':checked'));
```

## DataTables重写列的排序类型
* 问题描述：当使用非服务器模式加载数据时，DataTables有默认的排序类型，但若单元格数据带有html标签时，要根据标签中特定属性排序时只能自定义排序方式。
   * 如<span data-count="29">某吃货名称</span>，要根据data-count来排序。
* 解决方案：DataTables提供了自定义排序的方法。
   * 第一种：在排序前处理单元格中的数据，排序将按返回的处理值进行。
	``` js
	// dataTables新增排序类型，在排序前处理td中的数据
	$.fn.dataTable.ext.type.order['xxx-pre']=function(d){
		return d;
	};
	```

   * 第二种：重写排序逻辑。
    ``` js
	// dataTables新增排序类型，可重写升序的判断逻辑
	$.fn.dataTable.ext.type.order['xxx-asc']=function(e, t){
		// 默认是这样的，可重写
		return e<t?-1:e>t?1:0;
	};

	// dataTables新增排序类型，可重写降序的判断逻辑
	$.fn.dataTable.ext.type.order['xxx-desc']=function(e, t){
		// 默认是这样的，可重写
		return e<t?1:e>t?-1:0;
	};
	```

	::: warning 注意
	以上两种方法不能同时存在，有且只能存在一种。
	:::
	
	* 使用方式：
    ``` js
	$('#example').DataTable({
	    "columnDefs": [{
	        "type": "xxx",
	        //指定所有列使用这一规则
	        "targets": -1
	    }]
	});
   ```

## DataTables自动生成行号
* 问题描述：使用DataTables实现指定列的每一行都显示对应的序号。
* 解决方案：在配置列头的时候配置render。
``` js
render: function(data, type, full, meta){// data表示本单元格数据，full表示本行所有数据
	console.log('行号：'+ (meta.row + meta.settings._iDisplayStart + 1));
}
```

## 使用@RequestBody注解时Ajax写法
* 问题描述：接口使用@RequestBody注解接收参数时不指定contentType的Ajax请求写法无法正常传参。
* 解决方案：
``` js
$.ajax({
	url: "",
	type: 'post',
	dataType: 'json',
	contentType: 'application/json',
	success: function(res){

	},
	error: function(){

	}
});
```

## 匹配列表中的元素
* 问题描述：给定一个js数组，获取匹配到关键词的元素，并生成新的数组。
* 解决方案：在配置列头的时候配置render。
``` js
var datas=[{"name":"小乔"},{"name":"小可"},{"name":"大力"},{"name":"大乔"}];

// 比如匹配“大”
var matcher = new RegExp("大", "i");
var matchList = $.grep(datas,function(val) {
	return matcher.test(val.name);
});
console.log(matchList);
```

## 常用的时间函数
``` js
// 获取当前时间戳
getCurrentTimeLong(){
	return parseInt(new Date().getTime()/1000);
}

// 获取当前日期 yyyy-MM-dd HH:mm:ss
getCurrentTime(){
	var date = new Date();
	return date.getFullYear() + "-" + (date.getMonth() + 1 >= 10?date.getMonth() + 1:"0"+(date.getMonth() + 1))
		 + "-" + (date.getDate() >= 10?date.getDate():"0"+(date.getDate())) + " " 
		 + (date.getHours() >= 10?date.getHours():"0"+(date.getHours())) + ":"
		 + (date.getMinutes() >= 10?date.getMinutes():"0"+(date.getMinutes())) + ":" 
		 + (date.getSeconds() >= 10?date.getSeconds():"0"+(date.getSeconds()));
}

// 获取当前日期 yyyy-MM-dd
getCurrentDate(){
	var date = new Date();
	return date.getFullYear() + "-" + (date.getMonth() + 1 >= 10?date.getMonth() + 1:"0"+(date.getMonth() + 1))
		 + "-" + (date.getDate() >= 10?date.getDate():"0"+(date.getDate()));
}

// 获取指定日期的时间戳 "2020-06-14" -> 1592064000
getDateLong(date){
	return parseInt(new Date(date + " 00:00:00".replace(/-/g, "/")).getTime()/1000);
}

// 获取指定日期的时间戳 "2020-06-14 10:18:56" -> 1592101136
getDateTimeLong(dateTime){
	return parseInt(new Date(dateTime.replace(/-/g, "/")).getTime()/1000);
}

// 获取时间戳对应的日期  1592101136 -> "2020-06-14"
getDateStrFromLong(timeStamp){
	var d = new Date(timeStamp * 1000);
	return d.getFullYear() + "-" + (d.getMonth() + 1 >= 10?d.getMonth() + 1:"0"+(d.getMonth() + 1))
		 + "-" + (d.getDate() >= 10?d.getDate():"0"+(d.getDate()));
}

// 获取时间戳对应的时间字符串  1592101136 -> "2020-06-14 10:18:56"
getDateTimeStrFromLong(timeStamp){
	var d = new Date(timeStamp * 1000);
	return d.getFullYear() + "-" + (d.getMonth() + 1 >= 10?d.getMonth() + 1:"0"+(d.getMonth() + 1))
		 + "-" + (d.getDate() >= 10?d.getDate():"0"+(d.getDate())) + " " 
		 + (d.getHours() >= 10?d.getHours():"0"+(d.getHours())) + ":"
		 + (d.getMinutes() >= 10?d.getMinutes():"0"+(d.getMinutes())) + ":" 
		 + (d.getSeconds() >= 10?d.getSeconds():"0"+(d.getSeconds()));
}

// 获取前n天或后n天的日期 dayCount可为正[后n天]、负[前n天]整数
getBeforeAfterDate(dayCount){
	var timeStamp = parseInt(new Date().getTime()/1000) + 24*3600*dayCount;
	var d = new Date(timeStamp * 1000);
	return d.getFullYear() + "-" + (d.getMonth() + 1 >= 10?d.getMonth() + 1:"0"+(d.getMonth() + 1))
		 + "-" + (d.getDate() >= 10?d.getDate():"0"+(d.getDate()));
}

// 获取星期几  "2020-06-13" -> "星期六"
getWeek(dateStr){
	var arr = dateStr.split("-");
	var d = new Date(arr[0], parseInt(arr[1]-1), arr[2]);
	return "星期" + "日一二三四五六".charAt(d.getDay());
}
```

## 图片加载不到
* 问题描述：页面图片加载不到时用户体验不好。
* 解决方案：设置加载出错时显示默认图片。
``` html
<img src="${userImg}" onerror="this.onerror=null;this.src='此处给一个默认图片路径即可'">
```