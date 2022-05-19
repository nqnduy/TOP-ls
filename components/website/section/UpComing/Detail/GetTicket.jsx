import Button from "@/website/common/Button/ButtonMain";
import React from "react";

export default function GetTicket() {
    return (
        <div className="GetTicket flexCOL flexAC">
            <div className="GetTicket__content">
                <div className="flex jc-sb">
                    <p className="txMain bold w30">Price</p>
                    <p className="txMain normal w50">Start at $0.99 - $39.50</p>
                </div>
                <div className="flex jc-sb">
                    <p className="txMain bold w30">Category</p>
                    <p className="txMain normal w50">Liveshow</p>
                </div>
                <div className="flex jc-sb">
                    <p className="txMain bold w30">Date & time</p>
                    <p className="txMain normal w50">Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                </div>
                <div className="flex jc-sb">
                    <p className="txMain bold w30">Location</p>
                    <p className="txMain normal flexCOL w50">
                        Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                        <span className="txMain hoverText hoverText-blue hoverText-small" style={{ cursor: "pointer" }}>
                            View map
                        </span>
                    </p>
                </div>
            </div>
            <p className="GetTicket__time txMain normal flexAC">
                <span className="flexAC" style={{ gap: 10 }}>
                    <img src="/images/icons/clock.svg" alt="" /> <span>Event will start in</span>
                </span>
                <span className="txMain blue bold">00 : 03 : 27 : 49</span>
            </p>
            <Button width="fullWidth">Get ticket now</Button>
            <style jsx>{`
                .GetTicket {
                    height: fit-content;
                    padding: 37px 30px;
                    border-radius: 15px;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                    &__content {
                        border-bottom: 1px dashed #b8b7d0;
                        margin-bottom: 30px;
                    }
                    p {
                        margin-bottom: 25px;
                    }
                    &__time {
                        text-align: center;
                        gap: 10px;
                    }
                }
                @media (max-width: 620px) {
                    .GetTicket {
                        .flex.jc-sb {
                            flex-direction: column;
                            .w30,
                            .w50 {
                                width: 100%;
                            }
                            p {
                                &:nth-child(2n + 1) {
                                    margin-bottom: 8px;
                                }
                                &:nth-child(2n) {
                                    margin-bottom: 20px;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 420px) {
                    .GetTicket {
                        &__content {
                            margin-bottom: 15px;
                        }
                        &__time {
                            gap: 0;
                            flex-direction: column;
                            align-items: flex-start;
                            & > span:first-child {
                                margin-left: -30px;
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}
