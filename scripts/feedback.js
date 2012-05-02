var uifeedback = uifeedback || {};
	uifeedback.model = uifeedback.model || {}

	uifeedback.model.feedback = function(id, description, top, left, height, width) {
	var id = id || 0;
	var description = description || '';
	var comments = [];
	var top = top || 0;
	var left = left || 0;
	var height = height || 100;
	var width = width || 100;

	function addComment(userId, text) {    
		comments.push(new uifeedback.model.comment(userId, text));
	}

	function commentToJson() {
		var returnJson = '';
		$(comments).each(function() {
			returnJson += this.toJson() + ',';
		});

		return '[' + (!returnJson.empty() ? returnJson.slice(0, returnJson.length - 1) : returnJson) + ']';
	}

	function toJson() {
		return '{"id":{0},"top":{1},"left":{2},"height":{3},"width":{4},"comments":{5}}'.format(id, top, left, height, width, commentToJson());	    
	}

	return {
		id: function() { return id; },
		description: function() { return description; },
		top: function() { return top; },
		left: function() { return left; },
		height: function() { return height; },
		width: function() { return width; },
		comments: function() { return comments; },
		addComment: addComment,
		toJson: toJson
	};
};

uifeedback.model.comment = function(text, user) {
	var user = user;
	var text = text || '';
	var image = user ? './images/users/{0}.jpg'.format(user) : '';

	function toJson() {
		return '{"text":"{0}","image":"{1}"}'.format(text, image);
	}

	return {
		toJson: toJson,
		image: function() { return image; }, 
		text: function() { return text; }
	};
};
