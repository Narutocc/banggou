requirejs(['config'],function(){
	requirejs(['jquery','../assert/jquery-gdszoom/jquery.gdszoom.js'],function($,gdszoom){
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

			//点击加号++，点击减号--
			var $value = $('.number').html();
			$('.minus').click(function(){
				if($value <= 1){
					$('.countTip').show();
					return false;
				}else{
					$('.countTip').hide();
					$value--;
					$('.number').html($value);
				}
			})
			$('.add').click(function(){
				$('.countTip').hide();
				$value++;
				$('.number').html($value);
			})

			//放大镜
			$('.bigImg').gdszoom();

			//点击当前小图显示对应图片
			var $bigImg = $('.bigImg').find('img');
			$('.samllImg ul li').find('img').on('click',function(){
				console.log($bigImg.attr('src'))
				console.log($(this).attr('src'))
				$bigImg.attr('src') = $(this).attr('src');
			})

			//购物车cookie
			var $cartList = [];

			var $cookies = document.cookie.split('; ');
			$($cookies).each(function(idx,item){
				var arr = item.split('=');
				if(arr[0] === 'cartlist'){
					$cartList = JSON.parse(arr[1]);

					//保存加入购物车的数量
					$('.shopping span').html($cartList.length);
				}else{
					$('.shopping span').html('0');
				}
			})

			var $currentGUID;
			var $color;
			var $img;
			$('.colors').on('click','a',function(){
				$currentGUID = $(this).attr('data-guid');
				$(this).addClass('active').siblings().removeClass('active');
				$img = $(this).children();
				//$('.colors a').siblings('a').remove('active');
				console.log($currentGUID);
				if($currentGUID == 'g01'){
					$('.chooseColor').html('黑色');
					$color = $('.chooseColor').html();
				}else if($currentGUID == 'g02'){
					$('.chooseColor').html('蓝色');
					$color = $('.chooseColor').html();
				}else if($currentGUID == 'g03'){
					$('.chooseColor').html('天蓝色');
					$color = $('.chooseColor').html();
				}
			})

			var $size;
			$('.sizes').on('click','a',function(){
				$size = $(this).html();
				$(this).addClass('active').siblings().removeClass('active');
				//console.log($size);
				$('.chooseSize').html(''+ $(this).html() +'');
			})

			$('.join .joinIn').click(function(){
				$('.shopping span').html($cartList.length);
				var $name = $('.name span').html();
				var $origin = $('.price ul li em').html();
				var $price = $('.price ul li strong').html();
				var $num = $('.number').html();

				if(!$size && !$currentGUID){
					alert('加入购物袋前请先选择颜色和尺码');
					return false;
				}else if(!$currentGUID){
					alert('加入购物袋前请先选择颜色');
					return false;
				}else if(!$size){
					alert('加入购物袋前请先选择尺码');
					return false;
				}

				var goodsObj = {};
				goodsObj.guid = $currentGUID;
				console.log(goodsObj.guid)
				goodsObj.imgUrl = $img.attr('src');
				goodsObj.name = $name;
				goodsObj.origin = $origin;
				goodsObj.price = $price;
				goodsObj.qty = $num;
				goodsObj.color = $color;
				goodsObj.size = $size;

				console.log(goodsObj)
				var i = 0;
				if($cartList.length === 0){
					$cartList.push(goodsObj);
				}else{
					$($cartList).each(function(idx,item){
						if(item.guid === $currentGUID){
							item.qty++;
							return false;
						}
						i = idx;
					})
					if(i === $cartList.length-1){
						$cartList.push(goodsObj);
					}
				}

				document.cookie = 'cartlist=' + JSON.stringify($cartList);

				var $cookies = document.cookie.split('; ');
				$($cookies).each(function(idx,item){
					var arr = item.split('=');
					if(arr[0] === 'cartlist'){
						$cartList = JSON.parse(arr[1]);

						//保存加入购物车的数量
						$('.shopping span').html($cartList.length);
					}else{
						$('.shopping span').html('0');
					}
				})
				window.location.href = '#';
			})
		})
	})
})
