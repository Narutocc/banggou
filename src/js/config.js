// 配置config
requirejs.config({
	// baseUrl:'js',
	paths:{
		'jquery':'../assert/jquery-3.1.1'
	},
	shim:{
		'../assert/jquery-gdszoom/jquery.gdszoom.js':{
			deps: ["jquery"],
			exports:'gdszoom'
		}
	}
})
