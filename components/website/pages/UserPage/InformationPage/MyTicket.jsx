import Button from "@/common/Button/ButtonMain";
import MyTicketCard from "@/common/Card/MyTicketCard";
import SortDropdown from "@/common/SortDropDown";
import React from "react";

export default function MyTicket() {
    const cards = [
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots.",
            time: "feb 27, 2022",
            location: "ho chi minh",
        },
        {
            image: "/images/card1.png",
            title: "This is title of liveshow. Max long two line, full will show 3 dots.",
            time: "feb 27, 2022",
            location: "ho chi minh",
        },
    ];
    return (
        <>
            <div className="MyTicket">
                <div className="flexSB" style={{ marginBottom: 40 }}>
                    <h3 className="headline">My ticket</h3>
                    <SortDropdown>All Categories</SortDropdown>
                </div>
                <div className="MyTicket__list">
                    {cards.map((item, index) => (
                        <MyTicketCard key={index} data={item}>
                            <Button>Check QR Code</Button>
                        </MyTicketCard>
                    ))}
                </div>
            </div>
            <style jsx global>{`
                .MyTicket {
                    .typeSort {
                        font-family: fm-m;
                    }
                    .headline {
                        font-size: 21px;
                        line-height: 32px;
                        margin-bottom: 28px;

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
                    &__list {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: -30px;
                        .MyTicketCard {
                            margin-bottom: 30px;
                        }
                    }
                }
            `}</style>
        </>
    );
}
