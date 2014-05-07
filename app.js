  var $ul = $('.initialTweets');
  $ul.html('');
  var index = streams.home.length;
    for(var i = 0; i < index; i++){
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      var time = tweet.created_at.toString();
      var hours = time.split(' ')[4];
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + hours).addClass('animated fadeIn');
      $tweet.appendTo($ul);
    }




$(document).ready(function(){
  $('button').hide();
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
      if(counter > 15) {
    $('button').addClass('animated flip').show();
  }
    }
  }, 5000);


  $('.incomingTweets').hide();

  $('button').on('click', function() {
    $('.incomingTweets').addClass('animated bounceInLeft').show();
    $('button').hide();
  });

});

