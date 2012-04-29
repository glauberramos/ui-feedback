require(["scripts/templates", "scripts/data"], function() {
  var isShowing = true;

  function createFeedback(feedbackData) {
    return $(Mustache.render(feedbackTemplate, feedbackData));
  };

  function initializeElements() {
    $('.feedback').draggable();
    $('.feedback-area').resizable();
  };

  function loadInitialData() {
    var initialData = JSON.parse(localStorage.feedbacks);

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
 
  function bindFeedbackInput(e) {
    if(e.keyCode==13) {
      var text = $(this).val();
      var feedback = $(this).parent().parent();
      var comment = new uifeedback.model.comment(text, localStorage.loggedUser);
      var feedbacks = JSON.parse(localStorage.feedbacks);
 
      function map() {
        if(this.id == 1) {
          this.comments.push(new uifeedback.model.comment('test', localStorage.loggedUser));
        }
      }
 
      feedbacks = $(feedbacks).each(map);

      localStorage.feedbacks = JSON.stringify(feedbacks);

      $(this).val('');

      $($(this).parent().siblings('.comments')).append(Mustache.render(commentTemplate, comment));
    }
  }
 
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
    isShowing ? $('#add').css('left', '-37px') : $('#add').css('left', '-122px');    

    isShowing ? $('#show-hide-button').text("Hide All") : $('#show-hide-button').text("Show All");
  });

  loadInitialData();

  $('.feedback-input').on('keypress', bindFeedbackInput);

  $('#load-image').click(function() {
    FB.api({
      method: 'fql.query',
      query: 'SELECT pic_square FROM user WHERE uid=me()'
    },
    function(response) {
      localStorage.loggedUser = response[0].pic_square;
    });
  });
});
