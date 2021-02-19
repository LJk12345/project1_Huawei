$(function(){
	var userFlag=false;
	var passwordFlag=false;
	var flag=false;
	var passShowFlag=false;
	var phoneFlag=false;
	var message=false;
	
	$('.form_centent_right_box').eq(1).css('display','none')
	$('.refreshQr h5').eq(1).css('display','none')
	
	
	$('.passShow').click(function(){
		flag=!flag;
		console.log(flag);
		if (flag) {
			$('#password').attr('type','text');
			$('.passShow').html('&#xe675;')
		}else{
			$('#password').attr('type','password');
			$('.passShow').html('&#xe614;')
		}
	})


$('#qq').click(function(){
	location.assign();
});
$('#zhi').click(function(){
	location.assign('');
});

$('#weixin').click(function(){
	location.assign();
});
//	账号验证
	$('#username').blur(function(){
		var userReg1=/\S+/g;
		var userReg2=/.{4,80}/g;
		var a=userReg1.test($(this).val())
		var b=userReg2.test($(this).val())
		if(a){
			if(b){
				 $('#username_tips').html('');
				 userFlag=true;
				 	$('#username').css('border-color','#F2F2F2');
				 	$('#username').css('outline-color','#80BEFF');
				 if(passwordFlag){
				 	$('#submit').css('opacity',1)
				 }
				 return false;
			}
			
		    $('#username').css('border-color','red');
		    $('#username').css('outline-color','red');
			 userFlag=false;
		   $('#username_tips').html('<span>&#xe645;</span>华为账号限制在4~80个字符');
		}else {
			 $('#username').css('border-color','red');
		    $('#username').css('outline-color','red');
			$('#username_tips').html('<span>&#xe645;</span>请输入您的账号');
			 userFlag=false;
		}
	})
	
	
	$('#password').blur(function(){
		var userReg1=/\S+/g;
		if(userReg1.test($(this).val())){
			   passwordFlag=true
			   if(passwordFlag){
				 	$('#submit').css('opacity',1)
	            }
		}else{
		    passwordFlag=false
		    
		}
		
		
	})
	
//	提交验证
$('form').submit(function(){
		return  userFlag ||passwordFlag
});

//二维码刷新
var timerFlag=true;
var i=0;
var timer=setInterval(getTimer(),60000);
function getTimer(){
	
	if(i<3){
		i++
	}else{
		clearInterval(timer);
		$('.refreshQr').css('display','block');
	}
}
	
function random(a, b) {
				if(a - b > 0) {
					var temp = a;
					a = b;
					b = temp;
				}
				return Math.round(Math.random() * (b - a))+ a;
		}

$('.refreshQr input').click(function(){
	      i=0;
	      timer=setInterval(getTimer,60000);
	      var num= random(1,5);
	      $('.qrCode').css('background-image','url(img/qr'+num+'.png)');
	      $('.refreshQr').css('display','none');
	     
})


//登录方式切换
$('#messLogin').click(function(){
	$('#h2_1').css('display','none')
	$('#h2_2').css('display','block')
	
	$('#form_centent_right_box1').css('display','none')
	$('#form_centent_right_box2').css('display','block')
	
	$('.login_list').css('display','none')
})


$('#pasLogin2').click(function(){
	$('#h2_2').css('display','none')
	$('#h2_1').css('display','block')
	
	$('#form_centent_right_box2').css('display','none')
	$('#form_centent_right_box1').css('display','block')
	
	$('.login_list').css('display','block')
})


     $('#phone').focus(function (){
     	
     	if(phoneFlag || $(this).val()==""){
     	   $('.phone').css('border-color','rgb(128,190,255)')
     	}
	    
})


 $('#phone').blur(function(){
  	  var phoneReg=/^(\+?0?86\-?)?1[345789]\d{9}$/;
  	if(phoneReg.test($(this).val()) || $(this).val()==""){
  			$('.phone').css('border-color','#F2F2F2')
	     	 $('#phone_tips').html('');
	     	 if($(this).val()!=''){
	     	 	 phoneFlag=true;
	     	 }
	  }else{
	     	$('#phone_tips').html('<span>&#xe645;</span>手机号格式不正确');
	     	$('.phone').css('border-color','red')
	     	 phoneFlag=false;
	     }
  })
 
 
  $('#message').blur(function(){
  	 
  	if($(this).val()=="a" || $(this).val()==''){
  		     $('#username').css('border-color','#F2F2F2');
		     $('#username').css('outline-color','#80BEFF');
	     	 $('#phone_tips').html('');
	     	 if($(this).val()!=''){
	     	 	 phoneFlag=true;
	     	 }
	  }else{
	  		$(this).css('border-color','red');
		    $(this).css('outline-color','red');
	     	$('#phone_tips').html('<span>&#xe645;</span>验证码错误');
	     	 phoneFlag=false;
	     }
  })

  
})