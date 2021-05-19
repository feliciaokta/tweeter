$( document ).ready(function() {
  $(".tweet-text").on('input', function() {
    const char = $(this).val();
    let charLength = char.length;
    $(".counter").text(140 - charLength);

    (140 - charLength < 0) ? $(".counter").css("color", "red") : $(".counter").css("color", "#545149");

  });
});