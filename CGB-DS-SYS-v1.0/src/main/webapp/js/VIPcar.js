$(function  () {
	list_conmmen () ;
	debugger;
	var url="http://localhost/CGB-DS-SYS-v1.0/doPageUI.do";
	$(".page").load(url,function(){doGetIndents();});
	$("#right").click(function(){delIndent(s)});
	
//	$(".page-normal").on("click",".first,.page-pre,.page-next",doJumpToPage)
	
	
	$("#del").click(function(){delIndent()}); 
	//全选/反选
	
	
	

	$(".check_all").click(function () {
		//获取当前选框选中状态
		var check=$(this).prop("checked");
		//console.log(check)
		//给其他选框同步选中状态
		$(".check_min").prop("checked",check);
		$(".check_all").prop("checked",check);

		list_conmmen () ;
	})
	//点击单行商品选中事件绑定	
	$(".check_min").click(function () {

		var check_all=0;
		var check_new=0;
		$(".check_min").each(function () {
			check_all++
			var check=$(this).prop("checked");
			if (check==true) {
				check_new++;
			}
		})
		if (check_all==check_new) {
			$(".check_min").prop("checked","checked");
			$(".check_all").prop("checked","checked");
		}else{
			$(".check_all").prop("checked","");
		}
		list_conmmen () ;
	}) 
//	封装  商品数量 已选商品数量    总价
	function list_conmmen () {
		var  num=0;
		var  num_two=0;
		var  price_box=0;

		$(".shopCon").each(function  () {
			//获取商品总量
			num++;
			var check_min=$(this).find(".check_min").prop("checked");
			if (check_min==true) {

				//已选商品数量
				num_two++;
				//已选商品总价
				var price=parseFloat($(this).find(".price_min").text());
				price_box+=price;
				//console.log(price_box)


			}
		})
		$(".misg .num_button").text(num);
		$("#mun_t .num_button").text(num_two);
		$(".indentR_box span").text(price_box.toFixed(2));


	}
	function doGetIndents(){
		var url="http://localhost/CGB-DS-SYS-v1.0/indent/doGetIndents.do";
		var pageCurrent=$(".page-normal").data("page-current");
		var params={"pageCurrent":1,"userId":2};
		$.getJSON(url,params,function(result){//jsonResult
			console.log("result",result);
			creat(result.data.records);
			doSetPagination(result.data);
		
		});
	}
	
	function doSetPagination(pageObject){
		
		//1.页面上呈现分页信息
		  $(".page-count").html("总页数("+pageObject.pageCount+")");
		  $(".page-current").html("当前页("+pageObject.pageCurrent+")");
		  $(".page-normal").data("page-current",pageObject.pageCurrent);
		  alert($(".page-normal").data("page-current"));
		  $(".page-normal").data("page-count",pageObject.pageCount);
		  
	  }
	  function doJumpToPage(){
		  //1.修改当前页页码值
		  //1.1获取当前的页码值以及总页数
		  var pageCurrent=$(".page-normal").data("page-current");
		  alert("pageCurrent:"+pageCurrent)
		  var pageCount=$(".page-normal").data("page-count");
		  //1.2基于点击的元素修改页码值
		  //1.2.1获取class属性的值,$(this)表示被点击的对象
		  var cls=$(this).prop("class");
		  //1.2.2基于cls判定点击的哪个对象
		  if(cls=="first"){
			  pageCurrent=1;
		  }else if(cls=="page-next"&&pageCurrent<pageCount){
			  pageCurrent++;
		  }else if(cls=="page-pre"&&pageCurrent>1){
			  pageCurrent--;
		  }else if(cls=="last"){
			  pageCurrent=pageCount;
		  }else{
			  return;
		  }
		  //2.基于新的页码,执行下次查询
		  //2.1存储新的页码值
		  $(".page-normal").data("page-current",pageCurrent);
		  alert($(".page-normal").data("page-current"))
		  //2.2基于新页码值执行查询
		  doGetIndents();
	  }
	
	function delIndent(){
		var url="http://localhost/CGB-DS-SYS-v1.0/indent/doDelIndent.do";
		//获取div中的goodsId
		var sb = document.getElementById("right");
		sb.write(sb);
		alert(sb);
		var params={"goodsId":goodsId}//商品编号
		alert(goodsId);
		$.getJSON(url,params,function(result){//jsonResult
			console.log(result.data.records);
			doGetIndents();
			
		});
		

	}

	function creat(records){
		//清除loadIndent的内容
		for (var i in records)
		{	
			var row = records[i];
			var div = document.createElement('div');
			//设置div的属性
			div.innerHTML = "<div class='shopCon border_top clear'><div class='shopConMin clear '>" +
			"<div><p align='center'>"+row.goodsId+"</p></div>"+
			"<div class='shopConMin_img'><p><img src='"+row.url+"'/></p>" +
			"</div><p>"+row.goodsName+"</p>" +
			"<p>"+row.price+"</p>"+
			"<div class='pingjia left'><p>交易成功</p>" +
			"<a id='right'>删除</a>"
			"</div></div></div></div>";
			var bo = document.getElementById("shopbody");//获取shopbody对象.
			//动态插入到body中
			bo.insertBefore(div,bo.lastChild);
		}


	}	

});


