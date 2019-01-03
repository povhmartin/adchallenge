// Immediately-invoked function expression
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $(function(){
        	$(window).scroll(function(){
        	    if ($(window).scrollTop() >= 50) {
        	        $('header').addClass('fixed');
        	        $("main").css("padding-top", "100px");
        	        $('.region-header .block-system-branding-block img').css("color") == "rgb(0, 0, 0)";
                	$('.region-header .block-system-branding-block img').css("filter", "invert(100%)"); 
                    $('.region-header .block-system-branding-block img').css("-webkit-filter", "invert(100%)");
        	    }
        	    else {
        	        $('header').removeClass('fixed');
        	        $("main").css("padding-top", "0px");
        	        $('.region-header .block-system-branding-block img').css("color") == "";
                	$('.region-header .block-system-branding-block img').css("filter", ""); 
                    $('.region-header .block-system-branding-block img').css("-webkit-filter", "");
        	    }
        	});
        	
        	 
        	
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

