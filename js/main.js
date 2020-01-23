
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