define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = function Controller() {};

	Controller.fn = Controller.prototype;
	Controller.fn.extends = function (obj) {
		var _this = this;

		if (Object.prototype.toString.call(obj) === '[object Object]') {
			Object.keys(obj).forEach(function (item) {
				_this[item] = obj[item];
			});
		} else {
			throw "extends Error: input value is not a valid Object";
		}
	};
	Controller.fn.init = function () {
		this.events();
	};
	Controller.fn.events = function () {

		/////可以写上一些全局的事件
	};
	Controller.fn.Super = function (func) {
		var father = this.prototype;
		while (father) {
			if (!father[func]) {
				return;
			}
			father[func]();
			father = father.prototype;
		}
	};
	Controller.fn.serializeJSON = function (serializeArray) {
		var obj = {};
		serializeArray.forEach(function (item) {
			obj[item.name] = item.value;
		});
		return obj;
	};
	Controller.fn.commonAjax = function (url, data) {
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';

		return new Promise(function (resolve, reject) {
			$.ajax({
				url: url,
				type: type,
				data: data,
				success: function success(res) {
					try {
						res = JSON.parse(res);
						resolve(res);
					} catch (e) {
						alert(e);
					}
				},
				error: function error(e) {
					reject(e);
				}
			});
		});
	};
	exports.default = new Controller();
});