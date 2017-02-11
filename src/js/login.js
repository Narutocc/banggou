requirejs(['config'],function(){
	requirejs(['jquery'],function($){
		$(function(){
			//随机数
			//获取页面元素
			var $check = $('.check');
			var $change = $('.change');
			var str = '0123456789abcdefghijklmnopqrstuvwxyz';
			$change.on('click',function(){
				randomCode();
			})
			randomCode();

			function randomCode(){
				var _code = '';
				for(var i=0;i<4;i++){
					var index = parseInt(Math.random()*str.length);
					_code += str[index];
				}
				$check.html(_code.toUpperCase())
			}

			//ajax请求
			$('.logining .success').click(function(){
				$.post('../html/login.php',{
					username: $('.username').val(),
					password: $('.password').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						window.location.href = '../index.html';
					} else {
						alert($obj.message);
					}
				})        
			})

			//表单提示
			$('.username').focus();
			$('.username').on('focus',function(){
				$('.tip1').html('请输入账户或邮箱地址');
			}).on('blur',function(){
				$('.tip1').html('');
			})

			$('.password').on('focus',function(){
				$('.tip2').html('请输入密码');
			}).on('blur',function(){
				$('.tip2').html('');
			})

			$('.confirm').on('focus',function(){
				$('.tip3').html('请输入验证码');
			}).on('blur',function(){
				$('.tip3').html('');
			})
		})
	})
})
