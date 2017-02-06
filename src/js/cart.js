$(function(){
	//获取cookie，写入页面
	var $cartList = $('.cartList');

	var cartList;
	var $cookies = document.cookie.split('; ');
	$($cookies).each(function(idx,item){
		var arr = item.split('=');
		if(arr[0] === 'cartlist'){
			cartList = JSON.parse(arr[1]);
		}
	})

	var subPrice = 0;
	var singlePrice;

	if(cartList){
		$(cartList).each(function(idx,item){
			$('<ul/>').addClass('clear').html('<li><input type="checkbox" checked="checked"></li><li class="cart1 clear"><a href="#"><img src="'+ item.imgUrl +'" alt=""></a><div class="name right"><a>'+ item.name +'</a></div></li><li class="cart2"><p class="color">颜色：'+ item.color +'</p><p class="size">尺码：('+ item.size +')</p></li><li class="cart3"><span class="origin">'+ item.origin +'</span><br/><span class="price">'+ item.price +'</span></li><li class="cart4"><span class="minus">-</span><span class="number">'+ item.qty +'</span><span class="add">+</span></li><li class="cart5"><span>'+item.price+'</span></li><li class="cart6"><a href="#">移入我的点赞</a><br><a href="javascript:;" class="del">删除</a></li>').appendTo($cartList);

			//设置标记
			$('.cart1 a img').attr('data-guid',item.guid);

			//计算小计
			var $a = $('.cart4 .number').html();
			singlePrice = $a * item.price;

			//计算总价
			subPrice += item.price*item.qty;
		})

		//写入小计
		$('.cart5 span').html(singlePrice);

		//写入总价
		$('.cost .total').html(subPrice);
	}

	//删除商品
	$('.cart6').on('click','.del',function(){
		console.log($(this))
		//$currentGUID = $(this).attr('data-guid');
		var $currentImg = $(this).closest('ul').find('a img');

		var currentGUID = $currentImg.attr('data-guid');

		for(var i=0;i<$cartList.length;i++){
			// 找出要删除的商品
			if($cartList[i].guid === currentGUID){
				$cartList.splice(i,1);
				break;
			}
		}

		// 更新cookie
		document.cookie = 'carlist=' + JSON.stringify($cartList);

		$currentImg.closest('ul').remove();
	})

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
		$value++;
		$('.number').html($value);
	})
})