import Button from "@/website/common/Button/ButtonMain";
import React from "react";

export default function GetTicket() {
    return (
        <div className="GetTicket flexCOL flexAC">
            <div style={{ borderBottom: "1px dashed #B8B7D0", marginBottom: 30 }}>
                <div className="flex" style={{ justifyContent: "space-between" }}>
                    <p className="txMain bold w30">Price</p>
                    <p className="txMain normal w50">Start at $0.99 - $39.50</p>
                </div>
                <div className="flex" style={{ justifyContent: "space-between" }}>
                    <p className="txMain bold w30">Category</p>
                    <p className="txMain normal w50">Liveshow</p>
                </div>
                <div className="flex" style={{ justifyContent: "space-between" }}>
                    <p className="txMain bold w30">Date & time</p>
                    <p className="txMain normal w50">Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                </div>
                <div className="flex" style={{ justifyContent: "space-between" }}>
                    <p className="txMain bold w30">Location</p>
                    <p className="txMain normal flexCOL w50">
                        Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                        <span className="txMain hoverText hoverText-blue hoverText-small" style={{ cursor: "pointer" }}>
                            View map
                        </span>
                    </p>
                </div>
            </div>
            <p className="txMain normal flexAC" style={{ textAlign: "center", gap: 10 }}>
                <img src="/images/icons/clock.svg" alt="" /> Event will start in <span className="txMain blue bold">00 : 03 : 27 : 49</span>
            </p>
            <Button width="fullWidth">Get ticket now</Button>
            <style jsx>{`
                .GetTicket {
                    height: fit-content;
                    padding: 37px 30px;
                    border-radius: 15px;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    p {
                        margin-bottom: 25px;
                    }
                }
            `}</style>
        </div>
    );
}
