/* eslint-disable @next/next/no-img-element */
import Button from "@/common/Button/ButtonMain";
import MyTicketCard from "@/common/Card/MyTicketCard";
import Paginate from "@/common/Paginate";
import SortDropdown from "@/components/website/common/SortDropDown";
import React from "react";
import { variable } from "styles/variable";

export default function PurchaseHistory() {
    const cards = [
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots",
            time: "Feb 27, 2022",
            location: "ho chi minh",
        },
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots",
            time: "Feb 27, 2022",
            location: "ho chi minh",
        },
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots",
            time: "Feb 27, 2022",
            location: "ho chi minh",
        },
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots",
            time: "Feb 27, 2022",
            location: "ho chi minh",
        },
    ];
    return (
        <>
            <div className="PurchaseHistory">
                <div className="PurchaseHistory__top">
                    <h2 className="headline">Purchase history</h2>
                    <div className="PurchaseHistory__top-sort">
                        <p className="titleSort">Sort by:</p>
                        <SortDropdown>Relevance</SortDropdown>
                        <SortDropdown>All categories</SortDropdown>
                    </div>
                </div>
                <div className="PurchaseHistory__cardList" style={{ gap: 30 }}>
                    {cards.map((card, index) => (
                        <MyTicketCard key={index} gap={30} data={card}>
                            <Button>
                                Watch now
                                <img src="/images/icons/playv1.svg" alt="" />
                            </Button>
                        </MyTicketCard>
                    ))}
                </div>
                <Paginate totalPage={10} />
            </div>
            <style jsx global>{`
                .PurchaseHistory {
                    &__top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 24px;
                        .headline {
                            font-size: 21px;
                            line-height: 32px;

                            /*  Responsive   */
                            @media (max-width: 1220px) {
                                font-size: 19px;
                                line-height: 28px;
                            }
                            @media (max-width: 1024px) {
                                font-size: 17px;
                                line-height: 26px;
                            }
                            @media (max-width: 830px) {
                                font-size: 16px;
                                line-height: 26px;
                            }
                        }
                        &-sort {
                            display: flex;
                            align-items: center;
                            .typeSort {
                                font-family: fm-m;
                            }
                            .titleSort {
                                margin-right: 5px;
                                color: ${variable.color.purple};
                            }
                        }
                    }
                    &__cardList {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 40px;
                    }
                    .Button {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    @media (max-width: 620px) {
                        .PurchaseHistory {
                            &__top {
                                flex-direction: column;
                                align-items: flex-start;
                                .headline {
                                    margin-bottom: 15px;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
