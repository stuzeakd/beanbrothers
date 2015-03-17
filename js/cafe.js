var contPadTop = 78; 
$(window).load(function(){
    var dcubeMainImage = $('#dcubecity .main-img > img');
    dcubeMainImage.css('margin-top', - dcubeMainImage.height() * 0.56);
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this.parentElement).removeClass('cafe-active');
        })
        if(!$(this).hasClass('backtotop')){
            $(this.parentElement).addClass('cafe-active');   
        }else{
            $('#cafe-header .wrapper li:first-of-type').addClass('cafe-active');   
        }
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-contPadTop
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    var content = $('#content');
    var hapjeongWrapper = $('#hapjeong > .wrapper')
    var contentPadTop = content.offset().top;
    hapjeongWrapper.css('padding-top', $(window).height() - content.offset().top - $('.getdown').height());
    

    $(window).scroll(function(e) {
        var scrollTop = $(this).scrollTop();
        var contentPadTop = $('#content').offset().top;
        var scrollTop = $(window).scrollTop();
        $('.animate').each(function(idx){
            if(!$(this).hasClass('animated') && scrollTop+contentPadTop > $(this).offset().top){
                if($(this.parentElement).attr('id') === 'hapjeong'){
                    $(this).animate({paddingTop : '0'}, 500, enable_scroll);
                    disable_scroll();
                    $(this).removeClass('animate');
                }
                if($(this.parentElement).hasClass('main-img')){
                    $(this).animate({'marginTop' : '0'}, 500);   
                    $(this).removeClass('animate');
                }
            }
        });
    });

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#cafe-header a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos+contPadTop && refElement.position().top + refElement.height() > scrollPos+contPadTop) {
            $('#cafe-header ul li').removeClass("cafe-active");
            currLink.parent().addClass("cafe-active");
        }
        else{
            currLink.parent().removeClass("cafe-active");
        }
    });
}


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}














