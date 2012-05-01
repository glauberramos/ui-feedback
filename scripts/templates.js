var feedbackTemplate = 
'<div id="{{id}}" class="feedback" style="top:{{top}}px;left:{{left}}px;">' +
'  <div class="feedback-area" style="width:{{width}}px;height:{{height}}px;" />' +
'  <div class="feedback-content">' +
'    <label class="description">{{description}}</label>' +
'    <div class="comments">' +
'      {{#comments}}' +
'      <div class="comment-container">' +
'        <img class="user-image" src="{{image}}"></image>' +
'        <label class="comment">{{text}}</label>' +
'      </div>' +
'      {{/comments}}' +
'    </div>' +
'    <div id="input-container">' +
'      <input class="feedback-input" type="text" />' +
'    </div>' +
'  </div>' +
'</div>';

var commentTemplate =
'<div class="comment-container">' +
'  <img class="user-image" src="{{image}}"></image>' +
'  <label class="comment">{{text}}</label>' +
'</div>';
