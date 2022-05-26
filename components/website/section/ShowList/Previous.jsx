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
        verticalSwiping: false,
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
                    arrows: false,
                },
            },
        ],
    };
    const previousShows = [
        {
            image: "/images/prv1.png",
            title: "Live show",
            event: 2,
        },
        {
            image: "/images/prv2.png",
            title: "Conference",
            event: 7,
        },
        {
            image: "/images/prv3.png",
            title: "Live show",
            event: 4,
        },
        {
            image: "/images/prv1.png",
            title: "Fashion show",
            event: 0,
        },
        {
            image: "/images/prv2.png",
            title: "Caremony",
            event:2,
        },
    ];

    return (
        <>
            <div className="PreviousShowList PLMain">
                <Slider {...settings}>
                    {previousShows.map((item, i) => (
                        <PreviousShowCard
                            key={i}
                            active={index === i ? "active" : ""}
                            data={item}>
                        </PreviousShowCard>
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
                        .slick-arrow {
                            --arrowPosition: 0;
                            &.slick-prev {
                                right: var(--arrowRange);
                            }
                            &.slick-next {
                                right: 0;
                            }
                        }
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
                            width: calc(100vw - (var(--pdContainer) * 2) + (var(--cardRange) / 2)) !important;
                        }
                    }
                }
                @media (max-width: 500px) {
                    .PreviousShowList {
                        .slick-slide {
                            padding-right: 15px;
                        }
                    }
                }
            `}</style>
        </>
    );
}
PreviousShowList.propTypes = {};

export default PreviousShowList;
