
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
        document.getElementById("navigationbar").classList.toggle('colored');
        return false;
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (this.txt == "Rebecca McFadden.") {
        console.log('ending');
        var div = document.getElementsByClassName('wrap')[0];
        div.style.borderRight = "none";
        return false;
    }
    else if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var element = document.getElementsByClassName('txt-rotate')[0];
    var toRotate = element.getAttribute('data-rotate');
    var period = element.getAttribute('data-period');
    if (toRotate) {
        new TxtRotate(element, JSON.parse(toRotate), period);
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};