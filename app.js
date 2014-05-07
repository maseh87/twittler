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
  var storedMessages = [];
  $('.tweetButton').hide();
  $('.tweetButton').removeClass('aimated tada');
  setInterval(function() {
    for(var i = count + 1; i < streams.home.length; i++) {
      count = i;
      var tweet = streams.home[i];
      var $tweet = $('<li></li>');
      var time = tweet.created_at.toString();
      var hours = time.split(' ')[4];
      // $tweet.text('@' + tweet.user);
      var tweets = $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + hours).addClass('animated fadeIn');
      // $tweet.prependTo($ul);
      storedMessages.push(tweets);
      if(storedMessages.length > 15) {
        $('.tweetButton').addClass('animated tada').show();

      }

    }
  }, 10000);

  $('button').on('click', function() {
    for(var i = 0; i < storedMessages.length; i++) {
      storedMessages[i].prependTo($ul);
    }
  });
;});

