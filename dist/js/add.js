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
			$("#add").off('click').on('click', function () {
				var formData = _self.serializeJSON($('.form').serializeArray());
				formData.serviceInvoke = 'add';
				_self.addMember(formData);
			});
		},

		addMember: function addMember(data) {
			var url = 'http://192.168.1.5/home/index.php';
			this.commonAjax(url, data).then(function (res) {
				if (res.status === true) {
					alert('新增成功');
				}
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