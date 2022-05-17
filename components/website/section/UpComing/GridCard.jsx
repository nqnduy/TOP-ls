import ShowCard from "@/website/common/Card/ShowCard";
import SortDropdown from "@/website/common/SortDropDown";
import React from "react";
function GridCard() {
    return (
        <>
            <div className="SortUpcomingShow flexAC PRMain">
                <p className="titleSort txMain purple normal">Sort by:</p>
                <SortDropdown title="Relevance" />
                <SortDropdown title="All categories" />
            </div>
            <div className="GridCard container">
                <ShowCard
                    image="/images/card1.png"
                    time="Feb 27, 2022"
                    location="Ho Chi Minh City"
                    title="This is title of liveshow. Max long two line"
                    ticket="25"
                />
                <ShowCard image="/images/card2.png" time="Feb 27, 2022" location="Paris City" title="France Rock Music Conference March 2022" ticket="25" />
                <ShowCard
                    image="/images/card3.png"
                    time="Mar 10, 2022"
                    location="Ho Chi Minh City"
                    title="Ho Chi Minh City Vietnam Web Submit 2022"
                    ticket="25"
                />
                <ShowCard image="/images/card4.png" time="Mar 10, 2022" location="Ho Chi Minh City" title="Tokyo Digital Conference ShakeUp" ticket="25" />
                <ShowCard
                    image="/images/card1.png"
                    time="Feb 27, 2022"
                    location="Ho Chi Minh City"
                    title="This is title of liveshow. Max long two line"
                    ticket="25"
                />
                <ShowCard image="/images/card2.png" time="Feb 27, 2022" location="Paris City" title="France Rock Music Conference March 2022" ticket="25" />
                <style jsx global>{`
                    .GridCard {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 26px;
                        position: relative;
                    }
                    .SortUpcomingShow {
                        position: absolute;
                        top: 10%;
                        right: 0;
                        .titleSort {
                            margin-right: 10px;
                        }
                        .typeSort:last-child {
                            margin-right: 0;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default GridCard;
