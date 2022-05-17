import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Button from "@/website/common/Button/ButtonMain";
import PreviousShowCard from "@/website/common/Card/PreviousShowCard";
import TextTitle from "@/website/common/TextTitle";
import Slider from "react-slick";

export default function FeatureShowList() {
    const settings = {
        className: "center",
        centerPadding: "100px",
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };
    return (
        <>
            <div className="FeatureShowList">
                <div className="container flexSB">
                    <TextTitle small_text="Watch it again" big_text="Feature shows" />
                </div>
                <div className="container">
                    <Slider className="PreviousShowList PLMain" {...settings}>
                        <PreviousShowCard image="/images/prv1.png" title="Live show" event="2">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv2.png" title="Conference" event="7">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Fashion show" event="4">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>{" "}
                        <PreviousShowCard image="/images/prv2.png" title="Caremony" event="0">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                        <PreviousShowCard image="/images/prv3.png" title="Caremony" event="3">
                            <Button color="white">Watch now</Button>
                        </PreviousShowCard>
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .FeatureShowList {
                    padding-top: 200px;
                }
                .slick-arrow {
                    top: -60px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                .showCard {
                    margin-right: 26px;
                }
            `}</style>
        </>
    );
}
