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
  $('button').hide();
    $('li').addClass('animated bounceInLeft');
  setInterval(function() {
    var counter = 0;
    var $ul = $('.incomingTweets');
    $ul.html('');
    var index = streams.home.length;
    for(var i = 11; i < index; i++){
      counter += 1;
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($ul);
      if(counter > 30) {
    $('button').addClass('animated bounceInLeft').show();
  }
    }
  }, 5000);


  $('.incomingTweets').hide();

  $('button').on('click', function() {
    $('.incomingTweets').addClass('animated bounceInLeft').show();
    $('button').hide();
  });

});

