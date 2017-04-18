let Controller = function(){}

Controller.fn = Controller.prototype;
Controller.fn.extends = function(obj){
	if(Object.prototype.toString.call(obj) === '[object Object]'){
		Object.keys(obj).forEach((item)=>{
			this[item] = obj[item];
		});
	}else{
		throw "extends Error: input value is not a valid Object";
	}
};
Controller.fn.init = function(){
	this.events();
};
Controller.fn.events = function(){
	
	/////可以写上一些全局的事件
};
Controller.fn.Super = function(func){
	let father= this.prototype;
	while(father){
		if(!father[func]){
			return;
		}
		father[func]();
		father = father.prototype;
	}
};
Controller.fn.serializeJSON = function(serializeArray){
	let obj = {};
	serializeArray.forEach((item)=>{
		obj[item.name] = item.value;
	});
	return obj;
}
Controller.fn.commonAjax = function(url, data, type='GET'){
	return new Promise(function(resolve, reject){
		$.ajax({
			url:url,
			type:type,
			data:data,
			success:function(res){
				try{
					res = JSON.parse(res);
					resolve(res);
				}catch(e){
					alert(e);
				}
			},
			error:function(e){
				reject(e);
			}
		});
	});
}
export default new Controller;