$(function(){
	$('.product_list li').hover(function(){
		$(this).find('dl').css('display','block')
	},function(){
		$(this).find('dl').css('display','none')
	})
	
	            var timer = null;
				var imgShow = 0; //图片下标
				var imgCount =$('.server_banner_box a').length-1;
				
				function imgMove(){
					imgShow = imgShow < imgCount ? (imgShow  + 1): 0;
					changeImgShow();
				};
				
				//定时器
				timer=setInterval(imgMove,5000);
				$('.banner_bn span').mouseover(function(){
					imgShow=$(this).index();
					changeImgShow()
				})
				
				//图片与方块对应
				function changeImgShow(){
					$('.server_banner_box a').stop().animate({
						opacity: 0
					},1000);
					$('.server_banner_box a').eq(imgShow).stop().animate({
						opacity: 1
					}, 1000)
					$('server_banner_box a').css('display','none');
					$('.server_banner_box a').eq(imgShow).css('display','block')
					$('.banner_bn span').css('background-color','transparent');
					$('.banner_bn span').eq(imgShow).css('background-color','white')
				}
				
				
				//轮播暂停
				$('.server_banner_box a').mouseover(function(){
					clearInterval(timer);
				})  
				
				$('.server_banner_box a').mouseout(function(){
					timer=setInterval(imgMove,5000);
				}) 
})
