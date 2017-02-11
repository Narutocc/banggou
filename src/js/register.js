requirejs(['config'],function(){
	requirejs(['jquery'],function($){
		$(function(){
			$('.username').on('blur',function(){
				$('.tip1').hide();
				var $username = $('.username').val();
				if(!/^[\w\-]{4,20}$/.test($username)){
					$('.yanzheng').remove();
					$('<span/>').addClass('yanzheng').css({'color':'red','display':'block'}).html('用户名只能为4~20个字符,一个汉字为两个字符').appendTo($('._username'));
					return false;
				}
			}).on('focus',function(){
				$('.tip1').show();
			})

			$('.telphone').on('blur',function(){
				$('.tip2').hide();
				var $telphone = $('.telphone').val();
				if(!/^1[34578]\d{9}$/.test($telphone)){
					$('.yanzheng').remove();
					$('<span/>').addClass('yanzheng').css({'color':'red','display':'block'}).html('手机号码不合法').appendTo($('._telphone'));
					return false;
				}
			}).on('focus',function(){
				$('.tip2').show();
			})

			$('.password').on('blur',function(){
				$('.tip3').hide();
				var $password = $('.password').val();
				if(!/^[\w\-]{6,16}$/.test($password)){
					$('.yanzheng').remove();
					$('<span/>').addClass('yanzheng').css({'color':'red','display':'block'}).html('6-16个字符，请使用字母加数字或符号的组合密码').appendTo($('._password'));
					return false;
				}
			}).on('focus',function(){
				$('.tip3').show();
			});

			$('.confirm_psw').on('blur',function(){
				$('.tip4').hide();
				var $confirm_psw = $('.confirm_psw').val();
				var $password = $('.password').val();
				if($confirm_psw != $password){
					$('.yanzheng').remove();
					$('<span/>').addClass('yanzheng').css({'color':'red','display':'block'}).html('确认密码要与密码一致').appendTo($('._confirm_psw'));
				}
			}).on('focus',function(){
				$('.tip4').show();
			});

			$('.confirm').on('blur',function(){
				$('.tip5').hide();
			}).on('focus',function(){
				$('.tip5').show();
			})

			//ajax请求
			$('.send .finish').click(function(){
				$.post('../html/register.php',{
					username:$('.username').val(),
					password:$('.password').val(),
					telphone:$('.telphone').val()
				},function(response){
					var $obj = eval('('+ response +')');
					if($obj.state){
						// alert('注册成功！');
						window.location.href = 'login.html';
					}else{
						alert($obj.message);
					}
				})
			})

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

			//验证表单
			// $('form').validate({
			// 	rules:{
			// 		username:{
			// 			required:true,
			// 			rangelength:[5,10]
			// 		},
			// 		// email:{
			// 		// 	// 验证规则
			// 		// 	email:true,
			// 		// 	required:true
			// 		// }
			// 	},
			// 	messages:{
			// 		username:{
			// 			required:'用户名不能为空',
			// 			rangelength:'长度{0}-{1}'
			// 		}
			// 	}
			// });
		})
	})
})
