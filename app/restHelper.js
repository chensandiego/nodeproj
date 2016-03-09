var $ = require('jquery');

module.exports={
	get:function(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				xhrFields:{
					withCredentials: true
				},
				dataType:"json",
				type:"GET",
				success:success,
				error:error
			});
		})
	}
}