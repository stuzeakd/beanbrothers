$(window).ready(function($) {
    new WOW().init();
    
    var e = 3;
    var desktopWidth = 1029;
    $("#intro").fadeIn(3e3, function() {
        $(window).scroll(function() {
            if ($(window).width() > desktopWidth) {
                var e = $(window).scrollTop();
                $("#intro").css({'margin-top': -.09 * e}); 
                $("#intro").css({'opacity': (600 - e) / 600})
            }
        })
    });
    $('.coffee.hover').bind('touchstart touchend', function(e) {
        $(this).toggleClass('coffee-hover-effect');
    });
    var menu = $(".menu");
    menu.on("mouseenter mouseleave", function(e) {
        menu.not(this).stop(!0).fadeTo(300, "mouseenter" == e.type ? .3 : 1)
    });
    
    $("#blackbg").delay(2e3).fadeOut(1e3);
    var s = $(window).height()-113, t = 10, o = 537, header = $(".header"), logo = $('.logo'); 
    
    $(window).scroll(function(){
        if($(this).scrollTop() > $(window).height()-113 ){
            logo.addClass('show');
            if ($(window).width() > desktopWidth) {
                header.addClass("fixed");
            }
        } else {
            logo.removeClass('show');   
            if ($(window).width() > desktopWidth) {
                header.removeClass("fixed");
            }
        }
        if ($(window).width() > desktopWidth) {
            $(this).scrollTop() > t ? (header.addClass("fade"), $("#intro").addClass("fade")) : (header.removeClass("fade"), $("#intro").removeClass("fade"));
        }
    });    
    
//    $(window).resize(function() {
//        $("#blackbg").hide(), $("#hero_container").show()
//    }),         
//        $("#services_list_mobile").slick({
//        dots: !0,
//        infinite: !1,
//        speed: 300,
//        slidesToShow: 4,
//        slidesToScroll: 4,
//        responsive: [{
//            breakpoint: 768,
//            settings: {slidesToShow: 1,slidesToScroll: 1,dots: !1}}]
//    }), 
//        $("#mobile_menu_toggle").on("click", function() {
//        $(this).toggleClass("open"), 
//            $("#mobile_menu").fadeToggle(), 
//            $(".close_label").toggle(), 
//            $(".open_label").toggle(), 
//            $(".plus").toggleClass("close")
//    }), $("#to_top").on("click", function() {
//        $("html,body").animate({scrollTop: 0}, "slow")
//    }), 
//        $("#services_list a").click(function(e) {
//        e.preventDefault(), 
//            $(this).parent().addClass("active"), 
//            $(this).parent().siblings().removeClass("active");
//        var s = $(this).attr("href");
//        $(".service").not(s).css("display", "none"), $(s).fadeIn()
//    }), 
//        $(".gallery").responsiveSlides({nav: !0,timeout: 8e3}), 
//        $(".project_slides").responsiveSlides({nav: !0,timeout: 8e3}), 
//        $(".quote_slides").responsiveSlides({speed: 800,pager: !1,timeout: 1e4}), 
//        $(".desktop").responsiveSlides({speed: 800,pager: !1,nav: !0,timeout: 8e3});
});
