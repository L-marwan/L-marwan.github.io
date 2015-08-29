(function($){
  $(function(){

   // $('.button-collapse').sideNav();
      $('.button-collapse').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 20, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    });

      $(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

   //paralax
      $('.blueprint::after').parallax();

    new WOW().init();
    smoothScroll.init();

    $('body').scrollSpy();

    // email function 
  var form = $('#main-contact-form');
  form.submit(function(event){
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),
      beforeSend: function(){
        form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      }
    }).done(function(data){
      form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    });
  });


        


        
        

  }); // end of document ready
})(jQuery); // end of jQuery name space