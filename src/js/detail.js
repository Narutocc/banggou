$(function(){
	//商品分类，鼠标移进事件,显示一二级菜单（鼠标移出有bug）
	$('.select .selectes').mouseenter(function(){
		$('.select_all').fadeIn(500);
	})
	$('.select_all').mouseleave(function(){
		$('.select_all').fadeOut(400);
	})

	//鼠标移上“会员规则”显示内容
	var $huiyuan = $('.huiyuan');
	var $introduce = $('.introduce');
	$huiyuan.hover(
		function(){$introduce.show()},
		function(){$introduce.hide()}
	);

	//放大镜
	$('.bigImg').gdszoom();

	//点击当前小图显示对应图片
	var $bigImg = $('.bigImg').find('img');
	$('.samllImg ul li').find('img').on('click',function(){
		console.log($bigImg.attr('src'))
		console.log($(this).attr('src'))
		$bigImg.attr('src') = $(this).attr('src');
	})
})