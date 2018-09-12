$(function(){
	var num=0;
	var index;
	var timer=setInterval(run9,5000)

	function run9(){	
		if(num<2){
			num++; 
		}else{
			num=1;
			$('div.wrap>ul.img').css('left','0px');
		}
		var	obj = {
			left:-1349*num+'px'
		}
		$('div.wrap>ul.img').animate(obj,600);

		$('div.wrap>ul.four>li').eq(num-2).css('opacity','1').siblings().css('opacity','0.5')
		// if (num==2) {
		// 	$('div.wrap>ul.four>li').eq(0).css('opacity','1').siblings().css('opacity','0.5')
		// }	
	}

	$('div.wrap>ul.four>li').click(function(){
		$(this).css('opacity','1').siblings().css('opacity','0.5')
		index = $(this).index();
		num=index-1
		clearInterval(timer)
		run9();
		left=-1349*num+'px';
		timer = setInterval(run9,5000);
		$('div.wrap>ul.img').css('left',left)
	})
	$('div>div.wrap').mouseenter(function(){
		$('div>div.wrap>div.Le>p').show();
	})
	$('div>div.wrap').mouseleave(function(){
		$('div>div.wrap>div.Le>p').hide();
	})
	$('div>div.wrap>div.Le>p:first-child').click(function(){
		clearInterval(timer)
		console.log(num)
		if(num<=0){
			num=0;
			$('div.wrap>ul.img').css('left','-2698px');	
		}else{
			num-=2;
		}
		run9();
		timer = setInterval(run9,5000);
	})
	$('div>div.wrap>div.Le>p:last-child').click(function(){
		clearInterval(timer);
		$('div.wrap>ul.img').stop(true)
		run9();
		timer = setInterval(run9,5000); 
	})	
	 
	//鼠标移入
	$('div div.wrap div.box div.two ul.three li').mouseover(function(){
		$(this).children().eq(0).css('color','orange');	
		$(this).find('ul').show()
	})
	//鼠标移入
	$('div div.wrap div.box div.two ul.three li ul li').mouseover(function(){
		$(this).css('background','#FFF');
	})
	//鼠标移出
	$('div div.wrap div.box div.two ul.three li ul li').mouseout(function(){
		$(this).css('background','orange');
	})
	//鼠标移出
	$('div div.wrap div.box div.two ul.three li').mouseout(function(){
		$(this).find('a').css('color','#FFF')
		$(this).find('ul').hide();
	})
	var obj1 = {
		opacity:1,
		height:"42px"
	}
	$(window).scroll(function(){
		var height = $('div>div.wrap>div.box>ul.one').height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=height){
			$('div>div.wrap>div.box>div.two').css({'position':'fixed','top':'0px','background':'rgba(60,60,60,0.6)','border':'2px solid orange','z-index':'1'});
		}else{
			$('div>div.wrap>div.box>div.two').css({'position':'static','background':'rgba(255,255,255,0)','border':'0px'});
		}
	})
})