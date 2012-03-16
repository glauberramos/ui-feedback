var Feedback = Backbone.Model.extend({
  initialize: function() {
    var date = new Date();
    this.date = '{0}/{1}/{2}'.format(date.getMonth()+1, date.getDate(), date.getFullyear());
  },
  description: function() { ... },
  left: function() { ... },
  top: function() { ... },
  user_name: function() { ... },
  progress: function() { ... },
  date: function() { ... },
});
