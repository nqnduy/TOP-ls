import Button from "@/common/Button/ButtonMain";
import MyTicketCard from "@/common/Card/MyTicketCard";
import SortDropdown from "@/common/SortDropDown";
import React from "react";

export default function MyTicket() {
    return (
        <>
            <div className="MyTicket">
                <div className="flexSB" style={{ marginBottom: 40 }}>
                    <h3 className="MyTicket__headline txMain bold fz-21">My ticket</h3>
                    <SortDropdown title="All Categories" />
                </div>
                <div className="flexCOL" style={{ gap: 30 }}>
                    {[...Array(2)].map((_, index) => (
                        <MyTicketCard
                            key={index}
                            image="/images/card1.png"
                            title="This is title of liveshow. Max long two line, full will show 3 dots."
                            time="feb 27, 2022"
                            location="ho chi minh">
                            <Button>Check QR Code</Button>
                        </MyTicketCard>
                    ))}
                </div>
            </div>
        </>
    );
}
