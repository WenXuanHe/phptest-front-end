define(['./Controller'], function (_Controller) {
	'use strict';

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	_Controller2.default.extends({
		events: function events() {
			var _self = this;
			$('#search').off('click').on('click', function () {
				_self.search();
			});
			$('.delete').die('click').live('click', function () {
				_self.delete($(this).data('id'));
			});
			$('.update').die('click').live('click', function () {
				_self.update($(this).data('id'));
			});
			$("#addMember").off('click').on('click', function () {
				location.href = "./src/html/addMember.html";
			});
		},

		update: function update(id) {
			var data = {
				id: id,
				serviceInvoke: 'update'
			};
			var url = 'http://192.168.1.5/home/index.php';
			this.commonAjax(url, data).then(function (res) {
				$('#search').trigger('click');
			}).catch(function (e) {
				console.log(e);
			});
		},
		delete: function _delete(id) {
			var data = {
				id: id,
				serviceInvoke: 'delete'
			};
			var url = 'http://192.168.1.5/home/index.php';
			this.commonAjax(url, data).then(function (res) {
				$('#search').trigger('click');
			}).catch(function (e) {
				console.log(e);
			});
		},
		search: function search() {
			var data = {
				name: $('#msg').val(),
				serviceInvoke: 'search'
			};
			var url = 'http://192.168.1.5/home/index.php';
			this.commonAjax(url, data).then(function (res) {
				var tpl = $("#renderTemp").html();
				var template = Handlebars.compile(tpl);
				$('#renderToBody').html(template({ data: res }));
			}).catch(function (e) {
				console.log(e);
			});
		},
		init: function init() {
			this.Super('init');
			this.events();
		}
	});
	$(function () {
		_Controller2.default.init();
	});
});