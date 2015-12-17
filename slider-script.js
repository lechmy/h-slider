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
        $("#slider-holder, #sbtn-right, #sbtn-left").off();
        attach=true;
    }
    
    $(window).resize(function(){
        sliderRightEnd = $("#slider-holder").width() - $("#slider").width();
        if(sliderRightEnd < 0 && attach){
            slide();
            attach=false;
        }
        else if(sliderRightEnd > 0 && !attach){
            $("#slider-holder, #sbtn-right, #sbtn-left").off();
            $("#slider").css('left','0px');
            attach=true;
        }
    });  
});
function slide(){
    var canSlide = true;
    var startX;
    $("#slider-holder").on('vmousedown',function(e){
        startX = e.clientX - parseInt($("#slider").css("left"));
        $("#slider-holder").on('vmousemove',function(e){
            $("#slider").css("left", (e.clientX - startX));
        });
        $("#slider-holder").on('vmouseup',function(e){
            $(this).off('vmousemove');
            if(parseInt($("#slider").css("left")) > 1){
                $("#slider").animate({left: '0'},300);
            }
            if(parseInt($("#slider").css("left")) < sliderRightEnd){
                $("#slider").animate({left: sliderRightEnd},300);
            }
            $(this).off('vmouseup');
        });
    });
    
    $("#sbtn-right").on('click',function(){
        if(canSlide){
            canSlide=false;
            if((parseInt($("#slider").css("left"))-$("#slider-holder").width())>sliderRightEnd){
                $("#slider").animate({left: '-='+$("#slider-holder").width()},200,function(){
                    canSlide=true;
                });
            }
            if((parseInt($("#slider").css("left"))-$("#slider-holder").width())<=sliderRightEnd){
                $("#slider").animate({left: sliderRightEnd},200,function(){
                    canSlide=true;
                });
            }
        }
    });
    $("#sbtn-left").on('click',function(){
        if(canSlide){
            canSlide=false;
            if((parseInt($("#slider").css("left"))+$("#slider-holder").width())<0){
                $("#slider").animate({left: '+='+$("#slider-holder").width()},200,function(){
                    canSlide=true;
                });
            }
            if((parseInt($("#slider").css("left"))+$("#slider-holder").width())>=0){
                $("#slider").animate({left: '0px'},200,function(){
                    canSlide=true;
                });
            }
        }
    });
}
