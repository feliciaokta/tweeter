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

});