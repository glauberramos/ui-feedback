var uifeedback = uifeedback || {};
uifeedback.model = uifeedback.model || {}

uifeedback.model.feedback = function(id, description, top, left, height, width) {
  var id = id;
  var description = description;
  var comments = [];
  var top = top;
  var left = left;
  var height = height;
  var width = width;

  function addComment(userId, text) {    
    comments.push(new uifeedback.model.comment(userId, text));
  }

  return {
    addComment: addComment,
    comments: comments,
    id: id,
    description: description,
    top: top,
    left: left,
    height: height,
    width: width
  };
};

uifeedback.model.comment = function(text, userId) {
  var user = userId;
  var text = text;

  return {
    text: text,
    image: './images/users/' + user + '.jpg'
  };
};
