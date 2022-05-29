import NewsCard from "@/common/Card/NewsCard";
import TextUnderline from "@/common/Text/TextUnderline";
import { variable } from "styles/variable";
function WhatNew({ hasViewMore = true, headline }) {
    const news = [
        {
            image: "/images/new1.png",
            category: "News",
            time: "Feb 27, 2022",
            title: "Distract by the readable content of a page",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new3.png",
            category: "News",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new4.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The majority have suffered alteration in some form, by injected humour",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new5.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Many desktop publishing packages",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new6.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Various versions have evolved over the years, sometimes by accident",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
        {
            image: "/images/new7.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "There are many variations of passages of Lorem",
            content:
                "Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s",
        },
    ];
    return (
        <>
            <div className="WhatNew">
                <div className="container" style={{ textAlign: "center", marginBottom: 50 }}>
                    {headline}
                </div>
                <div className="NewGrid container">
                    <div className="NewGrid__MainCOL">
                        <NewsCard data={news[0]} />
                    </div>
                    <div className="NewGrid__CenterCOL">
                        <div>
                            <NewsCard data={news[1]} column="center" />
                            <NewsCard data={news[2]} column="center" />
                        </div>
                    </div>
                    <div className="NewGrid__LastCOL">
                        <div>
                            <NewsCard data={news[3]} column="right" />
                            <NewsCard data={news[4]} column="right" />
                            <NewsCard data={news[5]} column="right" />
                            <NewsCard data={news[6]} column="right" />
                        </div>
                    </div>
                </div>
                {hasViewMore && (
                    <div className="centerVM">
                        <TextUnderline type="small" color={variable.color.secondary} className="viewMore">
                            View more
                        </TextUnderline>
                    </div>
                )}
            </div>
            <style jsx global>{`
                .WhatNew {
                    .NewGrid {
                        display: flex;
                        gap: 40px;
                        justify-content: space-between;
                        margin: 0 auto;
                        &__MainCOL {
                            width: 45%;
                            height: 100%;
                        }
                        &__CenterCOL {
                            width: 23%;
                            flex-grow: 1;
                            > div {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                height: 100%;
                            }
                        }
                        &__LastCOL {
                            width: 27%;
                            flex-grow: 1;

                            > div {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                height: 100%;
                            }
                            .NewsCard__img {
                                height: 100%;
                                .ImageWrap {
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 1450px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 30px;
                        }
                    }
                }
                @media (max-width: 1300px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 20px;
                        }
                    }
                }
                @media (max-width: 1100px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 15px;
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 30px;
                            &__MainCOL {
                                width: 75%;
                            }
                            &__CenterCOL {
                                width: 40%;
                                height: 100%;
                                > div {
                                    gap: 30px;
                                }
                            }
                            &__LastCOL {
                                display: none;
                            }
                        }
                    }
                }
                @media (max-width: 850px) {
                    .WhatNew {
                        --fzr28: 26px;
                        --lhr28: 35px;

                        .NewGrid {
                            gap: 20px;
                            &__MainCOL {
                                width: 73%;
                            }
                            &__CenterCOL {
                                > div {
                                    gap: 20px;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 660px) {
                    .WhatNew {
                        --fzr28: 23px;
                        --lhr28: 30px;
                        .NewGrid {
                            gap: 15px;
                        }
                    }
                }
                @media (max-width: 650px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 30px;
                            flex-direction: column;
                            &__MainCOL {
                                width: 100%;
                            }
                            &__CenterCOL {
                                width: 100%;
                                & > div {
                                    gap: 30px !important;
                                    flex-direction: row;
                                }
                                &-item {
                                    width: calc((100% - 20px) / 2);
                                }
                            }
                        }
                    }
                }
                @media (max-width: 480px) {
                    .WhatNew {
                        .NewGrid {
                            gap: 20px !important;
                            &__CenterCOL {
                                > div {
                                    gap: 20px !important;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default WhatNew;
