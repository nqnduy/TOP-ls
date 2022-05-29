import NewsCard from "@/website/common/Card/NewsCard";
import Paginate from "@/website/common/Paginate";
import SortDropdown from "@/website/common/SortDropDown";
import TextTitle from "@/website/common/TextTitle";
import React from "react";

export default function NewsPromotionList() {
    const news = [
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new2.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new3.png",
            category: "News",
            time: "Feb 37, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new3.png",
            category: "News",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new3.png",
            category: "News",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
        {
            image: "/images/new3.png",
            category: "News",
            time: "Feb 27, 2022",
            title: "The point of using Lorem Ipsum is that it has a more-or",
        },
    ];
    return (
        <>
            <div className="NewsPromotion">
                <div className="container">
                    <div className="NewsPromotion__title">
                        <TextTitle big_text="News & Promotion" />
                        <SortDropdown>All categories</SortDropdown>
                    </div>
                    <div className="NewsPromotion__grid">
                        {news.map((item, index) => (
                            <NewsCard key={index} column="center" data={item} />
                        ))}
                    </div>
                    <div className="paginateArea">
                        <Paginate totalPage={20} />
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .NewsPromotion {
                    --newsCOL: 4;

                    padding: 60px 0;
                    .paginateArea {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        margin-top: 40px;
                    }
                    &__title {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    &__grid {
                        display: flex;
                        flex-wrap: wrap;
                        gap: var(--cardRange);
                        .NewsCard {
                            width: calc((100% / var(--newsCOL)) - ((var(--cardRange) * (var(--newsCOL) - 1)) / var(--newsCOL)));
                        }
                    }

                    /*  Responsive   */
                    @media (max-width: 1080px) {
                        --fzrMain: 12px;
                    }
                    &__grid {
                        @media (max-width: 989px) {
                            --cardRange: 24px;
                        }
                        @media (max-width: 950px) {
                            --cardRange: 20px;
                        }
                        @media (max-width: 890px) {
                            --cardRange: 18px;
                        }
                        @media (max-width: 820px) {
                            --newsCOL: 3;
                            --cardRange: 20px;
                        }
                        @media (max-width: 720px) {
                            --cardRange: 15px;
                        }
                        @media (max-width: 650px) {
                            --newsCOL: 2;
                            --fzr16: 14px;
                            --cardRange: 26px;
                        }
                        @media (max-width: 500px) {
                            --newsCOL: 1;
                            --fzr16: 16px;
                            --cardRange: 26px;
                        }
                        .NewsCard__wrapText {
                            .headlineSmall {
                                @media (max-width: 989px) {
                                    font-size: 11px;
                                }
                                @media (max-width: 820px) {
                                    font-size: 12px;
                                }
                                @media (max-width: 720px) {
                                    font-size: 11px;
                                }
                                @media (max-width: 650px) {
                                    font-size: 13px;
                                }
                                @media (max-width: 500px) {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                    &__title {
                        @media (max-width: 500px) {
                            flex-direction: column;
                            margin-bottom: 40px;
                        }
                    }
                }
            `}</style>
        </>
    );
}
