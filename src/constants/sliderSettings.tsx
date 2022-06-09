export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // autoplay: true,
    // // speed: 10000,
    // autoplaySpeed: 10000,
    // cssEase: "linear",
    variableWidth: true,
    adaptiveHeight: true,
    // appendDots: (dots:any) => (
    //     <ul style={{ color:'red !important' }}> {dots} </ul>
    // ),

    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
}