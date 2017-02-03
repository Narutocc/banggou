$(function(){
	// 所有图片改变透明度
	$('img').css('opacity','1')
		.hover(
			function(){
				$(this).animate({opacity:0.8},500);
			},
			function(){
				$(this).animate({opacity:1},500);
			}
		);

	//a标签改变透明度
	$('a').css('opacity','1')
		.hover(
			function(){
				$(this).animate({opacity:0.8},500);
			},
			function(){
				$(this).animate({opacity:1},500);
			}
		);

	//h4改变透明度
	$('.datalist .title h4').css('opacity','1')
		.hover(
			function(){
				$(this).animate({opacity:0.8},500);
			},
			function(){
				$(this).animate({opacity:1},500);
			}
		);


	//轮播效果插件
	//$('.banner').feicarousel();
	var $bigImg = $('.bigImg');
	var $bigLi = $bigImg.children();
	var len = $bigLi.length;
	var $bottom = $('.banner_bottom');
	var $btn = $('.btn');
	var $btnPrev = $('.btnPrev');
	var $btnNext = $('.btnNext');
	var index = 0;

	//自动轮播+鼠标移入移出
	$bigImg.on('mouseenter',function(){
		clearInterval($bigImg.timer);
		//$(this).animate({opacity:0.8},500);

	}).on('mouseleave',function(){
		$bigImg.timer = setInterval(function(){
			index++;
			showPic();
			//$(this).animate({opacity:1},500);
		},2000);
	}).trigger('mouseleave');

	//左右按钮，bug，本来应该先隐藏
	$btnPrev.on('click',function(){
		index--;
		showPic();
	});
	$btnNext.on('click',function(){
		index++;
		showPic();
	})

	//点击底部切换
	$bottom.on('click','li',function(){
		index = $(this).index();
		showPic();
	});

	showPic();

	function showPic(){
		if(index >= len){
			index = 0;
		}else if(index < 0){
			index = len - 1;
		}
		//大图动画
		$bigLi.eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});

		//对应底部添加class
		$bottom.children().removeClass('active').eq(index).addClass('active');
	}



	// 5张图片左右移动
	$('.lunbo .lunbo_right').on('click',function(){
		$('.brand ul').animate({left:-1200},1000);
	})
	$('.lunbo .lunbo_left').on('click',function(){ 
		$('.brand ul').animate({left:0},1000);
	})




	//男生馆tab标签切换，li切换有问题
	var $lis = $('.datalist .title_right li');
	$lis.on('click',function(){
		$lis.eq($(this).index()).addClass('active').siblings().removeClass('active');
		$('.pitures').eq($lis.index(this)).addClass('on').siblings().removeClass('on');
	})
})