import NewsCard from "@/website/common/Card/NewsCard";
import Paginate from "@/website/common/Paginate";
import SortDropdown from "@/website/common/SortDropDown";
import TextTitle from "@/website/common/TextTitle";
import React from "react";

export default function NewsPromotionList() {
    return (
        <>
            <div className="NewsPromotion">
                <div className="container">
                    <div className="flexSB">
                        <TextTitle big_text="News & Promotion" />
                        <SortDropdown title="All categories" />
                    </div>
                    <div className="NewsPromotion__grid">
                        {[...Array(4)].map((item, index) => (
                            <NewsCard
                                key={index}
                                column="center"
                                image="/images/new2.png"
                                category="Promotion"
                                time="Feb 27, 2022"
                                title="The point of using Lorem Ipsum is that it has a more-or"
                            />
                        ))}
                        {[...Array(4)].map((item, index) => (
                            <NewsCard
                                key={index}
                                column="center"
                                image="/images/new3.png"
                                category="News"
                                time="Feb 27, 2022"
                                title="The point of using Lorem Ipsum is that it has a more-or"
                            />
                        ))}
                    </div>
                    <div className="flexCT paginateArea">
                        <Paginate totalPage={20} />
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .NewsPromotion {
                    --newsCOL: 4;

                    padding: 60px 0;
                    .typeSort {
                        margin-right: 0;
                    }
                    .paginateArea {
                        margin-top: 40px;
                    }
                    &__grid {
                        display: flex;
                        flex-wrap: wrap;
                        gap: var(--cardRange);
                        .NewsCard {
                            width: calc((100% / var(--newsCOL)) - ((var(--cardRange) * (var(--newsCOL) - 1)) / var(--newsCOL)));
                        }
                    }
                }
                @media (max-width: 1080px) {
                    .NewsPromotion {
                        --fzrMain: 12px;
                    }
                }
                @media (max-width: 989px) {
                    .NewsPromotion__grid {
                        --fzrMain: 11px;
                        --cardRange: 24px;
                    }
                }
                @media (max-width: 950px) {
                    .NewsPromotion__grid {
                        --cardRange: 20px;
                    }
                }
                @media (max-width: 890px) {
                    .NewsPromotion__grid {
                        --cardRange: 18px;
                    }
                }
                @media (max-width: 820px) {
                    .NewsPromotion__grid {
                        --newsCOL: 3;
                        --fzrMain: 12px;
                        --cardRange: 20px;
                    }
                }
                @media (max-width: 720px) {
                    .NewsPromotion__grid {
                        --fzrMain: 11px;
                        --cardRange: 15px;
                    }
                }
                @media (max-width: 650px) {
                    .NewsPromotion__grid {
                        --newsCOL: 2;
                        --fzr16: 14px;
                        --fzrMain: 13px;
                        --cardRange: 26px;
                    }
                }
                @media (max-width: 500px) {
                    .NewsPromotion {
                        .container {
                            > div {
                                flex-direction: column;
                                margin-bottom: 40px;
                            }
                        }
                        &__grid {
                            --newsCOL: 1;
                            --fzr16: 16px;
                            --fzrMain: 14px;
                            --cardRange: 26px;
                        }
                    }
                }
            `}</style>
        </>
    );
}
