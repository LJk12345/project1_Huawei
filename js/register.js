$(function(){
	var phoneFlag=false;
	var messageFlag=false;
	var nextPasswordFlag=false;
	var passwordFlag=false;
	var password='';
	var emailFlag=false;
	var passShow=false;
	var year_list=false;
	var month_list=false;
	var data_list=false;
    $('.tips').hover(function(){
    	$(this).find('div').css('display','block');
    },function(){
    	$(this).find('div').css('display','none');
    })
    $('.content_left div').click(function(){
//  	$(this).siblings().css('background-color','white')
//		$(this).css('background-color','#F2F2F2')
//		console.log($(this).index())
    	if($(this).index()==0){
    		location.ass
//  		$('#form_me').css('display','none')
//  		$('#form_ph').css('display','block')
    	}else if($(this).index()==1){
    		$('#form_me').css('display','block')
    		$('#form_ph').css('display','none')
    	}
	})
    
    $('#form_meSubmit').click(function(){
    	console.log(2)
    })
     $('#form_phSubmitSubmit').click(function(){
    	console.log(1)
    })
     

     
//   边框变换

     $('form input').focus(function (){
     	if($(this).attr('flag') || $(this).val()==''){
     		$(this).parent('div').css('border',' 1px solid #80BEFF');
     		$(this).parent('div').next().css('display','none')
     	}     	
     })

      $('form input').keydown(function(){
     		$(this).parent('div').css('border',' 1px solid #80BEFF');
     		$(this).parent('div').next().css('display','none')
     	})
      
      $('form input').blur(function(){
     	$(this).parent('div').css('border',' 1px solid #F2F2F2')
     })
      
     
      
       $('#e-mail').focus(function(){
     	if(emailFlag || $(this).val()==''){
     		$(this).parent('div').css('border',' 1px solid #80BEFF')
     		$(this).parent('div').next().css('display','none')
     	}     	
     })
      
      $('#password').keydown(function(){
     		$('.passwordFormat').css('display','block')
     	})
      
//    密码眼
      $('.passShow').click(function(){
      	passShow=!passShow
      	if(passShow){
      		$(this).html('&#xe675;')
      		$(this).prev('input').attr('type','text');
      		
      	}else{
      		$(this).html('&#xe614;')
      		$(this).prev('input').attr('type','password')
      	}
      })
     
     
     
     
     
     
     
      
//    电话格式验证
      $('#phone').blur(function(){
      	var phoneReg=/^(\+?0?86\-?)?1[345789]\d{9}$/;
      	if($(this).val()!=''){
  	    if(phoneReg.test($(this).val()) ){
  	    	phoneFlag=true;
  	    	$(this).parent('div').css('border',' 1px solid #F2F2F2')
	     	$(this).parent('div').next().css('display','none')
	     	 $('.message span').css({
	     	 	cursor: 'pointer',
	     	 	opacity: 1
	     	 })
	  }else{
	  	  phoneFlag=false;
	  	  $(this).parent('div').css('border',' 1px solid red')
	      $(this).parent('div').next().css('display','block');
	       $('.message span').css({
	     	 	cursor: 'default',
	     	 	opacity: 0.7
	     	 })
	     }
      		}
      })
      
//    验证码验证
       $('#message').blur(function(){
      	var mess='a';
      	if($(this).val()!=''){
  	    if($(this).val()!=mess){
  	    	messageFlag=false;
  	    	$(this).parent('div').css('border',' 1px solid #F2F2F2');
	     	$(this).parent('div').next().css('display','none');
	     	$(this).parent('div').next().css('display','block');
	     	
	     	 
	  }else{
	  	  messageFlag=true;
	  	  $(this).parent('div').css('border',' 1px solid red')
	      $(this).parent('div').next().css('display','none');
	     }
      	}
      })
       
       
       

      
       
       
       
//     密码设置
        $('#password').blur(function(){
        
        var reg1=/.{8,}/g;
        var reg2=/\d+/g
        var reg3=/[A-z]+/g
        var reg4=/\s+/g 
        var reg1Flag=reg1.test($(this).val());
        var reg2Flag=reg2.test($(this).val());
        var reg3Flag=reg3.test($(this).val());
         var reg4Flag=reg4.test($(this).val());
        
          $('.passwordFormat').css('display','none')
           if($(this).val()!=''){
        if(reg1Flag){
        	 $('#reg1 i').css('color','rgb(65,206,72)')  
        }else{
        	$('#reg1 i').css('color','rgb(198,198,198)')  	
        }
        if(reg2Flag && reg3Flag ) {
               $('#reg2 i').css('color','rgb(65,206,72)')  	
        }else {
        	$('#reg2 i').css('color','rgb(198,198,198)')  	
        }
        
        if(reg1Flag && reg2Flag && reg3Flag && !reg4Flag ){
        	$(this).parent('div').next().css('display','none');
        	
        	password=$(this).val();
	        phoneFlag=true;
	        $('passwordFormat_title2 span').html('强')
	        $('#intensity').css('background-color','rgb(65,206,72)');
	        $(this).parent('div').css('border',' 1px solid #F2F2F2')
	        return false;
        }else if(!reg1Flag){
            $(this).parent('div').next().css('display','block')
	     	$(this).parent('div').next().html('&#xe645;至少包含8个字符')
        }else if(reg3Flag){
        	$(this).parent('div').next().css('display','block');
	        $(this).parent('div').next().html('&#xe645;不能包含空格')
        }else if(!reg2Flag || !reg3Flag){
        	$(this).parent('div').next().css('display','block');
	        $(this).parent('div').next().html('&#xe645;至少含字母和数字，不能包含空格')
        }
	    $(this).parent('div').css('border',' 1px solid red')
	    $('passwordFormat_title2 span').html('')
	    $('#intensity').css('background-color','rgb(198,198,198)');
	    phoneFlag=false;
	    }
      })
       
         
        
    $('#nextPassword').blur(function(){
      if($(this).val()!=''){
	    if($(this).val()==password){
	    	nextPasswordFlag=true;
	    	$(this).parent('div').css('border',' 1px solid #F2F2F2')
	     	$(this).parent('div').next().css('display','none')
	    }else{
	  	  phoneFlag=false;
	  	  $(this).parent('div').css('border',' 1px solid red')
	      $(this).parent('div').next().css('display','block');
	      $(this).parent('div').next().html('&#xe645;密码错误')
	     }
	    }
      })
       
       
       
//    邮箱验证
 $('#e-mail').blur(function(){
 	    var reg1=/.{4,80}/;
 	    var reg2=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
 	    var a=reg1.test($(this).val());
 	    var b=reg2.test($(this).val())    
 	     if($(this).val()!=''){
	    if(a){
	    	if(b){
	          emailFlag=true;
	    	  $(this).parent('div').css('border',' 1px solid #F2F2F2')
	     	  $(this).parent('div').next().css('display','none')
	     	   $('.message span').css({
	     	 	cursor: 'pointer',
	     	 	opacity: 1
	     	 })
	     	  return false;
	    	}else{
	    		$(this).parent('div').next().html('&#xe645; 邮箱格式不正确')
	    	}
	    }
	      $('.message span').css({
	     	 	cursor: 'default',
	     	 	opacity: 0.7
	     	 })
	  	  $(this).parent('div').css('border',' 1px solid red')
	      $(this).parent('div').next().css('display','block');
	      $(this).parent('div').next().html('&#xe645; 华为帐号限制在4~80 个字符')
	       phoneFlag=false;
	     }
      })
       
       for (var i=0;i<addressAnchor.length;i++) {
       	  $(`<li style='height:12px'>
       	  	  <a href=${'#'+addressAnchor[i]}>${addressAnchor[i]}</a>
       	  	</li>
       	  `).appendTo($('.anchor'));
       }
       
       
        
        
    for(var i=0;i<addressAnchor.length;i++){
    		$(`
    		    <h5 id=${addressAnchor[i]}>${addressAnchor[i]}</h5>
       	  `).appendTo($('.address_name'));
    	for(var j=0;j<addresList[i].name.length;j++){
    		$(`
       	  	    <li><span>${addresList[i].name[j]}</span></li>
       	  `).appendTo($('.address_name'));
    	}
    }
    
    $('.address span').click(function(){
    	addresList=!addresList;
    	if(addresList){
    		$('#addresList').css('display','block')
    	}else{
    		$('#addresList').css('display','none')
    	}
    })
    
    
    
    $('.address_name li').hover(function(){
       	$(this).css('background-color','rgb(229,242,255)')
       },function(){
       	 $(this).css('background-color','white')
       })
    
       $('.address_name li').click(function(){
       	
       	  $('.address_tpis').val($(this).find('span').html());
       	  
       })
       
       
       
//    年月日列表写入

//   出生日期初始化
     $('#year').val(new Date().getFullYear())
     $('#month').val(new Date().getMonth()+1);
     $('#data').val(new Date().getDate());



//    年
       for (var i=0;i<30;i++) {
       	   $(`
       	   	<li>${new Date().getFullYear()-i}</li>
       	   	`).appendTo($('.year_list'))
       }    
//      点击事件
        $('.year_list li').click(function(){
       	  $('#year').val($(this).html());
       	  
       })
        
       
       
//     月



        for (var i=1;i<=12;i++) {
       	   $(`<li>${i}</li>`).appendTo($('.month_list'))
       }
        
        //     点击事件
         $('.month_list li').click(function(){
       	  $('#month').val($(this).html());
       	   $('.data_list ').empty('li');
       	  getData1(Number($(this).html()));
       	  
       })
        
//      日

  
        getData1(new Date().getMonth()+1);
//    for (var i=1;i<=30;i++) {
//     	   $(`<li>${i}</li>`).appendTo($('.data_list'))
//      } 
      
//     
//     点击事件
     $('.data_list li').click(function(){
       	  $('#data').val($(this).html());
     })
     
     $('.birthday_choice li').eq(0).click(function(){
     	year_list=!year_list;
     	console.log(year_list)
     	if(year_list){
     			$('.year_list').css('display','block')
     	}else{
     		$('.year_list').css('display','none')
     	}
     
     })
        $('.birthday_choice li').eq(1).click(function(){
     	month_list=!month_list;
     	if(month_list){
     			$('.month_list').css('display','block')
     	}else{
     		$('.month_list').css('display','none')
     	}
     
     })
      $('.birthday_choice li').eq(2).click(function(){
     	data_list=!data_list;
     	if(data_list){
     			$('.data_list').css('display','block')
     	}else{
     		$('.data_list').css('display','none')
     	}
     
     })
     
        
       
})          
       function getData1(monthData){
       	  switch (monthData){
       	  	case 1:
       	  	case 3:
       	  	case 5:
       	  	case 7:
       	  	case 8:
       	  	case 10:
       	  	case 12:
       	  	    for (var i=1;i<=31;i++) {
       	            $(`<li>${i}</li>`).appendTo($('.data_list'))
                }
       	  		break;
       	    case 4:
       	    case 6:
       	    case 9:
       	    case 11:
       	        for (var i=1;i<=30;i++) {
       	         $(`<li>${i}</li>`).appendTo($('.data_list'))
                }
       	  		break;
       	  	default:
       	  	    for (var i=1;i<=29;i++) {
       	         $(`<li>${i}</li>`).appendTo($('.data_list'))
                }
       	  		break;
       	  }
       
      }
     
      
       
       
      
   
         
      
      
      
      

