import asset from "@/plugins/assets/asset";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import PreviousShowCard from "@/website/common/Card/PreviousShowCard";
import React, { useState } from "react";
import Slider from "react-slick";

function PreviousShowList() {
    const [index, setIndex] = useState(0);

    const settings = {
        centerPadding: "0",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: (current) => {
            setIndex(current);
        },
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };
    // let currentSlide = document.querySelector(".PreviousShowList .slick-slider .slick-list .slick-track .slick-slide.slick-active.slick-current");
    // console.log(currentSlide);
    return (
        <>
            <div className="PreviousShowList PLMain">
                <Slider {...settings}>
                    {[...Array(6)].map((item, i) => (
                        <PreviousShowCard
                            key={i}
                            active={index === i ? "active" : ""}
                            image={asset("/images/prv1.png")}
                            title="Live show"
                            event="2"></PreviousShowCard>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
                .PreviousShowList {
                    .slick-list {
                        max-height: 360px;
                    }
                    .slick-current {
                        width: 13.25% !important;
                    }
                }
                @media (max-width: 1024px) {
                    .PreviousShowList {
                        padding-right: var(--pdContainer);
                        .slick-current {
                            width: 12.25% !important;
                        }
                    }
                }
                @media (max-width: 750px) {
                    .PreviousShowList {
                        .slick-current {
                            width: 9% !important;
                        }
                    }
                }
                @media (max-width: 630px) {
                    .PreviousShowList {
                        .slick-current {
                            width: calc(100vw - (var(--pdContainer) * 2)) !important;
                        }
                    }
                }
                @media (max-width: 500px) {
                    .PreviousShowList {
                        .slick-current {
                            padding-right: var(--pdContainer);
                        }
                        & > div {
                            padding-inline: 15px;
                        }

                        .slick-arrow {
                            top: 52%;
                            &.slick-next {
                                right: -32px;
                            }
                            &.slick-prev {
                                right: 0;
                                left: -32px;
                            }
                        }
                    }
                }
                @media (max-width: 400px) {
                    .PreviousShowList {
                        margin-left: 20px;
                        padding-left: 0px;
                        .slick-current {
                            padding-right: calc(var(--pdContainer) + 15px);
                        }
                    }
                }
            `}</style>
        </>
    );
}
PreviousShowList.propTypes = {};

export default PreviousShowList;
