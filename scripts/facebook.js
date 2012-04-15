FB.api(
  {
    method: 'fql.query',
    query: 'SELECT name FROM user WHERE uid=me()'
  },
  function(response) {
    alert('Your name is ' + response[0].name);
  }
);

FB.api(
  {
    method: 'fql.query',
    query: 'SELECT pic_square FROM user WHERE uid=me()'
  },
  function(response) {
    alert('Your name is ' + response[0].pic_square);
  }
);

FB.api(
  {
    method: 'fql.query',
    query: 'SELECT uid FROM user WHERE uid=me()'
  },
  function(response) {
    alert('Your name is ' + response[0].uid);
  }
);
