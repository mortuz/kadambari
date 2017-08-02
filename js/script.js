$("#top a[href^='#']").on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // animate
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 800, function(){

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = this.hash;
  });

});

$(document).ready(function() {
  $('.thumbnail').click(function(e){
    e.preventDefault();
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#previewModal').modal({show:true});
  });
});
