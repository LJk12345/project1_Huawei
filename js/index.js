$(function() {
	var login = 1;
	if(login) {
		$('#shortcut_shoppingCart').find('i').html(num);
		$('.suspendedNav li').eq(0).find('p').html(num)
	}
	$('#search').focus(function() {
		if(!$(this).html()) {
			$('.search_box').css('border-color', '#DCDCDC');
			$('.recommend').css('display', 'none');
			$('.hotSearch').css('display', 'block');
		}

	})
	$('#search').blur(function() {
		if(!$(this).html()) {
			$('.search_box').css('border-color', '#F0F0F0');
			$('.recommend').css('display', 'block');
			$('.hotSearch').css('display', 'none');
		}
	})

	//商品列表数据
	for(var i = 0; i < kind.length; i++) {
		$(` <li>
                <a href=${kind[i].khtml}>${kind[i].title}</a>
                <div class="produce_list">
            	</div>
            </li>	
			`).appendTo($('.produce_class'))
	}
	
	for(var i = 0; i < 8; i++) {
		$(` 
			<a href="./product/HUAWEIMate40Pro.html">
                    <img src="img/newProduct1.png"/>
                    <span>世世代代</span>
            </a>
		`).appendTo($('.produce_list'))
	}
	

	//手机商品数据
	for(var i = 0; i < phone_list.length; i++) {
		$(`
        	<li >
				<a href="">
				<img src=${phone_list[i].img} />
				<p class="phone_name">${phone_list[i].name}</p>
				<p class="phone_discount">${phone_list[i].discount} </p>
				<p class="phone_price">${phone_list[i].price} </p>
			    </a>
			</li>
        `).appendTo($('.box1'))
		if(i == 3 || i == 8 || i == 13) {
			var index = i + 1;
			$('.box1 li').eq(index).css('margin', '0 0 10px 0')
		}
	}

	//智能穿戴数据
	for(var i = 0; i < smarTwear_list.length; i++) {
		$(`
        	<li >
				<a href="">
				<img src=${smarTwear_list[i].img} />
				<p class="phone_name">${smarTwear_list[i].name}</p>
				<p class="phone_discount">${smarTwear_list[i].discount} </p>
				<p class="phone_price">${smarTwear_list[i].price} </p>
			    </a>
			</li>
        `).appendTo($('.box2'))
		if(i == 2 || i == 7) {
			var index = i + 1;
			$('.box2 li').eq(index).css('margin', '0 0 10px 0')
		}
	}

//右侧跳转标签
	$('.label li').click(function() {
		var index = $(this).index();
		$(document).scrollTop($('.displayModule_List').eq(index).offset().top - 60);
	})

//窗口滚动事件
	$(window).scroll(function() {
		if($(document).scrollTop() < $('#phone').offset().top) {
			$('.label li').find('i').stop().animate({
				height: 0
			}, 100, 'linear');
			$('.label').stop().animate({
				right: -120
			}, 100, 'linear');
			$('.label li').css('color', '#999');
		}
		if($(document).scrollTop() >= $('#phone').offset().top && $(document).scrollTop() < $('#computer').offset().top) {
			$('.label').stop().animate({
				right: -10
			}, 100, 'linear')
			$('.label li').find('i').stop().animate({
				height: 0
			}, 100, 'linear');
			$('.label li').eq(0).find('i').stop().animate({
				height: 14
			}, 100, 'linear');
			$('.label li').css('color', '#999');
			$('.label li').eq(0).css('color', '#black');
		}
		if($(document).scrollTop() >= $('#computer').offset().top && $(document).scrollTop() < $('#flat').offset().top) {
			$('.label li').find('i').stop().animate({
				height: 0
			}, 100, 'linear');
			$('.label li').eq(1).find('i').stop().animate({
				height: 14
			}, 100, 'linear');
			$('.label li').css('color', '#999');
			$('.label li').eq(1).css('color', '#black');
		}
		if($(document).scrollTop() >= $('#flat').offset().top && $(document).scrollTop() < $('#smarTwear').offset().top) {
			$('.label li').find('i').stop().animate({
				height: 0
			}, 100, 'linear');
			$('.label li').eq(2).find('i').stop().animate({
				height: 14
			}, 100, 'linear');
			$('.label li').css('color', '#999');
			$('.label li').eq(2).css('color', '#black');
		}
		if($(document).scrollTop() >= $('#smarTwear').offset().top) {
			$('.label li').find('i').stop().animate({
				height: 0
			}, 100, 'linear');
			$('.label li').eq(3).find('i').stop().animate({
				height: 14
			}, 100, 'linear');
			$('.label li').css('color', '#999');
			$('.label li').eq(3).css('color', '#black');
		}
	})


	$('.produce_class li').hover(function() {
		$('.produce_list').css('display', 'none');
		$(this).find('.produce_list').css('display', 'block');
	}, function() {
		$(this).find('.produce_list').css('display', 'none');
	})

	//热销商品
	for(var i = 0; i < hotProduct.length; i++) {
		$(`
       			<a href=${hotProduct[i].htl} class="hotSale_right_product_box">
       			 <img src=${hotProduct[i].img}/>
              			    <p class="producName">${hotProduct[i].name}</p>
              			    <p class="desc">${hotProduct[i].desc}</p>
              			    <p class="price">¥${hotProduct[i].price}</p>
     			</a>
       	`).appendTo($('.hotSale_right '))
		if(hotProduct[i].title) {
			$(`
       		<p class="title">${hotProduct[i].title}</p>
       	`).appendTo($('.hotSale_right a')[i])
		}
	}

})