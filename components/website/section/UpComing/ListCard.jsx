import React, { useState } from "react";
import Slider from "react-slick";
import ArrowNext from "../../common/ArrowNext";
import ArrowPrev from "../../common/ArrowPrev";
import ShowCard from "../../common/Card/ShowCard";
function ListCard() {
    const [link, setLink] = useState(false);
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        infinite: true,
        verticalSwiping: false,
        slidesToScroll: 1,
        // beforeChange: (oldIndex, newIndex) => {
        //     console.log(`${oldIndex} -> ${newIndex}`);
        // },
        // afterChange: () => {
        //     setLink(false);
        //     console.log("afterChange");
        // },
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 950,
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
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 500,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    arrows: false,
                },
            },
        ],
    };
    const upcomingShows = [
        {
            image: "/images/card1.png",
            time: "Feb 27, 2022",
            location: "Ho Chi Minh City",
            price: 10.5,
            title: "This is title of liveshow. Max long two line",
            ticket: 25,
        },
        {
            image: "/images/card2.png",
            time: "Feb 27, 2022",
            location: "Paris City",
            price: 10.5,
            title: "France Rock Music Conference March 2022",
            ticket: 25,
        },
        {
            image: "/images/card3.png",
            time: "Mar 10, 2022",
            location: "Ho Chi Minh City",
            price: 10.5,
            title: "Ho Chi Minh City Vietnam Web Submit 2022",
            ticket: 25,
        },
        {
            image: "/images/card4.png",
            time: "Mar 10, 2022",
            location: "Tokyo City",
            price: 10.5,
            title: "Tokyo Digital Conference ShakeUp",
            ticket: 25,
        },
    ];
    return (
        <div className="ListCard PLMain">
            <div>
                <Slider {...settings}>
                    {upcomingShows.map((item, index) => {
                        return <ShowCard key={index} data={item} isLink={link} />;
                    })}
                </Slider>
            </div>
            <style jsx global>{`
                .ListCard{

                }
                .slick-arrow {
                    top: -62px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                .slick-slide {
                    border-radius: 15px;
                }
                .showCard {
                    margin-right: var(--cardRange);
                }
                @media (max-width: 1024px) {
                    .ListCard {
                        padding-right: calc((var(--pdContainer)) - (var(--cardRange)));
                        .slick-arrow {
                            --arrowPosition: var(--cardRange);
                        }
                    }
                }
            `}</style>
        </div>
    );
}
ListCard.propTypes = {};

export default ListCard;
