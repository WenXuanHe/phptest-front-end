import controller from './Controller';

controller.extends({
	events(){
		let _self = this;
		$('#search').off('click').on('click', function(){
			_self.search();
		});
		$('.delete').die('click').live('click', function(){
			_self.delete($(this).data('id'));
		});
		$('.update').die('click').live('click', function(){
			_self.update($(this).data('id'));
		});
		$("#addMember").off('click').on('click', function () {
			location.href = "./src/html/addMember.html";
		})
	},
	update:function(id){
		let data = {
			id:id,
			serviceInvoke:'update'
		};
		let url = 'http://192.168.1.5/home/index.php';
		this.commonAjax(url, data)
		.then(function(res){
			$('#search').trigger('click');.

			
		}).catch(function(e){
			console.log(e);
		});
	},
	delete:function(id){
		let data = {
			id:id,
			serviceInvoke:'delete'
		};
		let url = 'http://192.168.1.5/home/index.php';
		this.commonAjax(url, data)
		.then(function(res){
			$('#search').trigger('click');
		}).catch(function(e){
			console.log(e);
		});
	},
	search:function(){
		let data = {
			name:$('#msg').val(),
			serviceInvoke:'search'
		};
		let url = 'http://192.168.1.5/home/index.php';
		this.commonAjax(url, data)
		.then(function(res){
			let tpl = $("#renderTemp").html();
			let template = Handlebars.compile(tpl);
			$('#renderToBody').html(template({data:res}));
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
