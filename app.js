$('.twtSubmit').hide();
$('.mostRecent').hide();


$(document).ready(function(){

  visitor = 'maseh87';
  streams.users[visitor] = [];

//global variables
  var $ul = $('.initialTweets'),
      storedMessages = [],
      tweetContent;

  var displayTweets = function(index, tweetArr) {
    $ul.html('');
    while(index >= 0) {
      var tweet = tweetArr[index];
      var $tweet = $('<li></li>');
      var time = tweet.created_at;
      $tweet.html('<a class="'+ tweet.user +'">@ '+ tweet.user + ' </a>' + tweet.message + ' ' + '<span data-livestamp=" '+ tweet.created_at +' " ></span>');
      $tweet.appendTo($ul);
      index -= 1;
      $('.recent').html('Show Most Recent Tweets');
      $('.mostRecent').addClass('animated fadeIn').show();
    }
  };

  displayTweets(streams.home.length - 1, streams.home);


//display specific users page
  $ul.on('click', 'a', function(e) {
    e.preventDefault();
    var person = $(this).attr('class');
    var personPage = streams.users[person];
    var len = personPage.length - 1;
    displayTweets(len, personPage);
    $('.recent').html('Home');
  });

//animate the submit button for tweets
  $('input').on('keyup', function() {
    tweetContent = $('input').val();
    if(tweetContent.length >= 0) {
      $('.twtSubmit').addClass('animated fadeIn').show();
    }
  });
//submit tweet
  $('.twtSubmit').on('click', function(e) {
    e.preventDefault();
    writeTweet(tweetContent);
    $('input').val('');
  });

//show new tweets
  $('.mostRecent').on('click', function(e) {
    e.preventDefault();
    displayTweets(streams.home.length - 1, streams.home);
  });




});

