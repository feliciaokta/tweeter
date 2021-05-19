/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
'use strict';

$(document).ready(() => {

  // update the timestamp of posted tweet
  $(".timePosted").text(timeago.format(new Date()));



  // stick the navbar on top
  window.onscroll = function() {myFunction()};
  
  const header = document.getElementById("navBar");

  const sticky = header.offsetTop;  // where you want the header to stay when you scroll

  // make the header stay on top (const sticky) when 
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  

  // real-time tweet posts

  // sample object I have to make:
  const testTweet = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
        },
      "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
      "created_at": 1461116232227
  }


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    

  }

  // makes a jQuery object out of html tweet post
  const createTweetElement = function(tweetObject) {
    const $tweet = $(`
      <article class="tweetBox"> 
        <div class="userTop">
          <div class="usernameWithPhoto">
            <img src="${tweetObject.user.avatars}">
            <h2>${tweetObject.user.name}</h2>
          </div>
            <h3>${tweetObject.user.handle}</h3>
        </div>
          <p>${tweetObject.content.text}</p>
          <hr class="line">
        <footer><span class="timePosted">${tweetObject.created_at}</span>
          <div class="footerButtons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    `)
    return $tweet;
  }

  console.log(createTweetElement(testTweet));
  // console.log($tweet); // to see what it looks like
  $('#tweets-container').prepend(createTweetElement(testTweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});