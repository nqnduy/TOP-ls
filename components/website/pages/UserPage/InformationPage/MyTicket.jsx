import Button from "@/common/Button/ButtonMain";
import MyTicketCard from "@/common/Card/MyTicketCard";
import SortDropdown from "@/components/website/common/SortDropDown";

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
    const filters = ["Liveshows", "Festival", "Workshops"];
    return (
        <>
            <div className="MyTicket">
                <div className="MyTicket__header">
                    <h3 className="headline">My ticket</h3>
                    <SortDropdown.Single data={filters}>All Categories</SortDropdown.Single>
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
                    &__header {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 40px;
                        .SortDropdown {
                            margin-top: -10px;
                        }
                    }
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
