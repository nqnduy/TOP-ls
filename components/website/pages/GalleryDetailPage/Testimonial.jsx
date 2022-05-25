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
                    centerPadding: "5px",
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
            <div className="PLMain">
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
                    //explain: margin ra ngoài để cân bằng chiều rộng dư ra của slider khi sử dụng margin right để tạo khoảng cách cho các items.

                    --sliderMarginInline: calc(var(--cardRange) / 2);
                    .slick-slider {
                        margin: 0 calc(0px - var(--sliderMarginInline));
                    }

                    /** (💡)  - slick-arrow bị dư ra  vì margin slick-slider ở trên, nên phải cộng vào*/
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
                        .txMain.fz-36 {
                            font-size: var(--fzr36) !important;
                            line-height: var(--lhr36) !important;
                        }
                        .txMain.blue {
                            font-size: var(--fzrMain) !important;
                            line-height: var(--lhrMain) !important;
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
            `}</style>
        </div>
    );
}
