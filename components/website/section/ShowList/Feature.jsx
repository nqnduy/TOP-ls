import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import PreviousShowCard from "@/website/common/Card/PreviousShowCard";
import TextTitle from "@/website/common/TextTitle";
import Slider from "react-slick";

export default function FeatureShowList() {
    const settings = {
        className: "center",
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        verticalSwiping: false,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };
    const shows = [
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
            title: "Fashion show",
            event: 4,
        },
        {
            image: "/images/prv2.png",
            title: "Fashion show",
            event: 0,
        },
        {
            image: "/images/prv3.png",
            title: "Caremony",
            event: 3,
        },
        {
            image: "/images/prv3.png",
            title: "Live show",
            event: 3,
        },
    ];
    return (
        <>
            <div className="FeatureShowList">
                <div className="container">
                    <TextTitle small_text="Watch it again" big_text="Feature shows" />

                    <Slider className="PreviousShowList PLMain" {...settings}>
                        {shows.map((show, index) => (
                            <PreviousShowCard key={index} data={show} active="active" color={"white"} />
                        ))}
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .FeatureShowList {
                    .slick-arrow {
                        top: -60px;
                        --arrowPosition: var(--cardRange);
                    }
                    .slick-slider {
                        margin-right: calc(0px - (var(--cardRange))) !important;
                    }
                    .slick-list {
                        padding: 0 !important;
                    }
                }
                @media (max-width: 500px) {
                    .FeatureShowList {
                        .TextTitle {
                            text-align: center;
                            margin: 0 auto;
                        }
                        .slick-slider {
                            padding: 0 15px;
                        }
                        .slick-arrow {
                            top: 52%;
                            &.slick-next {
                                right: -30px;
                            }
                            &.slick-prev {
                                right: 0;
                                left: -30px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
