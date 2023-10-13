(function($) {

    "use strict";

    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/

    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide, .productItem-slider .slide, .updateHorizontal-slider .slide").length) {
            $(".hero-slider .slide, .productItem-slider .slide, .updateHorizontal-slider .slide").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-bg").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                autoplay: true ,
                autoplaySpeed: 6000,
                pauseOnHover: true,
                infinite: true,
                arrows: false,
                dots: true,
                fade: true,
                cssEase: 'linear'
            });
        }
    }

    //Setting Product Slider
    function productSlider() {
        if ($(".productNavbar-slider").length) {
            $('.productItem-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
           
            $('.productNavbar-slider')
                .on('init', function(event, slick) {
                    $('.productNavbar-slider .slick-slide.slick-current').addClass('is-active');
                })
                .slick({
                    draggable: false,
                    infinite: false,
                    variableWidth: true,
                    slidesToShow: 6,
                    dots: false,
                    arrows: true,
                    prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                    nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                });
           
            $('.productItem-slider').on('afterChange', function(event, slick, currentSlide) {
                $('.productNavbar-slider').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.productNavbar-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
                $('.productNavbar-slider .slick-slide.is-active').removeClass('is-active');
                $(currrentNavSlideElem).addClass('is-active');
            });
           
            $('.productNavbar-slider').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');
           
                $('.productItem-slider').slick('slickGoTo', goToSingleSlide);
            });
        }
    }

    //Setting Update Vertical slider
    function updateVerticalSlider() {
        if ($(".updateVertical-slider").length) {
            $(".updateVertical-slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false ,
                infinite: true,
                vertical: true,
                asNavFor: '.updateHorizontal-slider',
                arrows: true,
                prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }
    function updateHorizontalSlider() {
        if ($(".updateHorizontal-slider").length) {
            $(".updateHorizontal-slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false ,
                infinite: true,
                asNavFor: '.updateVertical-slider',
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }
    function caseStudiesSlider() {
        if ($(".caseStudies-slider").length) {
            $(".caseStudies-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true ,
                infinite: true,
                arrows: false,
                dots: false
            });
        }
    }
    

    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: 'url(' + img + ')',
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(document).ready(function () {

        //Active heor slider
        heroSlider();
        sliderBgSetting();

        productSlider();

        updateVerticalSlider();
        updateHorizontalSlider();

        caseStudiesSlider();

        //Feather Icon Init
        feather.replace();

        $(".click-to-scrollDown").click(function() {
            $('html, body').animate({
                scrollTop: $(".click-to-scrollDown").offset().top-108
            }, 200);
        });
    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {
        bgParallax();
    });

    
    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });

})(window.jQuery);