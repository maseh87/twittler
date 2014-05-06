  var $ul = $('.initialTweets');
    $ul.html('');
    var index = streams.home.length;
    for(var i = 0; i < index; i++){
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($ul);
    }
$(document).ready(function(){

    $('li').addClass('animated bounceInLeft');
    // $('button').hide();

  setInterval(function() {
    var $ul = $('.incomingTweets');
    $ul.html('');
    var index = streams.home.length;
    for(var i = 11; i < index; i++){
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($ul);
    }
  }, 10000);
  $('.incomingTweets').hide();
  $('button').on('click', function() {
    $('.incomingTweets').addClass('animated bounceInLeft').show();
  });
});

