// 加载模块
requirejs(['config'],function(){
	requirejs(['jquery','common'],function($,common){
		//保持登录状态在首页
		$.post('php/usenameMasgse.php', function(res) {
			var $obj = eval('(' + res + ')');
			if($obj.state) {
				// console.log(111)
				$('.change').empty();
				$('.change').html('欢迎您,' + $obj.clientName + '<a class="logoutA" href="">退出</a>').appendTo($('.firstMenu'));
				console.log($('.change'))

			}

			$('.logoutA').on('click', function() {
				$.post('php/logout.php', function(res) {
					window.location.reload();
				})
			})
		})
		$(function(){
			// 所有图片改变透明度
			$('img').css('opacity',1)
				.hover(
					function(){
						$(this).stop().animate({opacity:0.8},500);
					},
					function(){
						$(this).stop().animate({opacity:1},500);
					}
				);

			//a标签改变透明度
			$('a').css('opacity','1')
				.hover(
					function(){
						$(this).stop().animate({opacity:0.8},500);
					},
					function(){
						$(this).stop().animate({opacity:1},500);
					}
				);

			//h4改变透明度
			$('.datalist .title h4').css('opacity','1')
				.hover(
					function(){
						$(this).stop().animate({opacity:0.8},500);
					},
					function(){
						$(this).stop().animate({opacity:1},500);
					}
				);


			//轮播效果
			//$('.banner').feicarousel();
			var $banner = $('.banner');
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
				$(this).animate({opacity:0.8},500);
			}).on('mouseleave',function(){
				$(this).animate({opacity:1},500);
				$bigImg.timer = setInterval(function(){
					index++;
					showPic();
				},2000);
			}).trigger('mouseleave');

			$banner.on('mouseenter',function(){
				$btn.show();
			})

			$banner.on('mouseleave',function(){
				$btn.hide();
			})

			$btnPrev.on('click',function(){
				clearInterval($bigImg.timer);
				index--;
				showPic();
			});
			$btnNext.on('click',function(){
				clearInterval($bigImg.timer);
				index++;
				showPic();
			})

			//点击底部切换
			$bottom.on('click','li',function(){
				clearInterval($bigImg.timer);
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




			//男生馆tab标签切换
			var $lis = $('.datalist .title_right li');
			$lis.on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				$('.pitures').eq($lis.index(this)).addClass('on').siblings().removeClass('on');
			})

			common.rocket()
		})
	})
})
