$(document).ready(function() {
  $('.mosaic .mouse-hover').hover(function() {
    $('.mosaic .block-fullscreen').html($(this).parent().parent().html());
    $('.mosaic .block-fullscreen').find('.mouse-hover').remove();
    $('.mosaic .block').css('opacity', '0');
    $(this).parent().parent().css('opacity', '1');
  }, function() {
    $('.mosaic .block').css('opacity', '1');
  });
});
