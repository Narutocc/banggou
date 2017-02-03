$(function(){
	//商品分类，鼠标移进事件,显示一二级菜单（鼠标移出有bug）
	$('.select .selectes').mouseenter(function(){
		$('.select_all').fadeIn(500);
	})
	$('.select_all').mouseleave(function(){
		$('.select_all').fadeOut(400);
	})

	//点击“分类”的二三级菜单,第三级菜单不显示，更改图标未做
	var $lis = $('.classify_left .add').children();
	var timer;
	$lis.click(function(){
		var $add1 = $(this).children('ul');
		if($add1.is(':visible')){
			timer = setTimeout(function(){
				$add1.hide();
			}.bind(this),300)
		}else{
			clearTimeout(timer);
			$(this).siblings().children('ul').hide();
			$add1.show();
		}
	})
	
	//品牌点击“更多”显示,后面小图标有bug
	var $more = $('.classifies .more');
	var $more1 = $more.children('.more1');
	var $more2 = $more.children('.more2');
	$more.on('click',function(){
		var $morePinpai = $('.morePinpai');
		if($morePinpai.is(':visible')){
			$morePinpai.fadeOut();
			$more.html('更多');
			$more1.show();
		}else{
			$morePinpai.fadeIn();
			$more.html('收起').children('em');
			$more2.show();
		}
	})

	//高级筛选，鼠标移进移出事件（设置了延时器还是有bug）
	var timer;
	$('.gaojiAll').find('div').on('mouseenter',function(){
		clearTimeout(timer);
		var $places = $('.places').eq($(this).index());
		$places.slideDown().siblings('.places').slideUp();
		$(this).children('em').slideUp().children('span').slideDown();
	}).on('mouseleave',function(){
		timer = setTimeout(function(){
			var $places = $('.places').eq($(this).index());
			$places.slideUp();
			$(this).children('em').slideDown().children('span').slideUp();
		}.bind(this),300);
	})

	$.post('list.php',function(response){
		// console.log(response);
		var res = JSON.parse(response);
		console.log(res);



		$('<ul/>').addClass('picList clear').appendTo($('.pic'));

		for(var i=0;i<res.length;i++){
			$('<li/>').addClass('data');
			$('.data').html(
				'<a href="#" class="bigImg"><img src="'+ res[i].bigImg +'" alt=""></a>'
			);
			$('.data').appendTo($('.picList'));
		}
		// res.forEach(function(item,idx){
		// 	console.log(item);
		// 	var i = idx;
		// 	console.log(idx);
		// 	$('<li/>').addClass('data').appendTo($('.picList'));
		// 	$('.data').html(
		// 		'<a href="#" class="bigImg"><img src="'+ res[$(this)[i]].bigImg +'" alt=""></a>'
		// 	)

		// })
		// res.forEach(function(item,idx){
		// 	console.log(item)
		// 	var i = idx;
		// 	console.log(i)
		// 	$('<li/>').addClass('data').appendTo($('.picList'))
		// 	$('.data').html(
		// 		'<a href="#" class="bigImg"><img src="'+ res[$(this)[i]].bigImg +'" alt=""></a>'

		// 	);
				// '<a href="#" class="bigImg">
				// 	<img src="../img/maoyi1.jpg" alt="">
				// 	<span class="active">明星同款</span>
				// </a>
				// <p class="clear">
				// 	<a href="#" class="left">米浪米浪</a>
				// 	<span class="_discount right">1.9折</span>
				// </p>
				// <p><a href="#">韩版纯棉三色拼接圆领套头毛衣针织</a></p>
				// <p>
				// 	<strong>￥68</strong>
				// 	<span class="price">￥358</span>
				// </p>
				// <p class="smallPic">
				// 	<a href="#"><img src="../img/maoyi1.1.jpg" alt=""></a>
				// 	<a href="#"><img src="../img/maoyi1.2.jpg" alt=""></a>
				// 	<a href="#"><img src="../img/maoyi1.3.jpg" alt=""></a>
				// </p>';


			// $('<img src=" '+ item.bigImg + '"/>').appendTo('.bigPic');
			// $('<p/>').appendTo('.bigImg');
		// })
	})
})



// $.post('list.php',{pageNo:40,sql:"select ceil(count(*)/15) from goodsdatalist"},function(response){
// 		console.log(response);
// 	}
// $(function(){
// 	$.post('list.php',{pageNo:40,sql:"select * from goodsdatalist limit (pageSize-1)*pageNo,pageNo"},function(response){
// 		console.log(response);

// 		$('</ul>').appenTo($body);
// 		forEach(){
// 			$('</li>')
// 		}

// 	})
// })

