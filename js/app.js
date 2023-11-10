(function($) {

    "use strict";

    var backToTopBtn = $('#backToTopButton');

    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/

    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide, .productItem-slider .slide, .updateHorizontal-slider .slide, .productDeatailImage-slider .slide, .productDeatailThumb-slider .slide").length) {
            $(".hero-slider .slide, .productItem-slider .slide, .updateHorizontal-slider .slide, .productDeatailImage-slider .slide, .productDeatailThumb-slider .slide").each(function() {
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
                infinite: true,
                dots: false,
                arrows: true,
                autoplay: false ,
                autoplaySpeed: 4000,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 1,
                        autoplay: true ,
                        }
                    }
                ]
            });
           
            $('.productNavbar-slider')
                .on('init', function(event, slick) {
                    $('.productNavbar-slider .slick-slide.slick-current').addClass('is-active');
                })
                .slick({
                    draggable: false,
                    infinite: true,
                    variableWidth: true,
                    slidesToShow: 6,
                    dots: false,
                    arrows: true,
                    autoplay: false ,
                    autoplaySpeed: 4000,
                    prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                    nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                            slidesToShow: 1,
                            autoplay: true ,
                            }
                        }
                    ]
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

    //Setting Product Detail Slider
    function productDetailSlider() {
        if ($(".productDetail-slider").length) {
            $('.productDeatailImage-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                autoplay: false ,
                autoplaySpeed: 4000,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
           
            $('.productDeatailThumb-slider')
                .on('init', function(event, slick) {
                    $('.productDeatailThumb-slider .slick-slide.slick-current').addClass('is-active');
                })
                .slick({
                    draggable: false,
                    infinite: false,
                    slidesToShow: 9,
                    dots: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 4000,
                    prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                    nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                            }
                        }
                    ]
                });
           
            $('.productDeatailImage-slider').on('afterChange', function(event, slick, currentSlide) {
                $('.productDeatailThumb-slider').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.productDeatailThumb-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
                $('.productDeatailThumb-slider .slick-slide.is-active').removeClass('is-active');
                $(currrentNavSlideElem).addClass('is-active');
            });
           
            $('.productDeatailThumb-slider').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');
           
                $('.productDeatailImage-slider').slick('slickGoTo', goToSingleSlide);
            });
        }
    }

    //Setting Update Vertical slider
    function productNavbarOnlySlider() {
        if ($(".productNavbarOnly-slider").length) {
            $(".productNavbarOnly-slider").slick({
                draggable: false,
                infinite: false,
                variableWidth: true,
                slidesToShow: 6,
                dots: false,
                arrows: true,
                autoplay: false ,
                autoplaySpeed: 4000,
                prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }

    //Setting Update Vertical slider
    function updateVerticalSlider() {
        if ($(".updateVertical-slider").length) {
            $(".updateVertical-slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
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
                autoplay: true ,
                autoplaySpeed: 4000,
                infinite: true,
                asNavFor: '.updateVertical-slider',
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            asNavFor: '',
                        }
                    }
                ]
            });
        }
    }

    
    function productgridViewSlider() {
        if ($(".productgridView-slider").length) {
            $(".productgridView-slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true ,
                autoplaySpeed: 4000,
                infinite: true,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
    }
    
    function servicesInfoBoxMobileSlider() {
        if ($(".servicesInfoBoxMobile-slider").length) {
            $(".servicesInfoBoxMobile-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true ,
                autoplaySpeed: 4000,
                infinite: true,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }
    
    function footerSitemapsMobileSlider() {
        if ($(".footerSitemapsMobile-slider").length) {
            $(".footerSitemapsMobile-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true ,
                autoplaySpeed: 4000,
                infinite: true,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }
    
    function footerLogosMobileSlider() {
        if ($(".footerLogosMobile-slider").length) {
            $(".footerLogosMobile-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true ,
                autoplaySpeed: 4000,
                infinite: true,
                arrows: false,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }
    
    function updateDetailSlider() {
        if ($(".updateDetails-slider").length) {
            $(".updateDetails-slider").slick({
                autoplay: true ,
                autoplaySpeed: 4000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }

    function updateMainSlider() {
        if ($(".updateMain-slider").length) {
            $(".updateMain-slider").slick({
                autoplay: true ,
                autoplaySpeed: 4000,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
    }

    function caseStudiesSlider() {
        if ($(".caseStudies-slider").length) {
            $(".caseStudies-slider").slick({
                autoplay: true ,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                            nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                        }
                    }
                ]
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

    // Scrolling Animation
    $.fn.visible = function(partial) {
    
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };


    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(document).ready(function () {

        //Active heor slider
        heroSlider();
        sliderBgSetting();

        productSlider();
        productDetailSlider();
        productNavbarOnlySlider();
        productgridViewSlider();

        updateVerticalSlider();
        updateHorizontalSlider();
        updateDetailSlider();
        updateMainSlider();

        caseStudiesSlider();

        var windowHeight = $(window).outerHeight()
        var headerHeight = $('header').outerHeight();
        var connectBlockHeight = $('.getHeightOfBlock').outerHeight();
        var sectionHeadingHeight = $('.sectionHeadingHeight').outerHeight();

        $(".hero-slider-wrapper").css("height", (windowHeight - headerHeight)+"px");
        $("body").css("padding-top", headerHeight + "px");

        backToTopBtn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '100');
        });

        var myOffcanvas = document.getElementById('offcanvasWithBothOptions');
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

        if (window.matchMedia('(min-width: 1200px)').matches) {
            // $(".slidingMenu").hover(function () {
            //     bsOffcanvas.show();
            // });
            $('.slidingMenu').mouseenter(function () {
                bsOffcanvas.show();
            });
         
            $('.slidingMenu').mouseleave(function () {
                bsOffcanvas.hide();
            }
            ).mouseleave();

            $(".applyHeightOfBlock").css("height", (connectBlockHeight - sectionHeadingHeight - 107) + "px");
        }

        if (window.matchMedia('(min-width: 1400px)').matches) {
            $(".applyHeightOfBlock").css("height", (connectBlockHeight - sectionHeadingHeight - 115) + "px");
        }
        
        if (window.matchMedia('(max-width: 768px)').matches) {
            servicesInfoBoxMobileSlider();
            footerSitemapsMobileSlider();
            footerLogosMobileSlider();
        }

        

        //Feather Icon Init
        feather.replace();
        
    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {
        var myOffcanvas = document.getElementById('offcanvasWithBothOptions') ;
        var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

        bgParallax();

        $(".image-animation--wrapper").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("show"); 
            } 
        });

        bsOffcanvas.hide();

        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    
    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });

})(window.jQuery);