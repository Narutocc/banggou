define(['jquery'],function($){
	return{
		rocket:function(){
			//点击火箭回到顶部效果
			var $top = $('.slideBar .top');
			$(window).scroll(function(){
				if($(window).scrollTop() > 500){
					$top.fadeIn(500);
				}else{
					$top.fadeOut(500);
				}
			})
			$top.on('click',function(){
				$('body,html').animate({scrollTop:0},800);
			})
		}
	}
})
// $(function(){
// 	//点击火箭回到顶部效果
// 	var $top = $('.slideBar .top');
// 	$(window).scroll(function(){
// 		if($(window).scrollTop() > 500){
// 			$top.fadeIn(500);
// 		}else{
// 			$top.fadeOut(500);
// 		}
// 	})
// 	$top.on('click',function(){
// 		$('body,html').animate({scrollTop:0},800);
// 	})
// })