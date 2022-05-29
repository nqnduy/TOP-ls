import ShowCard from "@/website/common/Card/ShowCard";
import SortDropdown from "@/website/common/SortDropDown";
import React from "react";
import { variable } from 'styles/variable';
function GridCard() {
    const upcomingCards = [
        {
            image: "/images/card1.png",
            price: 10.5,
            time: "Feb 27, 2022",
            location: "Ho Chi Minh City",
            title: "This is title of liveshow. Max long two line",
            ticket: "25",
        },
        {
            image: "/images/card2.png",
            price: 10.5,
            time: "Feb 27, 2022",
            location: "Paris City",
            title: "France Rock Music Conference March 2022",
            ticket: "25",
        },
        {
            image: "/images/card3.png",
            price: 10.5,
            time: "Mar 10, 2022",
            location: "Ho Chi Minh City",
            title: "Ho Chi Minh City Vietnam Web Submit 2022",
            ticket: "25",
        },
        {
            image: "/images/card4.png",
            price: 10.5,
            time: "Mar 10, 2022",
            location: "Ho Chi Minh City",
            title: "Tokyo Digital Conference ShakeUp",
            ticket: "25",
        },
        {
            image: "/images/card1.png",
            price: 10.5,
            time: "Feb 27, 2022",
            location: "Ho Chi Minh City",
            title: "This is title of liveshow. Max long two line",
            ticket: "25",
        },
        {
            image: "/images/card2.png",
            price: 10.5,
            time: "Feb 27, 2022",
            location: "Paris City",
            title: "France Rock Music Conference March 2022",
            ticket: "25",
        },
    ];
    return (
        <>
            <div className="SortUpcomingShow PRMain">
                <p>Sort by:</p>
                <SortDropdown>Relevance</SortDropdown>
                <SortDropdown>All categories</SortDropdown>
            </div>
            <div className="GridCard container">
                {upcomingCards.map((card, index) => {
                    return <ShowCard key={index} data={card} />;
                })}
                <style jsx global>{`
                    .GridCard {
                        --COL: 3;
                        --gap: 26px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(calc((100% / var(--COL)) - ((var(--gap) * 2) / var(--COL))), 1fr));
                        gap: var(--gap);
                        position: relative;
                        width: 100%;
                    }
                    .SortUpcomingShow {
                        position: absolute;
                        top: calc(12% - 1vw);
                        right: 0;
                        display: flex;
                        align-items: center;
                        p {
                            color: ${variable.color.purple};
                            margin-right: 10px;
                        }
                        .typeSort{
                            font-family: fm-m;
                        }
                        .typeSort:last-child {
                            margin-left: 45px;
                        }
                    }
                    @media (max-width: 920px) {
                        .GridCard {
                            --COL: 2;
                        }
                        .SortUpcomingShow {
                            top: calc(8% - 1vw);
                        }
                    }
                    @media (max-width: 770px) {
                        .SortUpcomingShow {
                            top: calc(9% - 1vw);
                        }
                    }
                    @media (max-width: 700px) {
                        .GridCard {
                            margin-top: 40px;
                        }
                        .SortUpcomingShow {
                            margin-top: 50px;
                            top: 9%;
                            transform: translateY(-9%);
                            left: var(--pdContainer);
                            right: var(--pdContainer);
                        }
                    }
                    @media (max-width: 630px) {
                        .GridCard {
                            --COL: 1;
                            margin-top: 50px;
                        }
                        .SortUpcomingShow {
                            margin-top: 40px;
                            top: 4%;
                            transform: translateY(-4%);
                        }
                    }
                    @media (max-width: 500px) {
                        .SortUpcomingShow {
                            justify-content: center;
                            padding-right: 0px;
                        }
                    }
                    @media (max-width: 440px) {
                        .SortUpcomingShow {
                            margin-top: 55px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default GridCard;
