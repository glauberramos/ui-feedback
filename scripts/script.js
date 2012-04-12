require(["templates"], $(function() {
var isShowing = true;

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
  isShowing = !isShowing;

  $('.feedback').fadeToggle(isShowing);

  if($(this).text() == "Hide feedbacks") {
    $(this).text("Show feedbacks");
  } else {
    $(this).text("Hide feedbacks");
  }
});

  loadInitialData();
});

);
