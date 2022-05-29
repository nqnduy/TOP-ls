// import NextPrev from "../NextPrev/index";
import ArrowNext from "@/website/common/ArrowNext";
import ArrowPrev from "@/website/common/ArrowPrev";
import Slider from "react-slick";
import MemberCard from "../../common/Card/MemberCard";
import TextTitle from "../../common/TextTitle";
export default function OurTeam({ type }) {
    const settings = {
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        verticalSwiping: false,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    centerPadding: "0",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    fade: true,
                    centerPadding: "0",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    const members = [
        {
            image: "/images/about1.png",
            name: "Anthony Nguyen",
            role: "Designer",
        },
        {
            image: "/images/about2.png",
            name: "Lam Kha Nhu",
            role: "Marketing",
        },
        {
            image: "/images/about3.png",
            name: "Tony Pham",
            role: "Founder & CEO",
        },
        {
            image: "/images/about1.png",
            name: "Anthony Nguyen",
            role: "Designer",
        },
        {
            image: "/images/about2.png",
            name: "Lam Kha Nhu",
            role: "Marketing",
        },
        {
            image: "/images/about3.png",
            name: "Tony Pham",
            role: "Founder & CEO",
        },
    ];
    return (
        <>
            <div className="OurTeam">
                <div className="OurTeam__wrapper flexSB">
                    <div className="OurTeam__wrapper-inSlider">
                        <Slider {...settings}>
                            {members.map((member, index) => (
                                <MemberCard key={index} data={member} />
                            ))}
                        </Slider>
                    </div>
                    <div className="OurTeam__wrapper-textWrap PRMain">
                        <TextTitle small_text={"Our teams"} big_text={"Many famous celebrities"} />
                        <p className="content">
                            Nifty team is a diverse network of consultants and industry professionals with a global mindset & a collaborative culture. We work
                            to understand your issues
                        </p>
                    </div>
                </div>
                <style jsx global>{`
                    .OurTeam {
                        --arrowPositionTop: 70%;
                        --arrowPositionLeft: 600%;
                        &__wrapper {
                            gap: var(--pdContainer);
                            &-inSlider {
                                width: 60%;
                            }
                            &-textWrap {
                                width: 40%;
                                .content {
                                    margin-bottom: 60px;
                                    width: 80%;
                                    text-align: justify;
                                }
                            }
                        }
                        .slick-arrow {
                            --arrowPosition: 60px;
                            top: var(--arrowPositionTop);
                            transform: translate(var(--arrowPositionLeft));
                        }
                        .slick-slide {
                            &:nth-child(3n + 1) {
                                margin-top: 100px;
                            }
                            &:nth-child(3n + 2) {
                                margin-top: 50px;
                            }
                            &:hover {
                                cursor: pointer;
                                opacity: 1;
                                transition: ease-out 0.4s;
                            }
                        }
                        .MemberCard {
                            margin-right: 20px;
                            transition: ease-out 0.4s;
                        }
                    }
                    @media (max-width: 1450px) {
                        .OurTeam {
                            --arrowPositionTop: 75%;
                            &__wrapper {
                                &-textWrap {
                                    .content {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                    @media (max-width: 1240px) {
                        .OurTeam {
                            --arrowPositionTop: 80%;
                        }
                    }
                    @media (max-width: 1220px) {
                        .OurTeam {
                            --arrowPositionTop: 75%;
                            --arrowPositionLeft: 460%;
                            .slick-arrow {
                                --arrowPosition: var(--cardRange);
                            }
                        }
                    }
                    @media (max-width: 1000px) {
                        .OurTeam {
                            --arrowPositionLeft: 370%;
                            &__wrapper {
                                gap: calc((var(--pdContainer)) - 30px);
                            }
                        }
                    }
                    @media (max-width: 900px) {
                        .OurTeam {
                            --arrowPositionTop: 80%;
                        }
                    }
                    @media (max-width: 820px) {
                        .OurTeam {
                            --arrowPositionLeft: 50%;
                            --arrowPositionTop: 110%;
                            &__wrapper {
                                flex-direction: column-reverse;
                                &-inSlider {
                                    width: 100%;
                                    padding: 0 var(--pdContainer);
                                    .MemberCard {
                                        margin: 0 10px;
                                    }
                                }
                                &-textWrap {
                                    width: 100%;
                                    padding: 0 var(--pdContainer);
                                    .content,
                                    .TextTitle {
                                        margin: 0 auto;
                                        text-align: center;
                                    }
                                    .content {
                                        width: 80%;
                                        margin-bottom: 30px;
                                    }
                                }
                            }
                            .slick-next {
                                left: 48%;
                            }
                            .slick-prev {
                                right: 54%;
                            }
                        }
                    }
                    @media (max-width: 630px) {
                        .OurTeam {
                            .slick-slide {
                                &:nth-child(2n) {
                                    margin-top: 50px;
                                }
                                &:nth-child(2n + 1) {
                                    margin-top: 0px;
                                }
                                &:hover {
                                    cursor: pointer;
                                    opacity: 1;
                                    transition: ease-out 0.4s;
                                }
                            }
                        }
                    }
                    @media (max-width: 450px) {
                        .OurTeam {
                            --arrowPositionLeft: 0%;
                            --arrowPositionTop: 105%;
                            .MemberCard {
                                margin: 0;
                            }
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
