/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

  // update the timestamp of posted tweet
  $(".timePosted").text(timeago.format(new Date()));

  // stick the navbar on top
  window.onscroll = function() {myFunction()};
  

});