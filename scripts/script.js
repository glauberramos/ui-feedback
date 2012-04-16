var userImage;

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
    isShowing ? $('#add').css('left', '-37px') : $('#add').css('left', '-122px');    

    isShowing ? $('#show-hide-button').text("Hide All") : $('#show-hide-button').text("Show All");
  });

  loadInitialData();

  $('.feedback-input').bind('keypress', function(e) {
    if(e.keyCode==13) {
      var data = {
        text: $(this).siblings('.feedback-input').val(),
        image: userImage
      };

      $(this).siblings('.feedback-input').val('');

      $($(this).parent().siblings('.comments')).append(Mustache.render(commentTemplate, data));
    } 
  });

  $('#load-image').click(function() {
    console.log('load-image');

    FB.api({
      method: 'fql.query',
      query: 'SELECT pic_square FROM user WHERE uid=me()'
    },
    function(response) {
      userImage = response[0].pic_square;
    });
  });
});
