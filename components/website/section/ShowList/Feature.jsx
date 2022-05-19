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
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 630,
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
    return (
        <>
            <div className="FeatureShowList">
                <div className="container">
                    <div className="flexSB">
                        <TextTitle small_text="Watch it again" big_text="Feature shows" />
                    </div>
                    <Slider className="PreviousShowList PLMain" {...settings}>
                        <PreviousShowCard image="/images/prv1.png" title="Live show" event="2" active="active" color="white" />
                        <PreviousShowCard image="/images/prv2.png" title="Conference" event="7" active="active" color="white" />
                        <PreviousShowCard image="/images/prv3.png" title="Fashion show" event="4" active="active" color="white" />
                        <PreviousShowCard image="/images/prv2.png" title="Caremony" event="0" active="active" color="white" />
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3" active="active" color="white" />
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3" active="active" color="white" />
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .slick-arrow {
                    top: -60px;
                }
                .slick-slider {
                    margin-right: calc(0px - (var(--cardRange))) !important;
                }
                .slick-list {
                    padding: 0 !important;
                }
                @media (max-width: 500px) {
                    .FeatureShowList {
                        .TextTitle {
                            text-align: center;
                            margin: 0 auto;
                        }
                        .slick-slider {
                            padding-inline: 15px;
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
