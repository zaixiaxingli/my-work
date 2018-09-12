$(function(){
	var obj={
		width:"560px",
		height:'350px'
	}
	var obj1={
		width:"530px",
		height:'320px'
	}
	$('div.wor>div.abs>div.scrt>div.mg').mouseenter(function(){
		$(this).find('img').animate(obj,900)
	})
	$('div.wor>div.abs>div.scrt>div.mg').mouseleave(function(){
		$(this).find('img').animate(obj1,900)
	})
	$('div.wor>div.abs>div.scrt>span').mouseenter(function(){
		$(this).css('opacity','1')
	})
	$('div.wor>div.abs>div.scrt>span').mouseleave(function(){
		$(this).css('opacity','0.7')
	})
	$('div.wor>div.left>ul>li>a').mouseenter(function(){
		$(this).css('background','orange')
	})
	$('div.wor>div.left>ul>li>a').mouseleave(function(){
		$(this).css('background','#FFF')
	})
	var run={
		opacity:"1"
	}
	$(window).scroll(function(){
		var height = $('div>div.wrap>div.box>ul.one').height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=height){
			$('div.wor>div.abs>h2').animate(run,2000);
			$('div.wor>div.left').animate(run,1500);
		}
	})
})