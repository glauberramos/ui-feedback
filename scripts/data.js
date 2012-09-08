(function() {
var feedbacks = '';

var firstFeedback = new uifeedback.model.feedback(1, 19, 159, 100, 110);
var secondFeedback = new uifeedback.model.feedback(2, 362, 619, 110, 170);

firstFeedback.addComment('Make logo bigger.', 1086314793);
firstFeedback.addComment('I will work on that.', 1086314793);
firstFeedback.addComment('Made some improvements in the colors.', 1086314793);

secondFeedback.addComment('Cat is too boring..', 1086314793);
secondFeedback.addComment('I will work on that.', 1086314793);
secondFeedback.addComment('Made some improvements in the colors.', 1086314793);

feedbacks += firstFeedback.toJson() + ',';
feedbacks += secondFeedback.toJson();

localStorage.feedbacks = localStorage.feedbacks || '[' + feedbacks + ']';
localStorage.loggedUser = 1086314793;
})();
