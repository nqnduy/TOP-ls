import NewsCard from "../../common/Card/NewsCard";
function WhatNew({ hasViewMore = true, headline }) {
    return (
        <>
            <div className="WhatNew">
                <div className="container" style={{ textAlign: "center", marginBottom: 50 }}>
                    {headline}
                </div>
                <div className="NewGrid container flex">
                    <div className="NewGrid__MainCOL">
                        <NewsCard
                            image="/images/new1.png"
                            category="News"
                            time="Feb 27, 2022"
                            title="Distract by the readable content of a page"
                            content="Lorem Ipsum is simply dummy text of the printing ets and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s. Lorem Ipsum has been the industry's standard text ever since the 1500s"
                        />
                    </div>
                    <div className="NewGrid__CenterCOL">
                        <div className="flexCOL" style={{ height: "100%" }}>
                            <div className="NewGrid__CenterCOL-item">
                                <NewsCard
                                    image="/images/new2.png"
                                    column="center"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="The point of using Lorem Ipsum is that it has a more-or"
                                />
                            </div>
                            <div className="NewGrid__CenterCOL-item">
                                <NewsCard
                                    image="/images/new3.png"
                                    column="center"
                                    category="News"
                                    time="Feb 27, 2022"
                                    title="The point of using Lorem Ipsum is that it has a more-or"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="NewGrid__LastCOL">
                        <div className="flexCOL" style={{ height: "100%" }}>
                            <div>
                                <NewsCard
                                    image="/images/new4.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="The majority have suffered alteration in some form, by injected humour"
                                />
                            </div>
                            <div>
                                <NewsCard
                                    image="/images/new5.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="Many desktop publishing packages"
                                />
                            </div>
                            <div>
                                <NewsCard
                                    image="/images/new6.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="Various versions have evolved over the years, sometimes by accident"
                                />
                            </div>
                            <div>
                                <NewsCard
                                    image="/images/new7.png"
                                    column="right"
                                    category="Promotion"
                                    time="Feb 27, 2022"
                                    title="There are many variations of passages of Lorem"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {hasViewMore && (
                    <div className="flexCT" style={{ marginTop: 40 }}>
                        <p className="txMain pink bold hoverText hoverText-pink hoverText-small">View More</p>
                    </div>
                )}
                <style jsx>{`
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
                            }
                            &__LastCOL {
                                width: 27%;
                                flex-grow: 1;
                            }
                        }
                    }
                    .flexCOL {
                        justify-content: space-between;
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
                                    .flexCOL {
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
                                    .flexCOL {
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
                                &__MainCOL {
                                }
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
                                    .flexCOL {
                                        gap: 20px !important;
                                    }
                                }
                            }
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default WhatNew;
