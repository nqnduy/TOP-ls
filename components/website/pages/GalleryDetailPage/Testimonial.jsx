import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import TestimonialCard from "@/website/common/Card/TestimonialCard";
import TextTitle from "@/website/common/TextTitle";
import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        verticalSwiping: false,
        autoplaySpeed: 2000,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };
    return (
        <div className="Testimonial">
            <div className="container">
                <div className="w50">
                    <TextTitle small_text="TESTIMONIALS" big_text="Take a look at our past customers success stories" />
                </div>
            </div>
            <div className="Testimonial__slider PLMain">
                <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider>
            </div>
            <style jsx global>{`
                .Testimonial {
                    //explain: margin ra ngo??i ????? c??n b???ng chi???u r???ng d?? ra c???a slider khi s??? d???ng margin right ????? t???o kho???ng c??ch cho c??c items.

                    --sliderMarginInline: calc(var(--cardRange) / 2);
                    .slick-slider {
                        margin: 0 calc(0px - var(--sliderMarginInline));
                    }

                    /** (????)  - slick-arrow b??? d?? ra  v?? margin slick-slider ??? tr??n, n??n ph???i c???ng v??o*/
                    .slick-next {
                        right: calc(var(--pdContainer) + var(--sliderMarginInline));
                    }
                    .slick-prev {
                        right: calc((var(--pdContainer)) + (var(--arrowRange)) + (var(--sliderMarginInline)));
                    }
                    .TestimonialCard {
                        margin: 0 var(--sliderMarginInline);
                    }
                }
                @media (max-width: 840px) {
                    .Testimonial {
                        --cardRange: 20px;
                    }
                }
                @media (max-width: 820px) {
                    .Testimonial {
                        .TextTitle {
                            h3 {
                                font-size: 13px !important;
                                line-height: 20px !important;
                            }
                            h4 {
                                font-size: 22px !important;
                                line-height: 36px !important;
                            }
                        }
                        .w50 {
                            width: 70%;
                        }
                    }
                }
                @media (max-width: 685px) {
                    .Testimonial {
                        margin-bottom: 40px;
                        .w50 {
                            width: 80%;
                        }
                        .slick-arrow {
                            top: 115%;
                        }
                    }
                }
                @media (max-width: 520px) {
                    .Testimonial {
                        .w50 {
                            width: 100%;
                        }
                    }
                }
                @media (max-width: 400px) {
                    .Testimonial {
                        &__slider{
                            padding-right: var(--pdContainer);
                        }
                    }
                }
            `}</style>
        </div>
    );
}
