$(function() {
var commentsTemplate = '<div class="feedback"><div class="feedback-area"/><label class="description">{{description}}</label></div>';

var showOrHide = true;

var initialData = [{
  id: 1,
  description: 'need to improve button',
  top: 200,
  left: 200,
  user_name: 'gramos',
  progress: 'open',
  date: '03/10/2012'
},{
  id: 2,
  description: 'need to improve layout design',
  top: 350,
  left: 300,
  user_name: 'gramos',
  progress: 'open',
  date: '03/10/2012'
}];

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
