$(function() {
	var listIndex = 0
	var sign = false;
	var listIndex = 0;
	for(var i = 0; i < product001.length; i++) {
		$(`
		        <li style='cursor: pointer;'>
		            <img src=${product001[i].img}/><span>${product001[i].name}</span>
		        </li>
	         `).appendTo($('.product_color'))
		if(i == 0) {
			$('.product_color li').eq(0).attr('style', 'border-color:#CA141D;');
		}
	}

	//	展示图片列表转换
	$('.product_color li').click(function() {
		listIndex = $(this).index();
		$(this).siblings().css('border-color', '#B8B8B8');
		$(this).css('border-color', '#CA141D');
		$('.listImgBox').empty();
		$('#selectColor').html(product001[listIndex].name + '/');
		for(var i = 0; i < product001[listIndex].showImgs.length; i++) {
			$(`
		       <li style="background-image: url(${product001[listIndex].showImgs[i]});"></li>
	        `).appendTo($('.listImgBox'))
		}
		$('.listImgBox li').mouseover(function() {
			$(this).siblings().css('border-color', 'white');
			$(this).css('border-color', '#CA141D');
		})
		$('.productShow').css('background-image', 'url(' + product001[listIndex].showImgs[0] + ')');
		$('.enlargeShow div').css('background-image', 'url(' + product001[listIndex].showImgs[0] + ')');

		$('.listImgBox li').click(function() {
			$('.productShow').css('background-image', 'url(' + product001[listIndex].showImgs[$(this).index()] + ')');
			$('.enlargeShow div').css('background-image', 'url(' + product001[listIndex].showImgs[$(this).index()] + ')');
		})
	})
		
		for(var i=0;i<territoryImg.length;i++){
		    $(`
		      <img src=${territoryImg[i]} />
		    `).appendTo($('#commodityDetails'))
		   
		}

	$('.guarantee li').hover(function() {
		$(this).find('dd').css('display', 'block');
		$(this).find('i').html('&#xe609;');
	}, function() {
		$(this).find('dd').css('display', 'none');
		$(this).find('i').html('&#xe60f;');
	})

	$('dd h5').hover(function() {
		$(this).find('a').css('display', 'inline-block');
	}, function() {
		$(this).find('a').css('display', 'none');
	})

	$('dd h5').find('input').click(function() {
		$(this).val(!$(this).val());
		if($(this).val()) {
			$('.guarantee li').eq($(this).attr('serverClass')).find('b').html($(this).next().html())
		}
	})

	$('.product_edition li').click(function() {
		$(this).siblings().css('border-color', '#B8B8B8');
		$(this).css('border-color', '#CA141D')
	})

	$('.setMeal li').click(function() {
		$(this).siblings().css('border-color', '#B8B8B8');
		$(this).css('border-color', '#CA141D')
	})

	$('#add').click(function() {
		var num = +$('#num').val() + 1;
		$('#num').val(num);
	})

	$('#reduce').click(function() {
		if(Number($('#num').val()) > 1) {
			var num = $('#num').val() - 1;
			$('#num').val(num);
		}
	})

	$('#num').blur(function() {
		var reg = /[1-9]/g
		if(!reg.test(Number($(this).val()))) {
			$(this).val(1)
		}
	})

	$('.productShow').hover(function() {
		$('.productShow div').mousemove(function(ev) {
			var e = ev || window.event;
			var oDivX = e.pageX - ($(this).height() + 1) / 2 - $('.productShow').offset().left;
			var oDivY = e.pageY - ($(this).width() + 1) / 2 - $('.productShow').offset().top;
			if(oDivX <= 0) {
				oDivX = 0;
			}
			if(oDivX >= 260) {
				oDivX = 260;
			}
			if(oDivY <= 0) {
				oDivY = 0
			}
			if(oDivY >= 260) {
				oDivY = 260
			}
			$(this).stop().animate({
				top: oDivY,
				left: oDivX
			}, 0, 'linear').animate({
				opacity: 0.6
			}, 100, 'linear')
			$('.enlargeShow').css('display', 'block')
			$('.enlargeShow').stop().animate({
				opacity: 1
			}, 100, 'linear')
			$('.enlargeShow div').stop().animate({
				left: -oDivX * 920 / 400,
				top: -oDivY * 920 / 400
			}, 0, 'linear')
		})
	}, function() {
		$('.productShow div').stop().animate({
			opacity: 0
		}, 100, 'linear')
		$('.enlargeShow').css('display', 'none')
	})

	$('#previous').click(function() {
		var left = $('.listImgBox').position().left
		left < 0 ? $('.listImgBox').stop().animate({
			left: left + 78 + 'px'
		}, 100, 'linear') : $('.listImgBox').css('left', 0)

	})

	$('#next').click(function() {
		var left = $('.listImgBox').position().left
		left > -234 ? $('.listImgBox').stop().animate({
			left: left - 78 + 'px'
		}, 100, 'linear') : $('.listImgBox').css('left', '-234px')
	})

	//	展示列表图
	$('.listImgBox li').mouseover(function() {
		$(this).siblings().css('border-color', 'white');
		$(this).css('border-color', '#CA141D');
	})

	$('.listImgBox li').click(function() {
		$('.productShow').css('background-image', 'url(' + product001[listIndex].showImgs[$(this).index()] + ')');
		$('.enlargeShow div').css('background-image', 'url(' + product001[listIndex].showImgs[$(this).index()] + ')');
	})

	$('.showHide span').click(function() {
		sign = !sign
		if(sign) {
			$(this).html('收起参数详情');
			$(this).removeClass('showBn');
			$(this).addClass('showBn1');
			$(`<p  class="packUp iconfont">&#xe609;</p>`).appendTo($('.showHide'));
			$('.specificationParameters').css('height', 'auto')
		} else {
			$(this).html('查看全部参数');
			$(this).removeClass('showBn1');
			$(this).addClass('showBn');
			$('.showHide').find('p').remove();
			$('.specificationParameters').css('height', '1560px')
		}
	})

	$(window).scroll(function() {
		console.log($(document).scrollTop())
		if($(document).scrollTop() >= $('#commodityDetails').offset().top){
			$('.labelCard').css({
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				margin: 'auto'
			})
			$('#top').css('display','block')
			
			$('.labelCard span').css({
				borderBottom: '2px solid white',
				color: '#A4A4A4'
			})
				if($(document).scrollTop() <$('.specificationParameters').offset().top-30){
			$('.labelCard span').eq(0).css({
				borderBottom: '2px solid #F24547',
				color: '#F24547'
			})}else if($(document).scrollTop() >=$('.specificationParameters').offset().top-30 && $(document).scrollTop() <$('.packaging').offset().top-100){
			$('.labelCard span').eq(1).css({
				borderBottom: '2px solid #F24547',
				color: '#F24547'
			})}
			else {
				$('.labelCard span').eq(2).css({
				borderBottom: '2px solid #F24547',
				color: '#F24547'
			   })
		    }
	   }else{
			$('.labelCard').css({
				position: 'relative',
			});
			$('#top').css('display','none');
			$('.labelCard span').css({
				borderBottom: '2px solid white',
				color: '#A4A4A4'
			})
			$('.labelCard span').eq(0).css({
				borderBottom: '2px solid #F24547',
				color: '#F24547'
			})

		}
	    
	})
	
	  $('.labelCard span').click(function(){
	  	var index= $(this).index()
	  	    $(this).siblings().css({
				borderBottom: '2px solid white',
				color: '#A4A4A4'
			})
			$(this).css({
				borderBottom: '2px solid #F24547',
				color: '#F24547'
			})
			if(index==0){
				$(window).scrollTop($('#commodityDetails').offset().top);
			}if(index==1){
				$(window).scrollTop($('.specificationParameters').offset().top-29);
			}if(index==2){
				$(window).scrollTop($('.packaging').offset().top-99);
			}
			
	  })
		
	
	
	
//	悬浮窗
$('.suspendedNav li').hover(function(){
	  $(this).find('div').css('display','block')
	  $(this).find('a').css('display','block')
},function(){
	 $(this).find('div').css('display','none')
	  $(this).find('a').css('display','none')
    }
)
    $('.suspendedNav li div,a').hover(function(){
	     $(this).find('i').css('color','rgb(247,247,247)')
     },function(){
     	$(this).find('i').css('color','white')
    })
    
     $('#top').click(function(){
     	 $(window).scrollTop(0)
     })
    
    $('.suspendedNav li').eq(0).find('span').click(function(){
	location.assign('../shoppingCart.html')
})
$('.suspendedNav li').eq(2).find('span').click(function(){
	location.assign('../service.html')
})
    
    
    $('#weixin').hover(function(){
    	$('.service-code-img').css('display','block')
    },function(){
    	 $('.service-code-img').hover(function(){
          	$('.service-code-img').css('display','block')
          },function(){
          	$('.service-code-img').css('display','none')
          })
    })

})