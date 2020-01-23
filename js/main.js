
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