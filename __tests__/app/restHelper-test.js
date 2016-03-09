describe("the rest helper",function(){
	it("makes a get request with the expected paramaters",function(){
		jest.dontMock('../../app/restHelper.js');
		var $ = require('jquery');
		var restHelper = require('../../app/restHelper.js');
		var testURL = 'api/test';

		restHelper.get(testURL,function(){});

		expect($.ajax).toBeCalledWith({
				url:testURL,
				xhrFields:{
					withCredentials: true
				},
				dataType:"json",
				type:"GET",
				success:jasmine.any(function),
				error:jasmine.any(function)
		})
	})
});


