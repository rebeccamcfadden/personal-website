
$(document).ready(function () {
    $('.header').height($(window).height());
    //$('.bottompanel').height($(window).height());
})
$(document).ready(function () {
    $(".arrow-nav").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
});
$('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));

    $('.result p')
        .removeClass('active-p')
        .eq(currentIndex)
        .addClass('active-p');
});
$(document).ready(function () {
    $(".fa-bars").click(function (event) {
    event.preventDefault();
    document.getElementById("navbarSupportedContent").classList.toggle('collapsed');
    document.getElementById("navbarSupportedContent").classList.toggle('collapse');
    if (document.getElementById("navbarSupportedContent").classList.contains('collapsed')){
        document.getElementsByClassName("navbar").setAttribute("style", "height: 16em;");
    }
    else{
        document.getElementsByClassName("navbar").setAttribute("style", "height: 4em;");
    }
    
    console.log("is anyone there");
    return false;
});
});