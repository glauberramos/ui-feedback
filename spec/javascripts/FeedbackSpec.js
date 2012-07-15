describe('feedback', function() {	
	var feedback;

	beforeEach(function() {
		feedback = new uifeedback.model.feedback();
	});

	it('should have id equals to zero as default', function() {
		expect(feedback.id()).toEqual(0);
	});	
	it('should have top equals to zero as default', function() {
		expect(feedback.top()).toEqual(0);
	});
	it('should have left equals to zero as default', function() {
		expect(feedback.left()).toEqual(0);
	});
	it('should have height equals to 100 as default', function() {
		expect(feedback.height()).toEqual(100);
	});
	it('should have width equals to 100 as default', function() {
		expect(feedback.width()).toEqual(100);
	});
	it('should return json according to the object', function() {
		var expectedJson = '{"id":0,"top":0,"left":0,"height":100,"width":100,"comments":[]}';
		
		expect(feedback.toJson()).toEqual(expectedJson);
	});
	it('should return json according to the object with comments', function() {
		var expectedJson = '{"id":0,"top":0,"left":0,"height":100,"width":100,"comments":[{"text":"asd","image":"./images/users/123.jpg"}]}';

		feedback.addComment('asd', 123);		

		expect(feedback.toJson()).toEqual(expectedJson);
	});
	it('should return json according to the object with 2 comments', function() {
		var expectedJson = '{"id":0,"top":0,"left":0,"height":100,"width":100,"comments":[{"text":"asd","image":"./images/users/123.jpg"},{"text":"asd","image":"./images/users/123.jpg"}]}';

		feedback.addComment('asd', 123);		
		feedback.addComment('asd', 123);		

		expect(feedback.toJson()).toEqual(expectedJson);
	});
});

describe('Comment', function() {
	
	var comment;

	beforeEach(function() {
		comment = new uifeedback.model.comment();
	});
	it('should have image as empty as default', function() {
		expect(comment.image()).toEqual('');
	});
	it('should have image with correct path', function() {
		var expectedImagePath = "./images/users/123.jpg";
		comment = new uifeedback.model.comment('text', 123);

		expect(comment.image()).toEqual(expectedImagePath);
	});
	it('should return json according to empty object', function() {
		var expectedJson = '{"text":"","image":""}'

		expect(comment.toJson()).toEqual(expectedJson);
	});
	it('should return json according to the object', function() {
		comment = new uifeedback.model.comment('hello', 123);	
		var expectedJson = '{"text":"hello","image":"./images/users/123.jpg"}';

		expect(comment.toJson()).toEqual(expectedJson);
	});
});
