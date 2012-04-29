var feedbackTemplate = 
'<div id="{{id}}"" class="feedback">' +
'  <div class="feedback-area"/>' +
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
