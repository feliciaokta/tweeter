/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
'use strict';

$(document).ready(() => {


  // stick the navbar on top
  window.onscroll = function() {myFunction()};
  
  const header = document.getElementById("navBar");

  const sticky = header.offsetTop;  // where you want the header to stay when you scroll

  // make the header stay on top (const sticky) when scrolled down
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


  // compose tweet button click event listener
  


  // database structure
  // makes a jQuery object out of html tweet post
  const createTweetElement = function(tweetObject) {
    const $tweet = $(`
        <article class="tweetBox"> 
          <div class="userTop">
            <div class="usernameWithPhoto">
              <img src="${tweetObject.user.avatars}">
              <h2 class="usernameObject">${tweetObject.user.name}</h2>
            </div>
            <h3>${tweetObject.user.handle}</h3>
          </div>
            <p class="post">${tweetObject.content.text}</p>
            <hr class="line">
          <footer><span class="timePosted">${timeago.format(tweetObject.created_at)}</span>
            <div class="footerButtons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>
    `)
    $tweet.find("p.post").text(tweetObject.content.text);
    return $tweet;
  }


  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    let tweetPost = "";

    for (let obj of tweets) {
      tweetPost = $('#tweets-container').prepend(createTweetElement(obj));
    };
    
    return tweetPost;
  }


  // "TWEET" button route
  // AJAX POST request to get new tweets into database with jQuery AJAX
  $(".tweetForm").submit((event) => {
    event.preventDefault();
    const tweetSend = $("#tweet-text");

    const delay = 350;

    // do not post if tweet is empty
    if (!$(tweetSend).val()) {
      $.ajax({url: "/tweets", method: "get"})
      .then(() => {
        $(".tooLong").hide();
        $(".emptyTweet").slideDown(delay).css("display", "block");
      })
    }
    
    // do not post if tweet length is > 140
    else if ($(tweetSend).val().length > 140) {
      $.ajax({url: "/tweets", method: "get"})
      .then(() => {
        $(".emptyTweet").hide();
        $(".tooLong").slideDown(delay).css("display", "block");
      })
    }
    
    else {
      $.ajax({url: "/tweets", method: "post", data: $(tweetSend).serialize()})
      .then(() => {
        $(".emptyTweet").hide();
        $(".tooLong").hide();
      })
      .then(() => {
        loadTweets();
        $(tweetSend).val("");
      })
    }

  })



  // Fetch posted tweets from the database and display them on the website with Ajax
  const loadTweets = () => {
    $.ajax({url: "/tweets", method: "get"})
    .then((allTweets) => {
      renderTweets(allTweets);
    })
  };

  loadTweets();


});