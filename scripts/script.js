$(function() {
var commentsTemplate = 
'<div class="feedback">' +
'  <div class="feedback-area"/>' +
'    <label class="description">' +
'      {{description}}' +
'    </label>' +
'</div>';

var showOrHide = true;

function createFeedback(feedbackData) {
  return $(Mustache.render(commentsTemplate, feedbackData));
};

function initializeElements() {
  $('.feedback').draggable();
  $('.feedback-area').resizable();
}

function loadInitialData() {
   for(index in initialData) {
      var feedbackData = initialData[index];
      var div = createFeedback(feedbackData);

      var coordinates = {
        top: feedbackData.top,
        left: feedbackData.left
      };
      
      $(div).find('.feedback-area')
        .css('height', feedbackData.height + 'px')
        .css('width', feedbackData.width + 'px');

      $('html').append($(div).offset(coordinates));
      
      initializeElements();
    };
};

$('#add-new-feedback').click(function() {
    var div = createFeedback({description: 'testing this shit'});

    var coordinates = {
      top: 0,
      left: 0
    };

    $('html').append(div.offset(coordinates));
  
    initializeElements();
});

$('#show-hide-button').click(function(event) {
  showOrHide = !showOrHide;

  $('.feedback').toggle(showOrHide);

  var button = $(this);

  if(button.text() == "Hide feedbacks") {
    button.text("Show feedbacks");
  } else {
    button.text("Hide feedbacks");
  }
});

  loadInitialData();
});
