
$(function() {
    
    console.log(1);
    let i = false;
    $(".header__menu__icon").click(function(){
        if (i) {
            $(".header__menu__mob").css({"height" : "0", "padding-top" : "0px"})
            $(".header__menu__icon__item").eq(1).css({"opacity" : 1, "transform" : "rotate(0deg)"})
            $(".header__menu__icon__item").eq(0).css({"position" : "absolute", "top" : "0", "transform" : "rotate(0deg)"})
            $(".header__menu__icon__item").eq(2).css({"position" : "absolute", "top" : "100%", "transform" : "rotate(0deg)"})
            i = false;
            
        }
        else {
            $(this).css({"position" : "fixed"})
            $(".header__menu__mob").css({"height" : "100vh", "padding-top" : "100px"})
            $(".header__menu__icon__item").eq(1).css({"opacity" : 0, "transform" : "rotate(45deg)"})
            $(".header__menu__icon__item").eq(0).css({"position" : "absolute", "top" : "50%", "transform" : "translateY(-50%)", "transform" : "rotate(45deg)"})
            $(".header__menu__icon__item").eq(2).css({"position" : "absolute", "top" : "50%", "transform" : "translateY(-50%)", "transform" : "rotate(-45deg)"})
            i = true;
        }
    });

});

