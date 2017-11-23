$(document).ready(function(){


	//preload
	//$('body').jpreLoader({showSplash: false, autoClose: true});

	//nice scroll for website
	//$("html").niceScroll({mousescrollstep:8});

	$("#owl-wrap").owlCarousel({
		autoPlay : 3000,
	    stopOnHover : true
	});

	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook', show_title: false, social_tools: ''});


	$('h4.panel-title').click(function(){
		var $i = $(this).find('i');
		
		$('#faq').on('hide.bs.collapse', function () {
			$(this).find('i').removeClass('fa-minus-square');
		});

		$('#faq').on('shown.bs.collapse', function () {
			$(this).find('i').removeClass('fa-minus-square');
			$i.addClass('fa-minus-square');
		});

	});



	$("#testimonials").owlCarousel({
	    autoPlay : 3000,
	    stopOnHover : true,
	    navigation:false,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    autoHeight : true,
	    transitionStyle:"fade",

	    items : 2, 
      	itemsDesktop : false,
      	itemsDesktopSmall : false,
      	itemsTablet: false,
      	itemsMobile : [767,1]
  	});


  	$('#mobile-nav-btn').click(function(e){
  		e.preventDefault();
  		$('.nav').slideToggle("fast");
  	});
  	$('.nav > ul > li > a').click(function(){
  		if($('body').width()<768) $('.nav').slideToggle("fast");
  	});

  	$( window ).resize(function() {
  		if($('body').width()>=768){
  			$('.nav').show();
  		}
  	});


  	/*smooth scroll for links*/
  	$('.nav a').click(function(){
  		var vOffset = 40;
  		if($('body').width()<991) vOffset = 80;

    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top-vOffset
     	}, 600);

      	return false;
    });
	

	/*
  	//appearing animation
  	$('.AF-left').appear(function() {
  		$(this).addClass("animated bounceInLeft").css('visibility', 'visible');
  	});
  	$('.AF-right').appear(function() {
  		$(this).addClass("animated bounceInRight").css('visibility', 'visible');
  	});

  	$('.AF-bump').appear(function() {
  		$(this).addClass("animated bounceIn").css('visibility', 'visible');
  	});
	*/



/*------------------------------------------
 Subscribe form ajax
 ------------------------------------------*/


$('#subscription-form').submit(function(e) {

    e.preventDefault();
    var $form           = $('#subscription-form');
    var submit          = $('#subscribe-button');
    var ajaxResponse    = $('#subscription-response');
    var email           = $('#subscriber-email').val();

    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php',
        dataType: 'json',
        data: {
            email: email
        },
        cache: false,
        beforeSend: function(result) {
            submit.val("Joining...");
        },
        success: function(result) {
            if(result.sendstatus == 1) {
                ajaxResponse.html(result.message);
                $form.fadeOut(500);
            } else {
                ajaxResponse.html(result.message);
                submit.val("Join");
            }
        },
        error: function(e){
          console.log(e);
        }
    });

});


});//End Document ready


