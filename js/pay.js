$(function() {
	var unselectedLableIndex=0;
	var lableIndex=0;
	var selectIndex=0;
	var showList=false;
	
	var time=new Date();
	
	var countDown_h='';
	var countDown_m=20;
	var countDown_s=5;
	
//	日期格式
	function formatTime(a){
	       	var year=a.getFullYear();
	       	var month=a.getMonth()+1;
	       	var date=a.getDate();
	       	var day=a.getDay();
	       	var h=a.getHours();
	       	var m=a.getMinutes();
	       	return year+"-"+month+"-"+date+" "+h+":"+m;
	    };
	
	$('.list_right ul').eq(1).find("li").eq(3).find("a").html(formatTime(time))
	var countDown=setInterval(function(){
		countDown_s--;
		if(countDown_m==0 && countDown_s==0){
			$('.list_right ul').eq(0).find("li").eq(1).find("b").html(countDown_m+"分"+countDown_s+"秒")
			clearInterval(countDown);
			$('.meto').css('display','block');
			var t=setTimeout(function(){
				location.replace("order.html")      
			},2000)
			return false
		}
		if(countDown_s<0){
			countDown_s=59;
			countDown_m=countDown_m-1;
		}
		
		$('.list_right ul').eq(0).find("li").eq(1).find("b").html(countDown_m+"分"+countDown_s+"秒")
	},1000)
       $('.tips p').click(function(){
       	  location.replace("order.html");
       })
	
//	写入选择项
	function setPay(obj) {
		for(var i = 0; i < obj.length; i++) {
			$(`
		<li><p></p><img src='${obj[i].img}'/></li>
	`).appendTo($('.paymentMethod ul'))
			if(obj[i].recommend) {
				$(`
		 <span>推荐</span>
		`).appendTo($('.paymentMethod ul').find("li").eq(i).find('p'))
			}
			if(obj[i].favouredPolicy) {
				$(`
		 <a href="#">${obj[i].favouredPolicy}</a>
		`).appendTo($('.paymentMethod ul').find("li").eq(i).find('p'))
			}
            if($('.paymentMethod ul').find("li").eq(i).attr('flag')){
            	
            }
		}
	}
//	修改选择项样式
	function querySelect(){
		$('.paymentMethod ul').find("li").css('borderColor', 'rgb(223,223,223)')
		$('.paymentMethod ul').find("li").eq(selectIndex).css('borderColor', '#CA151E');	
	}
//	支付方式确定
	function setclick(){
		$('.paymentMethod ul').find('li').click(function(){
			lableIndex=unselectedLableIndex;
			selectIndex=$(this).index();
			querySelect();
			getpaymentStatus();
		})
	}
	
//	支付状态获取
	function getpaymentStatus(){
		if(unselectedLableIndex!=2 && unselectedLableIndex!=3){
			$('.confirmButton i').css('display','none');
			$('.confirmButton span').css({background: '#CA151E' ,color:"white"})
		}else if( unselectedLableIndex!=lableIndex){
			$('.confirmButton span').css({background:'#999999' ,color:'#dcdcdc'});
			$('.confirmButton i').css('display','block');
		}else {
			$('.confirmButton i').css('display','none');
			$('.confirmButton span').css({background: '#CA151E' ,color:"white"})
		}
	}
	setPay(commonlyUsedPay);
	setclick()
	querySelect();
	getpaymentStatus();

	
//	支付模块选择
	$('.paymentMethod p').find('span').click(function() {
		$(this).siblings().removeAttr("id");
		$(this).attr('id', 'select');
		$('.paymentMethod ul').empty();
		unselectedLableIndex=$(this).index()
		if(unselectedLableIndex == 0) {
			setPay(commonlyUsedPay);
		}
		if(unselectedLableIndex == 1) {
			setPay(platformPayment);
		}
		if(unselectedLableIndex == 2) {
			setPay(installmentPayment);
		}
		if(unselectedLableIndex == 3) {
			setPay(eCurrencyPayment);
		}
		if(unselectedLableIndex==lableIndex){
			querySelect()
		}
		setclick();
		getpaymentStatus();
		
	})
	
//	订单信息查看
    $('.showListBn').click(function(){
    	   showList=!showList
    	if(showList){
    		$('.list_right ul').eq(0).find('li').find('span').find('e').css('display','none');
    	    $(".paymentMethod").stop().animate({top:0},500 ,"linear" );
    	    $(this).find('i').html('&#xe609;')
    	}else{
    	    $('.list_right ul').eq(0).find('li').find('span').find('e').css('display','inline')
    		$(".paymentMethod").stop().animate({top:-80},500 ,"linear" );
    	    $(this).find('i').html('&#xe60f;')
    	}
    
    })

})