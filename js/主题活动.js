$(function(){	
	var str={
		width:"377px",
		height:"259px",
		opacity:"1"
	}
	var str0={
		width:"370px",
		height:"230px",
		opacity:"1"
	}
	var str1={
		width:"337px",
		height:"219px",
		opacity:"0.5"
	}

	$('div>div.max>div.tex>ul.dan>li').mouseenter(function(){
		$(this).find('img').animate(str,800)
	})
	$('div>div.max>div.tex>ul.dan>li').mouseleave(function(){
		$(this).find('img').animate(str1,800)
	})
	$('div>div.max>div.tex>ul.dan>li>div>a').mouseenter(function(){
		$(this).css({'background':'#FFF','color':'#666'})
	})
	$('div>div.max>div.tex>ul.dan>li>div>a').mouseleave(function(){
		$(this).css({'background':'rgba(0,0,0,0)','color':'#FFF'})
	})
	$('div>div.max>div.over>ul>li:first-child').mouseenter(function(){
		$(this).css('background','orange')
	})
	$('div>div.max>div.over>ul>li:first-child').mouseleave(function(){
		$(this).css('background','#FFF')
	})
	$('div>div.max>div.over>ul>li:last-child').mouseenter(function(){
		$(this).css('background','orange')
	})
	$('div>div.max>div.over>ul>li:last-child').mouseleave(function(){
		$(this).css('background','#FFF')
	})
})