import React from "react";
import Slider from "react-slick";
import ArrowNext from "../../common/ArrowNext";
import ArrowPrev from "../../common/ArrowPrev";
import ShowCard from "../../common/Card/ShowCard";

function ListCard() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    arrows: false,
                },
            },
        ],
    };
    return (
        <div className="ListCard PLMain">
            <div>
                <Slider {...settings}>
                    <ShowCard
                        image="/images/card1.png"
                        time="Feb 27, 2022"
                        location="Ho Chi Minh City"
                        title="This is title of liveshow. Max long two line"
                        ticket="25"
                    />
                    <ShowCard image="/images/card2.png" time="Feb 27, 2022" location="Paris City" title="France Rock Music Conference March 2022" ticket="25" />
                    <ShowCard
                        image="/images/card3.png"
                        time="Mar 10, 2022"
                        location="Ho Chi Minh City"
                        title="Ho Chi Minh City Vietnam Web Submit 2022"
                        ticket="25"
                    />
                    <ShowCard image="/images/card4.png" time="Mar 10, 2022" location="Ho Chi Minh City" title="Tokyo Digital Conference ShakeUp" ticket="25" />
                </Slider>
            </div>

            <style jsx global>{`
                .slick-arrow {
                    top: -62px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                .showCard {
                    margin-right: var(--cardRange);
                }
                @media (max-width: 1024px) {
                    .ListCard {
                        padding-right: calc((var(--pdContainer)) - (var(--cardRange)));
                    }
                }
                @media (max-width: 500px) {
                    .ListCard {
                        & > div {
                            padding-inline: 15px;
                        }

                        .slick-arrow {
                            top: 52%;
                            &.slick-next {
                                right: -22px;
                            }
                            &.slick-prev {
                                right: 0;
                                left: -47px;
                            }
                        }
                    }
                }
                @media (max-width: 400px) {
                    .ListCard {
                        & > div {
                            padding-inline: 0px;
                        }
                    }
                }
            `}</style>
        </div>
    );
}
ListCard.propTypes = {};

export default ListCard;
