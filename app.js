  var $ul = $('.initialTweets');
  var $user = $('.user');
  $ul.html('');
  var index = streams.home.length;
    for(var i = 0; i < index; i++){
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      var time = tweet.created_at.toString();
      var hours = time.split(' ')[4];
      // $tweet.text('@' + tweet.user);
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + hours).addClass('animated fadeIn');
      $tweet.appendTo($ul);
    }
$('.awaiting').hide();


$(document).ready(function(){
  var count = 11;
  setInterval(function() {
    for(var i = count + 1; i < streams.home.length; i++) {
      count = i;
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      var time = tweet.created_at.toString();
      var hours = time.split(' ')[4];
      // $tweet.text('@' + tweet.user);
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + hours).addClass('animated fadeIn');
      $tweet.prependTo($ul);
    }
  }, 10000);
});

