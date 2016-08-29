// Inview plugin settings
    jQuery(document).ready(function($) {
       "use strict"; 
        var fadeL = jQuery('.fadeInL');
        var fadeR = jQuery('.fadeInR');
        var fadeDown = jQuery('.fadeInDown');
        var fadeIn = jQuery('.fadeInIn');
        var fadeUp = jQuery('.fadeInUp');

        var progressBar = jQuery('.progress-inner'); 

        var browser = false;
        var p = navigator.platform;

        if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
            browser = true;
        }

        if (browser === false) {

            fadeL.css({visibility: 'hidden'});
            fadeR.css({visibility: 'hidden'});
            fadeDown.css({visibility: 'hidden'});
            fadeIn.css({visibility: 'hidden'});
            fadeUp.css({visibility: 'hidden'});

            progressBar.css({visibility: 'hidden'});
            
            fadeL.on('inview', function (event, visible) {
                if (visible) {
                    jQuery(this).addClass('fadeL');
                    jQuery(this).css({visibility: 'visible'});
                }
            });
            fadeR.on('inview', function (event, visible) {
                if (visible) {
                    jQuery(this).addClass('fadeR');
                    jQuery(this).css({visibility: 'visible'});
                }
            });
            fadeDown.on('inview', function (event, visible) {
                if (visible) {
                    jQuery(this).addClass('fadeDown');
                    jQuery(this).css({visibility: 'visible'});
                }
            });
            fadeIn.on('inview', function (event, visible) {
                if (visible) {
                    jQuery(this).addClass('fadeIn');
                    jQuery(this).css({visibility: 'visible'});
                }
            });
            fadeUp.on('inview', function (event, visible) {
                if (visible) {
                    jQuery(this).addClass('fadeUp');
                    jQuery(this).css({visibility: 'visible'});
                }
            });

            progressBar.on('inview', function (event, visible) { 
                if (visible) {
                    jQuery(this).addClass('progress-bar-filled');
                    jQuery(this).css({visibility: 'visible'});
                }
            });
        }
});
// End inview settings


// Page load animation
/*(function(jQuery) {
    "use strict"; 
    jQuery(window).load(function() {
        $("#loadanimation").delay(150).fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    });
 })(jQuery);*/
 // End Page load animation
