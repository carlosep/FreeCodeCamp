$(function() {
  $('a[href="#About"]').click(function(event) {
    event.preventDefault();
    var targetOffset = $('a[name="About"]').offset().top;
    $('body').animate({
        scrollTop: targetOffset
      },
      1000
    );
  });
  $('a[href="#Portfolio"]').click(function(event) {
    event.preventDefault();
    var targetOffset = $('a[name="Portfolio"]').offset().top;
    $('body').animate({
        scrollTop: targetOffset
      },
      1000
    );
  });
  $('a[href="#Contact"]').click(function(event) {
    event.preventDefault();
    var targetOffset = $('a[name="Contact"]').offset().top;
    $('body').animate({
        scrollTop: targetOffset
      },
      1000
    );
  });
});
