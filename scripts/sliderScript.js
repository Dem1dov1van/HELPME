$('.slider').slick({
    infinite: false,
    slidesToShow: 1.75,
    slidesToScroll: 2.3,
    // arrows: true,
    dots: true,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }

        }
    ]
});