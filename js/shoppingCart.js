$(function() {
	var switch1 = false;
	var sum = 0;
	var productNum = 0;
	var flag = true;
	var productId = 0;
	var deleteType = 0;

	//订单列表数据写入
	function fn3() {
		if($('.list').length > 1) {
			$('.must').css('display', 'block')
		}
	}

	function setList(arr) {
		for(var i = 0; i < arr.length; i++) {
			$(`
        	<ul class="displayStatus_list">
			    <li style="text-align: left;line-height: 60px;color: #3A3A3A;display: flex; margin-right: 50px;">
				    <input class="listSelect" type="checkbox"  checked="checked"/>
				    <img src=${arr[i].img} />
			    </li>
			    <li style="width:385px;text-align: left;color: #3A3A3A;">
				     <span name="productName">${arr[i].name}</span>
				  
			    </li>
			    <li ><span class="unitPrice">¥<i>${arr[i].unitPrice}</i></span></li>
			    <li >
				    <input type="button" class="deleteNum"  value="一"/>
				    <input class="productNum" type="text"   value="${arr[i].productNum}" />
				    <input type="button" class="addrNum"   value="+"/>
			    </li>
			     	<li class="subtotal">¥ <i>${arr[i].subtotal}</i></li>
				    <li> <span class="singleDeletion">删除</span></li>
			    </ul>
		  	`).insertBefore($('.valuation'))
			if(productlist[i].tips) {
				$(`
		  			<p>${arr[i].tips}</p>
		  		`).appendTo($('.displayStatus_list').eq(i).find('li').eq(1))
			}
		}
	}
	setList(productlist)

	for(var i = 0; i < $('.listSelect').length; i++) {
		var num = Number($('.displayStatus_list').eq(i).find('.productNum').val());
		var subtotal = Number($('.displayStatus_list').eq(i).find('.subtotal i').html());
		sum = sum + subtotal
		productNum = num + productNum;
	}
	$('#money').html(sum.toFixed(2))
	$('#totalNum').html(productNum);
	$('.suspendedNav p').html(productNum);

	//	删除商品数据写入
	for(var i = 0; i < deleteList.length; i++) {
		$(`<ul class="list">
					<li style="width: 700px; text-align: left;">${deleteList[i].name}</li>
					<li><span>x<i class="deleteNum">${deleteList[i].productNum}</i></span></li>
					<li><span>¥<i class="deleteSubtotal">${deleteList[i].subtotal}</i></span></li>
					<li><p class="Repurchase">重新购买</p></li>
			    </ul>
		  	`).appendTo($('.deleteProduct'))
	}

	$('.previous').click(function() {
		var left = $('.products').position().left;
		left < 0 ? $('.products').stop().animate({
			left: left + 222 + 'px'
		}, 100, 'linear') : $('.products').css('left', 0)
	})

	$('.next').click(function() {
		var left = $('.products').position().left;

		left > -222 ? $('.products').stop().animate({
			left: left - 222 + 'px'
		}, 100, 'linear') : $('.products').css('left', '-222px')
	})

	$('.previous').mouseover(function() {
		var left = $('.products').position().left;
		left == 0 ? $(this).css('cursor', 'not-allowed') : $(this).css('cursor', 'pointer')
	})

	$('.next').mouseover(function() {
		var left = $('.products').position().left;
		left <= -222 ? $(this).css('cursor', 'not-allowed') : $(this).css('cursor', 'pointer')
	})

	// 商品数量控制加
	$('.addrNum').click(function() {
		var index = $(this).index('.addrNum');
		var num = +$(this).prev().val() + 1;
		productNum = productNum + 1;
		$(this).prev().val(num);
		$('.deleteNum').eq(index).css({
			cursor: 'pointer',
			color: '#3a3a3a'
		})
		var subtotal = (num * Number($('.unitPrice i').eq(index).html()));
		$('.subtotal i').eq(index).html(subtotal.toFixed(2))
		if($('.listSelect').eq(index).attr('checked')) {
			sum = sum + Number($('.unitPrice i').eq(index).html());
			$('#money').html(sum.toFixed(2))
			$('#totalNum').html(productNum)
			$('.suspendedNav p').html(productNum);
		}
	})

   	// 商品数量控制减
	$('.deleteNum').click(function() {
		var index = $(this).index('.deleteNum');
		if(Number($(this).next().val()) == 2) {
			$(this).css({
				cursor: 'not-allowed',
				color: '#a4a4a4'
			})
		}
		if(Number($(this).next().val()) > 1) {
			console.log("b" + sum)
			productNum = productNum - 1
			var num = $(this).next().val() - 1;
			$(this).next().val(num)
			var subtotal = (num * Number($('.unitPrice i').eq(index).html()));
			$('.subtotal i').eq(index).html(subtotal.toFixed(2))
			if($('.listSelect').eq(index).attr('checked')) {
				console.log("b" + sum)
				sum = sum - $('.unitPrice i').eq(index).html();
				$('#money').html(sum.toFixed(2))
				$('#totalNum').html(productNum);
				$('.suspendedNav p').html(productNum);
			}
		}
	})

	$('#productNum').blur(function() {
		var reg = /[1-9]/g
		if(!reg.test(Number($(this).val())) || $(this).val() == "") {
			$(this).val(1)
		}
	})

	function fn1() {
		//	显示更多删除
		$('.must a').click(function() {
			switch1 = !switch1
			if(switch1) {
				$(this).html('收起已删除商品<i>&#xe609;</i>');
				$('.deleteProduct').css('height', 'auto')
			} else {
				$(this).html('更多已删除商品<i>&#xe60f;</i>');
				$('.deleteProduct').css('height', '181px')
			}
		})

		$('.listSelect').click(function() {
			var index = $(this).index('.listSelect');
			sum = Number($('#money').html());
			if($(this).attr('checked')) {
				$(this).removeAttr('checked');
				$('.allSelect').prop('checked', false);
				sum = sum - $('.subtotal i').eq(index).html();
				productNum = productNum - $('.productNum').eq(index).val()
			} else {
				var flag = 0;
				$(this).attr('checked', 'checked');
				sum = sum + +$('.subtotal i').eq(index).html();
				console.log($('.subtotal i').eq(index).html());
				console.log("a" + sum);
				productNum = 0
				for(var i = 0; i < $('.listSelect').length; i++) {
					if($('.listSelect').eq(i).attr("checked"))
						productNum = productNum + Number($('.productNum').eq(i).val());
				}
				for(var i = 0; i < $('.listSelect').length; i++) {
					if($('.listSelect').eq(i).attr('checked')) {
						flag = flag + 1
					} else {
						flag = flag
					}
				}
				if(flag == $('.listSelect').length) {
					$('.allSelect').prop('checked', true);
					$('.allSelect').attr('checked', 'checked');
				}

			}
			$('#money').html(sum.toFixed(2))
			$('#totalNum').html(productNum)
			$('.suspendedNav p').html(productNum);
		})

		$('.allSelect').click(function() {
			if(!$(this).prop('checked') == true) {
				$('.allSelect').prop('checked', false)
				$('.listSelect').removeAttr('checked');
				sum = 0;
				$('#money').html(sum.toFixed(2))
				$('#totalNum').html(0)
				$('.suspendedNav p').css('display', 'none');

			} else {
				$('.allSelect').prop('checked', true);
				$('.listSelect').attr('checked', 'checked');
				$('.listSelect').prop('checked', true);
				sum = 0;
				for(var i = 0; i < $('.listSelect').length; i++) {
					var subtotal = Number($('.displayStatus_list').eq(i).find('.subtotal i').html());
					sum = sum + subtotal
				}
				$('#money').html(sum.toFixed(2));
				$('#totalNum').html(productNum)
				$('.suspendedNav p').html(productNum);
			}
		})

		$('.singleDeletion ').click(function(event) {
			deleteType = 0;
			productId = $(this).index('.singleDeletion');
			$('.deleteTips').css('display', 'block')
			var e = event || window.event
			var x = e.pageX - 260;
			var y = e.pageY - 130;
			$('.deleteTips').css({
				top: y,
				left: x
			})
		})
	}

	fn1();
	$('#batchDeletion').click(function(event) {
		$('.deleteTips p').html('您确定要删除勾选的商品吗？')
		deleteType = 1;
		$('.deleteTips').css('display', 'block')
		var e = event || window.event
		var x = e.pageX - 130;
		var y = e.pageY - 130;
		$('.deleteTips').css({
			top: y,
			left: x
		})
	})

	$('.yes').click(function() {
		var arr = [];
		if(deleteType) {

			for(var i = 0; i < $('.displayStatus_list').length; i++) {
				$('.listSelect').eq(i).attr('checked') ? arr.push(i) : ""
			}
			if($('.allSelect').prop('checked') == true) {
				sum = 0;
				productNum = 0;
				for(var i = 0; i < $('.displayStatus_list').length; i++) {
					sum = sum - $('.displayStatus_list').eq(i).find('.subtotal i').html();
					productNum = productNum - $('.displayStatus_list').eq(i).find('.productNum').val();
					$(`<ul class="list">
						<li style="width: 700px; text-align: left;">${$('.displayStatus_list').eq(i).find('li').eq(1).find('span').html()}</li>
						<li><span>x<i class="deleteNum">${$('.displayStatus_list').eq(i).find('li').eq(3).find('.productNum').val()}</i></span></li>
						<li><span>¥<i class="deleteSubtotal">${$('.displayStatus_list').eq(i).find('li').eq(4).find('i').html()}</i></span></li>
						<li><p class="Repurchase">重新购买</p></li>
					</ul>
		  	`).appendTo($('.deleteProduct'))

					deleteList.push(productlist[i])
					fn3();
					fn2();

				}
				$('.displayStatus_list').remove();
				$('.suspendedNav p').css('display', 'none');
			} else {
				for(var i = 0; i < arr.length; i++) {
					sum = sum - $('.displayStatus_list').eq(arr[i]).find('.subtotal i').html();
					productNum = productNum - $('.displayStatus_list').eq(arr[i]).find('.productNum').val();
					$(`<ul class="list">
						<li style="width: 700px; text-align: left;">${$('.displayStatus_list').eq(arr[i]).find('li').eq(1).find('span').html()}</li>
						<li><span>x<i class="deleteNum">${$('.displayStatus_list').eq(arr[i]).find('li').eq(3).find('.productNum').val()}</i></span></li>
						<li><span>¥<i class="deleteSubtotal">${$('.displayStatus_list').eq(arr[i]).find('li').eq(4).find('i').html()}</i></span></li>
						<li><p class="Repurchase">重新购买</p></li>
					</ul>
		  	`).appendTo($('.deleteProduct'))

					deleteList.push(productlist[arr[i]])
					fn3();
					fn2();
					$('.displayStatus_list').eq(arr[i]).remove()
				}
			}
			$('#money').html(sum.toFixed(2));
			$('#totalNum').html(productNum);
			$('.suspendedNav p').html(productNum);
		} else {
			sum = sum - $('.displayStatus_list').eq(productId).find('.subtotal i').html();
			$('#money').html(sum.toFixed(2))
			productNum = productNum - $('.displayStatus_list').eq(productId).find('.productNum').val();
			$('#totalNum').html(productNum);
			$('.suspendedNav p').html(productNum);
			$(`<ul class="list">
						<li style="width: 700px; text-align: left;">${$('.displayStatus_list').eq(productId).find('li').eq(1).find('span').html()}</li>
						<li><span>x<i class="deleteNum">${$('.displayStatus_list').eq(productId).find('li').eq(3).find('.productNum').val()}</i></span></li>
						<li><span>¥<i class="deleteSubtotal">${$('.displayStatus_list').eq(productId).find('li').eq(4).find('i').html()}</i></span></li>
						<li><p class="Repurchase">重新购买</p></li>
					</ul>
		`).appendTo($('.deleteProduct'))

			deleteList.push(productlist[productId])
			fn3();
			fn2();

			$('.displayStatus_list').eq(productId).remove()
		}
		if($('.displayStatus_list').length == 0) {
			$('.displayStatus').css('display', 'none');
			$('.emptyState').css('display', 'block')
		}
		$('.deleteTips').css('display', 'none');
	})

	$('.no').click(function() {
		$('.deleteTips').css('display', 'none')
	})

	//	重新购买
	function fn2() {
		$('.deleteProduct li').find('p').click(function() {

			var index = $(this).index('.Repurchase')
			productlist.push(deleteList[index])

			$(`
        	<ul class="displayStatus_list">
			    <li style="text-align: left;line-height: 60px;color: #3A3A3A;display: flex; margin-right: 50px;">
				    <input class="listSelect" type="checkbox"  checked="checked"/>
				    <img src=${deleteList[index].img} />
			    </li>
			    <li style="width:385px;text-align: left;color: #3A3A3A;">
				     <span name="productName">${deleteList[index].name}</span>
				  
			    </li>
			    <li ><span class="unitPrice">¥<i>${deleteList[index].unitPrice}</i></span></li>
			    <li >
				    <input type="button" class="deleteNum"  value="一"/>
				    <input class="productNum" type="text"   value="${deleteList[index].productNum}" />
				    <input type="button" class="addrNum"   value="+"/>
			    </li>
			     	<li class="subtotal">¥ <i>${deleteList[index].subtotal}</i></li>
				    <li> <span class="singleDeletion">删除</span></li>
			    </ul>
		  	`).insertBefore($('.valuation'))
			if(productlist[i].tips) {
				$(`
		  			<p>${deleteList[index].tips}</p>
		  		`).appendTo($('.displayStatus_list').eq(i).find('li').eq(1))
			}
			productNum = +$('.list').eq(index).find('.deleteNum').html() + productNum
			sum = +$('.list').eq(index).find('.deleteSubtotal').html() + sum

			$('#money').html(sum.toFixed(2));
			$('#totalNum').html(productNum);
			$('.suspendedNav p').html(productNum);
			$('.list').eq(index).remove()
			if($('.list').length <= 1) {
				$('.must').css('display', 'none');
			}
			fn1();

		})
	}
	fn2();

})