import ArrowNext from "@/components/website/common/ArrowNext";
import ArrowPrev from "@/components/website/common/ArrowPrev";
import MemberCard from "@/components/website/common/Card/MemberCard";
import TextTitle from "@/components/website/common/TextTitle";
import Slider from "react-slick";
export default function TypeCenter() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 2,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 1210,
                settings: {
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 1110,
                settings: {
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    centerMode: true,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    initialSlide: 2,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <>
            <div className="OurTeam">
                <div className="textWrap flexAC flexCOL">
                    <TextTitle small_text={"Our teams"} big_text={"Many famous celebrities"} textAlign="center" />
                    <p className="textWrap__desc txMain fz-16 purple normal">
                        Nifty team is a diverse network of consultants and industry professionals with a global mindset & a collaborative culture. We work to
                        understand your issues
                    </p>
                </div>
                <div className="PLMain">
                    <Slider {...settings}>
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about2.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about1.png" name="Anthony Nguyen" role="Designer" />
                        <MemberCard image="/images/about3.png" name="Anthony Nguyen" role="Designer" />
                    </Slider>
                </div>
            </div>
            <style jsx global>{`
                .OurTeam {
                    .textWrap {
                        width: 100%;
                        text-align: center;
                        &__desc {
                            width: 40%;
                            margin-bottom: 60px;
                            text-align: center;
                        }
                    }

                    .MemberCard {
                        margin-right: 20px;
                        transition: ease-out 0.4s;
                    }
                    .slick-list {
                        padding: 0 !important;
                    }

                    .slick-slide {
                        &:nth-child(3n + 2) {
                            margin-top: 100px;
                            opacity: 0.7;
                        }
                        &:nth-child(3n + 3) {
                            margin-top: 50px;
                            opacity: 0.7;
                        }
                        &:hover {
                            cursor: pointer;
                            opacity: 1;
                            transition: ease-out 0.4s;
                        }
                    }
                }
                @media (max-width: 950px) {
                    .OurTeam {
                        .textWrap {
                            &__desc {
                                width: 45%;
                            }
                        }
                    }
                }
                @media (max-width: 835px) {
                    .OurTeam {
                        --fzr18: 18px;
                        --fzr16: 15px;
                        --fzr21: 19px;
                        .textWrap {
                            &__desc {
                                width: 50%;
                            }
                        }
                    }
                }
                @media (max-width: 750px) {
                    .OurTeam {
                        .textWrap {
                            &__desc {
                                width: 55%;
                            }
                        }
                    }
                }
                @media (max-width: 550px) {
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
                        .textWrap {
                            &__desc {
                                width: 70%;
                            }
                        }
                    }
                }
                @media (max-width: 450px) {
                    .OurTeam {
                        .slick-slide {
                            &:nth-child(n) {
                                margin-top: 0px;
                            }
                        }
                    }
                }
                @media (max-width: 400px) {
                    .OurTeam {
                        .textWrap {
                            &__desc {
                                width: 85%;
                            }
                        }
                        .MemberCard {
                            margin-right: var(--pdContainer);
                            transition: ease-out 0.4s;
                        }
                        .slick-slide {
                            &:nth-child(n) {
                                margin-top: 0px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
