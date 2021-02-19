$(function(){
	$('.suspendedNav li').eq(0).find('p').html(num)
	var page=0
	for(var i=0;i<handset.length;i++){
		$(`
	        <li><a href="#">
				    <img  src="${handset[i].img}"/>
				    <div class="message">
				            <p class="name">${handset[i].name}</p>
				            <p class="price"><span class="money">¥${handset[i].money}起</span><b>${handset[i].optional}</b></p>
				            <p class="favouredPolicy"><span>${handset[i].favouredPolicy[0]}</span><span>${handset[i].favouredPolicy[1]}</span></p>
				            <p class="favorableComments"><span class="evaluators">${handset[i].favorableComments}人评价</span><span class="praise ">${handset[i].praise}好评</span></p>
				    </div>
				</a>
			</li>
		`).appendTo($('.product_box'))
		if(handset[i].title){
			$(`<span class="title">${handset[i].title}</span>`).appendTo($('.product_box li').find('a')[i]);
		}
	}
	
	$('.moreoPtions li').hover(function(){
		  $(this).find('.option').css('display','block')
		  $(this).find('b').css('borderBottom',0)
	},function(){
		 $(this).find('.option').css('display','none')
		$(this).find('b').css('borderBottom','1px solid #A1A1A1')
	})
	
	$('.sort li').click(function(){
		$(this).siblings().css('color','#333');
		$(this).css('color','#CA151E')
	})
	
	var a=false;
	$('input').change(function(){
		$(this).next().css('color','#333')
		$(this).next().css('color','#CA151E')
	})
	
	$('.pages a').click(function(){
		$(this).siblings('a').css('color','#333');
		$(this).css('color','#CA151E')
		page=0;
	})
	
	$('#first_page').click(function(){
		if(page!=0){
			page=0
		    $('.pages a').css('color','#333');
		    $('.pages a').eq(0).css('color','#CA151E');
		}
	
	})
		
	$('#previous_page').click(function(){
		if(page!=0){
			page=page-1
			$('.pages a').css('color','#333');
		    $('.pages a').eq(page).css('color','#CA151E');
		}
		
	})
	
	$('#next_page').click(function(){
		if(page<$('.pages a').length){
			 page=page+1
			$('.pages a').css('color','#333');
		    $('.pages a').eq(page).css('color','#CA151E');
		}
	})
	$('#last_page').click(function(){
		if(page!=$('.pages a').length){
			page=$('.pages a').length-1
			$('.pages a').css('color','#333');
		    $('.pages a').eq(page).css('color','#CA151E');
		}
	})
    
    $('.priceSort i').click(function(){
    	$(this).siblings().css('color','#333')
    	$(this).css('color','#CA151E')
    })
    
    $('#up').click(function(){
    	var arr=[];
    	var arr1=[];
    	for (var i=0;i<handset.length;i++) {
    		arr.push(handset[i].money)
    	}
    	
    	arr.sort(function (a,b){ return a-b;})
    	console.log(arr)
    	for (var i=0;i<handset.length;i++){
    		for (var j=0;j<handset.length;j++) {
    			if(handset[j].money==arr[i]){
    				arr1.push(j);
    			}
    		}
    	}
    
    	$('.product_box').empty();
    	rewrite(arr1);
    
    })
    
     $('#down').click(function(){
    	var arr=[];
    	var arr1=[];
    	for (var i=0;i<handset.length;i++) {
    		arr.push(handset[i].money)
    	}
    	
    	arr.sort(function (a,b){ return b-a;})
    	console.log(arr)
    	for (var i=0;i<handset.length;i++){
    		for (var j=0;j<handset.length;j++) {
    			if(handset[j].money==arr[i]){
    				arr1.push(j);
    			}
    		}
    	}
    
    	$('.product_box').empty();
    	rewrite(arr1);
    	
    })
    
    
    function rewrite(arr1){
    	 for(var i=0;i<handset.length;i++){
		$(`
	        <li><a href="#">
				    <img  src="${handset[arr1[i]].img}"/>
				    <div class="message">
				            <p class="name">${handset[arr1[i]].name}</p>
				            <p class="price"><span class="money">¥${handset[arr1[i]].money}起</span><b>${handset[arr1[i]].optional}</b></p>
				            <p class="favouredPolicy"><span>${handset[arr1[i]].favouredPolicy[0]}</span><span>${handset[arr1[i]].favouredPolicy[1]}</span></p>
				            <p class="favorableComments"><span class="evaluators">${handset[arr1[i]].favorableComments}人评价</span><span class="praise ">${handset[arr1[i]].praise}好评</span></p>
				    </div>
				</a>
			</li>
		`).appendTo($('.product_box'))
		if(handset[i].title){
			$(`<span class="title">${handset[arr1[i]].title}</span>`).appendTo($('.product_box li').find('a')[i]);
		}
	}
    }
   
    
})
