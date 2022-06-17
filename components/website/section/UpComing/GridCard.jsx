import SortDropdown from "@/components/website/common/SortDropDown";
import ShowCard from "@/website/common/Card/ShowCard";
import { useState } from "react";
import { variable } from "styles/variable";
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
    const filters = [
        {
            title: "Relevance",
            options: ["Liveshows", "Festival", "Workshops"],
        },
        {
            title: "All categories",
            options: ["Festival", "EDM", "Class"],
        },
    ];
    const [selectedItem, setSelectedItem] = useState(-1);
    const handleSelect = (idx) => () => {
        setSelectedItem(idx);
    };
    return (
        <>
            <div className="SortUpcomingShow PRMain">
                <p>Sort by:</p>
                <div className="sortGroup">
                    {filters.map((item, index) => (
                        <SortDropdown.Multi
                            key={index}
                            data={item.options}
                            width={140}
                            isShow={index === selectedItem}
                            onClick={index !== selectedItem ? handleSelect(index) : handleSelect(-1)}>
                            {item.title}
                        </SortDropdown.Multi>
                    ))}
                </div>
            </div>
            <div className="GridCard container">
                {upcomingCards.map((card, index) => {
                    return <ShowCard key={index} data={card} />;
                })}
            </div>
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
                    z-index: 100;
                    top: calc(12% - 1vw);
                    right: 0;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    .sortGroup {
                        display: flex;
                        align-items: center;
                    }
                    p {
                        color: ${variable.color.purple};
                        margin-right: 10px;
                    }
                    .typeSort {
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
                @media (max-width: 820px) {
                    .GridCard {
                        margin-top: 50px;
                    }
                    .SortUpcomingShow {
                        top: calc(9% - 1vw);

                        margin-top: 50px;
                        top: 8%;
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
                @media (max-width: 590px) {
                    .GridCard {
                        margin-top: 80px;
                    }
                    .SortUpcomingShow {
                        margin-top: 40px;
                        flex-direction: column;
                        align-items: flex-start;
                        right: 0;
                        .sortGroup {
                            margin-top: 5px;
                        }
                    }
                }
                @media (max-width: 500px) {
                    .SortUpcomingShow {
                        justify-content: center;
                        padding-right: 0px;
                    }
                }
                @media (max-width: 440px) {
                    .GridCard {
                        margin-top: 110px;
                    }
                    .SortUpcomingShow {
                        margin-top: 55px;
                        .sortGroup {
                            flex-direction: column;
                            align-items: flex-start;
                            margin-bottom: -8px;
                            > * {
                                margin-bottom: 8px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default GridCard;
