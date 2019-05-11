$(document).ready(function() {
    function checkOffset() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").removeClass('navbar-top');
            $("#topButton").css('display', 'block');
        }     
        else {
            $(".navbar").addClass('navbar-top');
            $("#topButton").css('display', 'none');
        }     
    }
    checkOffset();

    $(window).scroll(function() {
        checkOffset();
    });

    $(".carousel-control-prev, .carousel-control-next").hover(
        function() {
            $(this).css('background-color', 'rgba(0, 0, 0, 0.3)');
        }, function() {
            $(this).css('background-color', '');
        }
    );

    $("#topButton").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
});