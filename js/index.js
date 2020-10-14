$("#linkedin").click(function(){
    window.open('https://www.linkedin.com/in/john-kim-85190b63/', '_blank');
});
$("#tumblr").click(function(){
    window.open('https://www.tumblr.com/blog/johntaesookim', '_blank');
});

$(".ft-hover").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
});
$(".ft-hover").on({
    mouseenter: function () {
        $(this).css("background-color", "black");
        $(this).css("color", "white");
    },
    mouseleave: function () {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }
});

$("#ayuda-click").on({
    mouseenter: function () {
        $('#ayuda-click').css('opacity', '0.90');
        $('#ayuda-logo-img').hide();
        $('#ayuda-info').show();
    },
    mouseleave: function () {
        $('#ayuda-click').css('opacity', '1.0');
        $('#ayuda-logo-img').show();
        $('#ayuda-info').hide();
    }
});

$("#plantp-click").on({
    mouseenter: function () {
        $('#plantp-click').css('opacity', '0.90');
        $('#plantp-logo-img').hide();
        $('#plantp-info').show();
    },
    mouseleave: function () {
        $('#plantp-click').css('opacity', '1.0');
        $('#plantp-logo-img').show();
        $('#plantp-info').hide();
    }
});