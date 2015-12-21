var sliderRightEnd;
$(document).ready(function(){
    $('.slider-items').each(function(){
        $('.slider').width($('.slider').width()+$(this).outerWidth(true));
    });
    sliderRightEnd = $("#slider-holder").width() - $("#slider").width();
    var attach = true;
    if(sliderRightEnd < 0 && attach){
            slide();
            attach=false;
        }
    else if(sliderRightEnd > 0 && !attach){
        $("#sbtn-right, #sbtn-left").off();
        attach=true;
    }
    
    $(window).resize(function(){
        sliderRightEnd = $("#slider-holder").width() - $("#slider").width();
        if(sliderRightEnd < 0 && attach){
            slide();
            attach=false;
        }
        else if(sliderRightEnd > 0 && !attach){
            $("#sbtn-right, #sbtn-left").off();
            $("#slider").css('left','0px');
            attach=true;
        }
    });  
});
function slide(){
    $("#sbtn-right").on('click',function(){
        $("#slider-holder").animate({scrollLeft:'+='+$("#slider-holder").width()},200);
    });     
    $("#sbtn-left").on('click',function(){
        $("#slider-holder").animate({scrollLeft:'-='+$("#slider-holder").width()},200);
    });
}
