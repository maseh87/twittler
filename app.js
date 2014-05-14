$('.twtSubmit').hide();
$(document).ready(function(){

  visitor = prompt('Tell me your name');
  streams.users[visitor] = [];

  var $ul = $('.initialTweets'),
      storedMessages = [],
      tweetContent;


  // $('.tweetButton').hide();

    var displayTweets = function(index, tweetArr) {
      $ul.html('');
      while(index >= 0) {
        var tweet = tweetArr[index];
        var $tweet = $('<li></li>');
        var time = tweet.created_at;
        $tweet.html('<a class="user">@ '+ tweet.user + ' </a>' + tweet.message + ' ' + '<span data-livestamp=" '+ tweet.created_at +' " ></span>');
        $tweet.appendTo($ul);
        index -= 1;
      }
    };

  $('input').on('keyup', function() {
    tweetContent = $('input').val();
    console.log(tweetContent);
    if(tweetContent.length >= 0) {
      $('.twtSubmit').addClass('animated fadeIn').show();
    }
  });

  $('.twtSubmit').on('click', function() {
    writeTweet(tweetContent);
    $('input').val('');
  });

  setInterval(function() {
    displayTweets(streams.home.length - 1, streams.home);
  }, 5000);


  $('.user').on('click', function() {
    console.log('you clicked');
  });


});

