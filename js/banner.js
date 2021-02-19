 $(function(){
        for (var i=0;i<recommendation.length;i++) {
        	$(`
        			<a  href=${recommendation[i].htl}>
            			<div class="recommendation_box1">
             			    <img src=${recommendation[i].img} />
            			    <p class="recommendation_desc">${recommendation[i].desc} </p>
             			</div>
              			<p class="recommendation_name">${recommendation[i].name}</p>
             			<p class="price">${recommendation[i].price}</p>
            		</a>
        	`).appendTo($('.recommendation_box'))
        	if (recommendation[i].title) {
            $(`
         		<span>${recommendation[i].title}</span>
         	`).appendTo($('.recommendation a .recommendation_box1')[i])
         	}
        }              
             

				var mainBannerTimer = null;
				var mainBannerShow = 0; //图片下标
				var mainBannerImgCount =$('.bannerImg a').length-1;
				
				//下标加器
				function mainBannerImgMove(){
					mainBannerShow = mainBannerShow < mainBannerImgCount ? (mainBannerShow  + 1): 0;
					mainBannerChangeImgShow();
				};
				
				//主定时器
				mainBannerTimer=setInterval(mainBannerImgMove,5000);
				$('.banner_bn li').mouseover(function(){
					mainBannerShow=$(this).index();
					mainBannerChangeImgShow()
				})
				
				//主轮播图按钮图片对应
				function mainBannerChangeImgShow(){
					$('.bannerImg a').stop().animate({
						opacity: 0
					},1000);
					$('.bannerImg a').eq(mainBannerShow).stop().animate({
						opacity: 1
					}, 1000)
					$('.bannerImg a').css('display','none');
					$('.bannerImg a').eq(mainBannerShow).css('display','block')
					$('.banner_bn li').css('background-color','transparent');
					$('.banner_bn li').eq(mainBannerShow).css('background-color','white')
				}

				
				
				
				var banner1Timer = null;
				var banner1Show = 0; //图片下标
				var banner1ImgCount =$('.banner1 a').length-1;
				
				 function banner1ImgMove(){
					banner1Show = banner1Show < banner1ImgCount ? (banner1Show  + 1): 0;
					banner1ChangeImgShow();
				};
				//定时器
				banner1Timer=setInterval(banner1ImgMove,5000);
				
				$('.banner1_bn li').mouseover(function(){
					banner1Show=$(this).index();
					banner1ChangeImgShow();
					 
				})
				
				
				//轮播暂停
				$('.banner1 a').mouseover(function(){
					clearInterval(banner1Timer);
				})  
				$('.banner1 a').mouseout(function(){
					timer=setInterval(banner1ImgMove,5000);
				}) 				
				//图片与方块对应
				function banner1ChangeImgShow(){
					$('.banner1 a').stop().animate({
						opacity: 0
					},1000);
					$('.banner1 a').eq(banner1Show).stop().animate({
						opacity: 1
					}, 1000)
					$('.banner1 a').css('display','none');
					$('.banner1 a').eq(banner1Show).css('display','block')
					$('.banner1_bn li').css('background-color','transparent');
					$('.banner1_bn li').eq(banner1Show).css('background-color','white')
				}
 })
 