require(["scripts/templates", "scripts/data", "scripts/util"], function() {
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

    for(var index = 0; index < initialData.length; index++) {
      var feedbackData = initialData[index];
      var div = createFeedback(feedbackData);
     
	 $('html').append($(div));
      
      initializeElements();
    };
  };
 
  function bindFeedbackInput(e) {
    if(e.keyCode==13) {
      var comment = new uifeedback.model.comment($(this).val(), localStorage.loggedUser);
      var feedbacks = JSON.parse(localStorage.feedbacks);
 
      function map(feedbackId, comment){
        if(this.id == feedbackId) {
          this.comments.push(JSON.parse(comment.toJson()));
        }
      }
 
      feedbacks = $(feedbacks).each(map.curry($(this).parent().parent().parent().attr('id'), comment));

      localStorage.feedbacks = JSON.stringify(feedbacks);

      $(this).val('');

      $($(this).parent().siblings('.comments')).append(Mustache.render(commentTemplate, comment));
    }
  }
 
  $('#add-new-feedback').click(function() {
  	var feedback = new uifeedback.model.feedback();

	var div = createFeedback(JSON.parse(feedback.toJson()));

	$('html').append(div);
  
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
