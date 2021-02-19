 $(function(){
 	
    $('#weixin').hover(function(){
    	$('.service-code-img').css('display','block')
    },function(){
    	 $('.service-code-img').hover(function(){
          	$('.service-code-img').css('display','block')
          },function(){
          	$('.service-code-img').css('display','none')
          })
    }) 
    
//  导航栏
    $('.downList').hover(function() {
			$(this).css({
				color: 'crimson',
				background: 'white',
				cursor: 'pointer',
			})
			$(this).find('span').html('&#xe609;')
			$(this).find('.box').css('display', 'block')
		}, function() {
			$(this).css({
				color: '#999999',
				background: '#2E2828',
			})
			$(this).find('span').html('&#xe60f;')
			$(this).find('.box').css('display', 'none')
		})
		
		for(var i = 0; i <hotSearch.length; i++) {
			$(`<li >
			       	<a class="aaa" href='https://home.firefoxchina.cn/?from=extra_start'  target='_blank'>
			       	${hotSearch[i]['title']}
			       	</a>
			    </li>`).appendTo($('.hotSearch'))
		}
    
    
    
 //	悬浮窗
$('.suspendedNav li').hover(function(){
	  $(this).find('div').css('display','block')
	  $(this).find('a').css('display','block')
},function(){
	 $(this).find('div').css('display','none')
	  $(this).find('a').css('display','none')
    }
)

$('.suspendedNav li').eq(0).find('span').click(function(){
	location.assign('shoppingCart.html')
})
$('.suspendedNav li').eq(2).find('span').click(function(){
	location.assign('service.html')
})
    
    
    $('#top').click(function(){
     	 $(window).scrollTop(0)
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