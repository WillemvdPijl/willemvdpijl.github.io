//Nav-Menu animations
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('#nav-menu').toggleClass('open');
        $("body").toggleClass("modal-open");
        $("#nav-icon span").css('background', '#fff');
        $("#nav-link-container").toggleClass('open');
        $("#nav-circle").css('opacity', '0');
	});
});
/*
$(document).ready(function(){
    var scroll_pos = 0;
    scroll_pos = $(this).scrollTop();
	$('#nav-icon').click(function(){
        scroll_pos = $(this).scrollTop();
        if((!$('#nav-menu').hasClass('open')) && scroll_pos > 50){
        $("#nav-icon span").css('background', '#000000');
    	}	
    });
});*/

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 50 && $('#nav-menu').hasClass('open')) {
                    $("#nav-icon span").css('background', '#fff'); //white
                    $("#nav-circle").css('opacity', '0');
                } 
                else if(scroll_pos < 50) {
                    $("#nav-icon span").css('background', '#fff'); //white
                    $("#nav-circle").css('opacity', '0');
                } 
                else {
                    $("#nav-icon span").css('background', '#1A1227'); //scrolled color
                    $("#nav-circle").css('opacity', '1');
                }
            });
        });



/*
background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
*/