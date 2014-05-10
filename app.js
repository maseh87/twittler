$(document).ready(function(){
  var $ul = $('.initialTweets');
  var storedMessages = [];

  $('.tweetButton').hide();

  var displayTweets = function(index, tweetArr) {
    $ul.html('');
    while(index >= 0) {
      var tweet = tweetArr[index];
      var $tweet = $('<li></li>');
      var time = tweet.created_at;
      $tweet.html('<a>@ '+ tweet.user + ' </a>' + tweet.message + ' ' + '<span data-livestamp=" '+ tweet.created_at +' " ></span>');
      $tweet.appendTo($ul);
      index -= 1;
    }
  }

  $('input').on('keypress', function() {
    console.log('yo');
  });


  displayTweets(streams.home.length - 1, streams.home);

});

