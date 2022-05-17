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
                    padding: 60px 0;
                    .typeSort {
                        margin-right: 0;
                    }
                    .paginateArea {
                        margin-top: 40px;
                    }
                    &__grid {
                        display: grid;
                        gap: 26px;
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
            `}</style>
        </>
    );
}
