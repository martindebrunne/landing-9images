$(document).ready(function() {

  function changeBlockFullScreen($this) {
    data = $this.parent().data('fullscreen');
    $('.mosaic .block-fullscreen').css('background', "url('" + data.background + "') no-repeat center fixed");
    $('.mosaic .block-fullscreen').css('background-size', 'cover');
    $('.mosaic .block-fullscreen .title').text(data.title);
    $('.mosaic .block').css('opacity', '0');
  }

  $('.mosaic .mouse-hover').hover(function() {
    changeBlockFullScreen($(this));
    $(this).closest('.block').css('opacity', '1');
  }, function() {
    $('.mosaic .block').css('opacity', '1');
  });
});
