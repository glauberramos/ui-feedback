$(function() {
var commentsTemplate = '<div class="feedback"><div class="feedback-area"/><label class="description">{{description}}</label></div>';

var showOrHide = true;

function createFeedback(feedbackData) {
  return $(Mustache.render(commentsTemplate, feedbackData));
};

function initializeElements() {
  $('.feedback').draggable();
  $('.feedback-area').resizable();
}

function loadInitialData() {
   for(feedback in initialData) {
      var data = initialData[feedback];
      var div = createFeedback(data);

      var coordinates = {
        top: data.top,
        left: data.left
      };

      $('html').append($(div).offset(coordinates));
      initializeElements();
    };
};

$('html').not('.feedback').click(function(e) {
    var div = createFeedback({description: 'testing this shit'});
    var html = this;
    var coordinates = {
      top: e.pageY,
      left: e.pageX
    };
    
    $(div).click(function(event) {
      event.stopPropagation();
    });

    $(html).append(div.offset(coordinates));
    initializeElements();
});

$('#hide-show-button').click(function(event) {
  showOrHide = !showOrHide;

  $('.feedback').toggle(showOrHide);

  var button = $(this);

  if(button.text() == "Hide") {
    button.text("Show");
  } else {
    button.text("Hide");
  }
  
  event.stopPropagation();
});

  loadInitialData();

  $('.feedback').click(function(event) {
    event.stopPropagation(); 
  });

  //var dataObj = $.parseJSON(data);
});
