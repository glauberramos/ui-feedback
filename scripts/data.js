(function() {
var feedbacks = [];

var firstFeedback = new uifeedback.model.feedback(1, 'make logo bigger', 19, 159, 100, 110);
var secondFeedback = new uifeedback.model.feedback(2, 'cat color need to be yellow', 362, 619, 110, 170);

firstFeedback.addComment('I will work on that.', 1086314793);
firstFeedback.addComment('Made some improvements in the colors.', 1086314793);

secondFeedback.addComment('I will work on that.', 1086314793);
secondFeedback.addComment('Made some improvements in the colors.', 1086314793);

feedbacks.push(firstFeedback);
feedbacks.push(secondFeedback);

localStorage.feedbacks = localStorage.feedbacks || JSON.stringify(feedbacks);
localStorage.loggedUser = 1086314793;

})();
