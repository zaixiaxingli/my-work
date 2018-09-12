$(function(){	
	var str={
		width:"377px",
		height:"259px",
		opacity:"1"
	}
	var str2={
		width:"340px",
		height:"230px",
		opacity:"0.5"	
	}
	var str0={
		width:"370px",
		height:"230px",
		opacity:"1"
	}
	var str3={
		width:"340px",
		height:"200px",
		opacity:"0.7"	
	}
	$('div>div.jiu>ul.j1>li').mouseenter(function(){
		$(this).find('img').animate(str,800)
	})
	$('div>div.jiu>ul.j1>li').mouseleave(function(){
		$(this).find('img').animate(str2,800)
	})

	$('div>div.yue>ul.yi>li>a:first-child').mouseenter(function(){
		$(this).find('img').animate(str0,800)
	})
	$('div>div.yue>ul.yi>li>a:first-child').mouseleave(function(){
		$(this).find('img').animate(str3,800)
	})
	var see={
		width:"380px",
		height:"221px"
	}
	var see1={
		width:"350px",
		height:"191px"
	}
	var see2={
		width:"380px",
		height:"260px"
	}
	var see3={
		width:"350px",
		height:"230px"
	}
	$('div>div.done>div.ten>ul>li').mouseenter(function(){
		$(this).find('img').animate(see,800)
	})
	$('div>div.done>div.ten>ul>li').mouseleave(function(){
		$(this).find('img').animate(see1,800)
	})
	$('div>div.ill>div.tab>ul>li>div').mouseenter(function(){
		$(this).find('img').animate(see2,800)
	})
	$('div>div.ill>div.tab>ul>li>div').mouseleave(function(){
		$(this).find('img').animate(see3,800)
	})
	$('div>div.yue>ul.ym>li').not('div>div.yue>ul.ym>li.one').mouseenter(function(){
		$(this).css('background','orange')
	})
	$('div>div.yue>ul.ym>li').not('div>div.yue>ul.ym>li.one').mouseleave(function(){
		$(this).css('background','#FFF')
	})
})