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

	$.post('list.php',{page:1},function(response){
		console.log(22)
		var res = JSON.parse(response);
		//console.log(res);
		$('<ul/>').addClass('picList clear').appendTo($('.pic'));
		$(res).each(function(idx,item){
			//console.log(idx)
			//console.log(item)
			$('<li/>').addClass('data').html('<a href="#" class="bigImg"><img src="'+ item.bigImg +'" alt=""><span class="active">'+ item.redLine +'</span></a><p class="clear"><a href="#" class="left">'+ item.name +'</a><span class="_discount right">'+ item.discount +'</span></p><p><a href="#">'+ item.msg +'</a></p><p><strong>'+ item.price +'</strong><span class="price">'+ item.originPrice +'</span></p><p class="smallPic"></p>').appendTo($('.pic ul'));
			
			//判断redLine
			console.log(item.redLine)
			console.log(item.redLine.length)
			if(item.redLine.length<=0){
				$('.data .active').remove();
			}

			//小图
			var arr = item.smallImg.split(',');
			$(arr).each(function(i,item){
				//console.log($('.smallPic').eq(idx));
				$('<a href="#"></a>').html('<img src="'+ item +'" alt="">').appendTo($('.smallPic').eq(idx));
			})

			//点击第一个毛衣图片的时候跳转到详情页
			$('.data a').first().attr('href','detail.html');
		})
	})

	//点击分页请求不同数据
	$('.page span').on('click',function(){
		$('.picList').empty();
		$(this).addClass('active').siblings().removeClass('active');
		var $self = $(this);
		//console.log($self.html())
		$.post('list.php',{page:$self.html()},function(response){
			console.log(11)
			var result = JSON.parse(response);
			console.log(result);
			$(result).each(function(idx,item){
				//console.log(idx)
				//console.log(item)
				$('<li/>').addClass('data').html('<a href="#" class="bigImg"><img src="'+ item.bigImg +'" alt=""><span class="active">'+ item.redLine +'</span></a><p class="clear"><a href="#" class="left">'+ item.name +'</a><span class="_discount right">'+ item.discount +'</span></p><p><a href="#">'+ item.msg +'</a></p><p><strong>'+ item.price +'</strong><span class="price">'+ item.originPrice +'</span></p><p class="smallPic"></p>').appendTo($('.pic ul'));
				//console.log(typeof (item.smallImg))

				//判断redLine
				console.log(item.redLine)
				console.log(item.redLine.length)
				if(item.redLine.length<=0){
					$('.data .active').remove();
				}

				//小图
				var arr = item.smallImg.split(',');
				$(arr).each(function(i,item){
					//console.log($('.smallPic').eq(idx));
					$('<a href="#"></a>').html('<img src="'+ item +'" alt="">').appendTo($('.smallPic').eq(idx));
				})

				//点击第一个毛衣图片的时候跳转到详情页
				$('.data a').first().attr('href','detail.html');
			})
		})
	})
})



// $.post('list.php',{pageNo:40,sql:"select ceil(count(*)/15) from goodsdatalist"},function(response){
// 		console.log(response);
// 	}
// $(function(){
// 	$.post('list.php',{pageNo:40,sql:"select * from goodsdatalist limit (pageSize-1)*pageNo,pageNo"},function(response){
// 		console.log(response);


// 	})
// })

