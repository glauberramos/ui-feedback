var userImage;

$(function(){
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '119092938223182',
    status     : true,
    cookie     : true,
    xfbml      : true,
    oauth      : true,
  });
  };
  (function(d){
    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document));

  FB.api({
    method: 'fql.query',
    query: 'SELECT pic_square FROM user WHERE uid=me()'
  },
  function(response) {
    userImage = response[0].pic_square;
  });
});
