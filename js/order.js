$(function() {
	//	选中地址的下标
	var addressSelect = 0;

	var editObject = 0;
	//	记录提示信息
	var text = '';
	//	默认地址指向
	var identification = 0;
	//	地址添加/修改模式记录
	var pattern = 0;
	
    var reg1 = /^(\+?0?86\-?)?1[345789]\d{9}$/;
	var reg2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
	var Reg1 = false;
	var Reg2 = false;

	//	发票类型选择
	var selectInvoice = 0

	$('.addAddressTips ').click(function() {
		pattern = 1;
		$('.Popup').css('display', 'block');
		$('.addressPopup').css('display', 'block');
		$('.addressSelectShow').find('span').html('选择省-市-区-街道');
		$('.addressee').val('');
		$('.message').find('input').val('');
		$('.message').find('textarea').val('');
	})

	$('.in').focus(function() {
		$(this).css('border', '1px solid #A1A1A1');
		text = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	})
	$('.in').blur(function() {
		$(this).css('border', '1px solid #ccc')
		$(this).attr('placeholder', text);
	})

	//事件添加
	function fn1() {
		//点击替换地址边框样式

		$('.addressList').click(function() {
			$('.addressList').siblings().removeAttr('id');
			//	  	   addressSelect=$(this).index('.addressList');
			$(this).attr('id', 'default')
		})

		$('.addressList').hover(function() {
			$(this).find('.addressList_operation').css('display', 'block')
		}, function() {
			$(this).find('.addressList_operation').css('display', 'none')
		})

		//  默认地址修改
		$('.identificationBn').click(function() {
			var index = $(this).has().index('.addressList_operation');
			$('.addressList').find('.identification').remove();
			$('.addressList').find('.identificationBn').css('display', 'inline-block')
			$('.addressList').eq(index).find('.identificationBn').css('display', 'none')
			$(`<span class="identification">默认地址</span>`).appendTo($('.addressList').eq(index))
		})

		//删除地址
		$('.deleteAddress').click(function() {
			if($(this).index('.deleteAddress') != $('.addressList').length - 1) {
				$('.addressList').eq($(this).index('.deleteAddress')).next().attr('id', 'default')
			}
			$('.addressList').eq($(this).index('.deleteAddress')).remove();

		})

	}

	fn1()

	//添加地址
	$('.save').click(function() {
		Reg1 = reg1.test($('.ph1').val());
		
		if(Reg1 ) {
			if(pattern == 1) {
				$(`
     	    <ul class="addressList"> 
		        <li><span class="addressList_addressee">${$('.addressee').val()}</span><span class="addressList_phone">${$('.ph1').val()}</span></li>
			    <p><span class="region">${$('.addressSelectShow').find('span').html()}</span> <i>${$('textarea').val()}</i></p>
		        <div class="addressList_operation">
		    		<span class="edit" ><i style="color: #DC143C;">&#xe619;</i>编辑</span>
		         	<span class="deleteAddress"><i style='color: #DC143C;'>&#xe6f5;</i>删除</span>
		    		<span class="identificationBn"><i style='color: #DC143C;'>&#xe798;</i>设为默认</span>
		    	</div>
		    </ul>
     	`).insertBefore($('.createAddress'))
				fn1()
		} else if(pattern == 0) {
				
				$('.addressList_addressee').eq(editObject).html($('.addressee').val());
				$('.addressList_phone').eq(editObject).html($('.ph1').val());
				$('.region').eq(editObject).html($('.addressSelectShow').find('span').html());
				$('.region').eq(editObject).next().html($('.addressPopup').find('textarea').val());
			}
			$('.Popup').css('display', 'none');
		}
	})

	//地址填写手机格式验证
	$('.contactNumber').blur(function() {
		var index = $(this).index('.contactNumber');
		Reg1 = reg1.test($(this).val())
		Reg2 = reg2.test($(this).val())
		var tips1 = '请填写正确的11位手机号码，例如：13XXXXXXXXX';
		var tips2 = '请填写正确的备选号码，固话格式为区号-主机-分机号';
		if((Reg2 && Reg1) || $(this).val() == '') {
			$('.errorAlert').css('display', 'none');
		} else if(index == 0 && !Reg1) {
			$('.errorAlert').css('display', 'block');
			$('.errorAlert i').html(tips1)
		} else if(index == 1 && !Reg2) {
			$('.errorAlert').css('display', 'block');
			$('.errorAlert i').html(tips2)
		}
	})

	//  添加地址窗口关闭
	$('.close').click(function() {
		$('.Popup').css('display', 'none');
		$(this).parent().parent().css('display', 'none');
	})

	$('.edit').click(function() {
		pattern = 0;
		editObject = $(this).index('.edit');
		$('.Popup').css('display', 'block');
		$('.addressPopup').css('display', 'block');
		$('.addressee').val($('.addressList_addressee').eq(editObject).html());
		$('.ph1').val($('.addressList_phone').eq(editObject).html());
		$('.addressSelectShow').find('span').html($('.region').eq(editObject).html());
		$('.addressPopup').find('textarea').html($('.region').eq(editObject).next().html());
	})

	$('.createAddress').click(function() {
		pattern = 1;
		$('.Popup').css('display', 'block');
		$('.addressPopup').css('display', 'block');
		$('.addressSelectShow').find('span').html('选择省-市-区-街道');
		$('.addressee').val('');
		$('.message').find('input').val('');
		$('.message').find('textarea').val('');
	})

	//	地址信息填写框显示
	$('.addressSelectShow').click(function() {
		$('.select_box').css('display', 'block');
	})

	//	关闭地址选择按钮
	$('.select_box_bn').click(function() {
		$('.select_box').css('display', 'none');
	})

	//	弹出窗口移动
	$('.Popup h4').hover(function() {
		$(this).mousedown(function(e) {
			var e = e || window.event
			var mouse_addressLeft = e.clientX - $(this).offset().left;
			var mouse_addressTop = e.pageY - $(this).offset().top;
			var that = this;
			$(document).mousemove(function(e) {
				$(that).parent().css({
					left: e.clientX - mouse_addressLeft + 'px',
					top: e.clientY - mouse_addressTop + 'px'
				})
			})
		})
		$(this).mouseup(function() {
			$(document).off();
		})
	}, function() {

		$(document).off();

	})

	//	发票窗口弹出
	$('.invoice a').click(function() {
		$('.Popup').css('display', 'block');
		$('.invoiceInformation').css('display', 'block');
	})

	//	发票格式填写格式错误提醒
	$('.titleName').next().blur(function() {
		if($(this).val() == "") {
			$(this).next().css('display', 'block')

		} else {
			$(this).next().css('display', 'none')
		}
	})
	$("input[type='radio']").click(function() {
		$(this).siblings().removeAttr('checked');
		$(this).attr('checked', 'checked');
		if($(this).val() == "个人") {
			selectInvoice = 0;
			$('.personal_box').css('display', 'block');
			$('.company_box').css('display', 'none');
			$('.company').css('display', 'none');
		} else {
			selectInvoice = 1;
			$('.personal_box').css('display', 'none');
			$('.company_box').css('display', 'block');
			$('.company').css('display', 'inline-block');
		}
	})

	$('.determine').click(function() {
		if(selectInvoice == 0 && $('.personal').val() != "") {
			$('.invoice').find('i').html($('.personal').val())
			$('.invoiceInformation').css('display', 'none');
			$('.Popup').css('display', 'none');
		} else if(selectInvoice == 1 && $('.company').val() != "") {
			var reg = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/;
			if(reg.test($('.identificationNumber').val())) {
				$('.invoice').find('i').html($('.company').val())
				$('.invoiceInformation').css('display', 'none');
				$('.Popup').css('display', 'none');
			} else {
				$('.identificationNumber').next().css('display', 'block');
				$('.identificationNumber').next().html('&#xe67f;纳税人识别号为15，17，18，20，21位的数字或大写字母')
			}
		}
	})

	$('.label span').click(function() {
		$(this).siblings().removeClass('labelSelect')
		$(this).addClass('labelSelect')
		$('.electron_box').css('display', 'none');
		$('.special_box').css('display', 'block');
		if($(this).attr('id') == "a") {
			$('.coupon_box').css('display', "block")
			$('.exchange').css('display', "none")
		} else if($(this).attr('id') == "n") {
			$('.coupon_box').css('display', "none")
			$('.exchange').css('display', "block")
		}
	})

	$('.electron').click(function() {
		$('.electron_box').css('display', 'block');
		$('.special_box').css('display', 'none');
		$('.invoiceInformation_bottom').html(' <p>温馨提示：</p><p>1、订单签收24小时后即可在订单详情下载您的电子普通发票。</p><a href="#">什么是电子发票?</a><p>2、若发票开具后，您要同时更改发票的抬头和税号，需提供授权函，为了您的方便，请一次性填对发票信息，谢谢。</p>')
	})
	$('.special').click(function() {
		$('.electron_box').css('display', 'none');
		$('.special_box').css('display', 'block');
		$('.invoiceInformation_bottom').html('<span class="red">专票在订单签收后8-10个工作日开具并寄出，顺丰寄送，一般会在您订单完成后15个工作日内送达给您（如遇节假日稍有延迟）。</span>请注意查收；增值税专用发票收到后请妥善保存，如退货请一同寄回，如退货专票未能寄回，则需扣除相应的税点。')

	})

	$('.special_box input').blur(function() {
		if($(this).val() == "") {
			$(this).parent().next().css('display', 'block')
		} else {
			if($(this).attr('id') == 'identificationNumber') {
				var reg = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/
				reg.test($(this).val()) ? $(this).parent().next().css('display', 'none') : $(this).parent().next().css('display', 'block') && $(this).parent().next().html('&#xe67f;纳税人识别号为15，17，18，20，21位的数字或大写字母')
			} else {
				$(this).parent().next().css('display', 'none')
			}
		}
	})
	//	优惠券窗口弹出
	$('#coupon').click(function() {
		$('.Popup').css('display', "block");
		$('.coupon').css('display', "block");
		$('.elementName').next().val("");
		$('.exchange a').eq(1).css('opacity', 0.8);
		$('.exchange a').eq(1).off();
	})
	
	$('.exchange_erro_tips').prev().click(function(){
          var reg=/[\w]{5,6}/g
          if(reg.test($('.elementName').next().val())){
          	 $('.exchange_erro_tips').css('display','none')
          	 $('.exchange a').eq(1).css('opacity', 1);
          	  $('.exchange a').eq(1).click(function(){
          	  	  $('.Popup').css('display', 'none');
		          $(this).parent().parent().css('display', 'none');
          	  })
          }else{
          	console.log(1)
          	$('.exchange_erro_tips').css('display','block')
          	$('.exchange a').eq(1).css('opacity', 0.8);
          	$('.exchange a').eq(1).off()
          }
	})
	
//	积分规则弹窗
    $('.integral').click(function(){
    	$('.Popup').css('display', "block");
    	$('.integralRule').css('display','block');
    	$('.integralRule_box').css('display','block');
    	$('.petal_box').css('display','none');
    	$('.integralRule h4').html('-积分使用规则-')
    	
    })
//花瓣使用规则
     $('.petal').click(function(){
     	$('.Popup').css('display', "block");
    	$('.integralRule').css('display','block');
    	$('.integralRule_box').css('display','none');
    	$('.petal_box').css('display','block');
    	$('.integralRule h4').html('-花瓣使用规则-')
    })
     
     
     
 
})