import controller from './Controller';

controller.extends({
	events(){
		var _self = this;
		$("#add").off('click').on('click', function () {
			let formData = _self.serializeJSON($('.form').serializeArray());
			formData.serviceInvoke = 'add';
			_self.addMember(formData);
		});
	},
	addMember:function(data){
		let url = 'http://192.168.1.5/home/index.php';
		this.commonAjax(url, data)
		.then(function(res){
			if(res.status === true){
				alert('新增成功');
			}
		}).catch(function(e){
			console.log(e);
		});
	},
	
	init:function(){
		this.Super('init');
		this.events();
	}
});
$(function(){
	controller.init();
});
