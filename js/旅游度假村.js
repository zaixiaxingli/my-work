$(function(){
		var obj1={
		width:"378px",
		height:'260px'
		}
	var obj2={
		width:"363px",
		height:'245px'
	}
	var obj3={
		width:"363px"
	}
	var obj4={
		width:"0px"
	}
	$('div>div.container>ul.first>li').mouseenter(function(){
		$('div>div.container>ul.first>li>div').stop(false,true)
		// $('div>div.container>ul.first>li>img').stop(true)
		$(this).find('img').animate(obj1,800)
		$(this).find('div').animate(obj3,500)
	})
	$('div>div.container>ul.first>li').mouseleave(function(){
		$(this).find('img').stop(true)
		$(this).find('div').stop(false,true)
		$(this).find('img').animate(obj2,800)
		$(this).find('div').animate(obj4,500)

	})
	$('div>div.product>ul.xs>li').click(function(){
		$(this).css('background','#77D1AD').siblings().css('background','#FFF');	
		$(this).find('a').css('color','#FFF').parent('li').siblings().find('a').css('color','#999')
		var index=$(this).index();
		
		if(index>0){
			var fun1={
				width:"278px",
				height:"338px"
			}
			$('div>div.product>ul.tabs>li').hide();
			$('div>div.product>ul.tabs').css({'width':'0px','height':'0px',})
			$('div>div.product>ul.tabs>li').eq(index-1).show()
			$('div>div.product>ul.tabs').animate(fun1,350)
		}else if(index==0){
			var fun={
				width:"1170px",
				height:"338px"
			}
			$('div>div.product>ul.tabs>li').show().css({'width':'278px','height':'338px','margin-left':'13px'});
			$('div>div.product>ul.tabs').css({'width':'0px','height':'0px','margin':'0 auto'})
			$('div>div.product>ul.tabs').animate(fun,350)
		}
	})	
	var run={
		width:"293px",
		height:"293px"
	}
	var run1={
		width:"278px",
		height:"278px"
	}
	$('div>ul.tabs>li').mouseenter(function(){
		$(this).find('img').css('opacity','1').animate(run,800)
	})
	$('div>ul.tabs>li').mouseleave(function(){
		$(this).find('img').css('opacity','0.6').animate(run1,800)
	})
	var run2={
		width:"278px",
		height:"278px"
	}
	var run3={
		width:"253px",
		height:"253px"
	}
	var fun2={
		height:"106px"
	}
	var fun3={
		height:"35px"
	}
	$('div>div.news>ul>li').mouseenter(function(){
		$('div>div.news>ul>li>div').stop(false,true)
		$(this).find('img').animate(run2,800)
		$(this).find('h5').css('color','#77D1AD')
		$(this).find('div').animate(fun2,700)
	})
	$('div>div.news>ul>li').mouseleave(function(){
		$('div>div.news>ul>li>div').stop(true)
		$(this).find('img').stop(true)
		$(this).find('img').animate(run3,800)
		$(this).find('h5').css('color','#6B6B8D')
		$(this).find('div').animate(fun3,700)
	})
	var fun={
		opacity:1,
		height:"42px"
	}
	var fun1={
		opacity:0,
		height:"0px"
	}
	$(window).scroll(function(){
		var height = $('div>div.wrap>div.box>ul.one').height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=height){
			$('div>div.container>h4').animate(fun,2000);
			$('div>div.container>p').animate(fun,2000);
		}
		if(scrollTop>700){
			$('div>div.product>h4').animate(fun,2000);
			$('div>div.product>p').animate(fun,2000);
		}
		if(scrollTop>1200){
			$('div>div.news>h4').animate(fun,2000);
			$('div>div.news>p').animate(fun,2000);
		}
	})
})