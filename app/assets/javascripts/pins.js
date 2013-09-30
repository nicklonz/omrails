$(document).ready(function() {

jQuery(function() {
  $('#pins').imagesLoaded(function() {});
  return $('#pins').masonry({
    itemSelector: ".box"
  });
});

if ($('.pagination').length) {
  $(window).scroll(function() {
    var url;
    url = $('.pagination .next_page a').attr('href');
    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination').text("Fetching more pins...");
      $.getScript(url);
    }
    return $(window).scroll();
  });
}

});

