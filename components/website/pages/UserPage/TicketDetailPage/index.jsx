import Button from "@/common/Button/ButtonMain";
import ShowPost from "@/pages/UserPage/TicketDetailPage/ShowPost";
import asset from "@/plugins/assets/asset";
import React from "react";

export default function TicketDetailPage({ show }) {
    return (
        <>
            <div className={`TicketDetail ${show}`}>
                <div className="TicketDetail__info txMain fz-16">
                    <div className="w70">
                        <div className="textWrap">
                            <p className="txMain bold w25">Price</p>
                            <p className="txMain normal w75">Start at $0.99 - $39.50</p>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w25">Category</p>
                            <p className="txMain normal w75">Liveshow</p>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w25">Date & time</p>
                            <div className="txMain normal w75">
                                <p>Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                                <p className="flexAC" style={{ textAlign: "center", gap: 10 }}>
                                    <img src={asset("/images/icons/clock.svg")} alt="" /> Event will start in{" "}
                                    <span className="txMain blue bold">00 : 03 : 27 : 49</span>
                                </p>
                            </div>
                        </div>
                        <div className="textWrap">
                            <p className="txMain bold w25">Location</p>
                            <p className="txMain normal flexCOL w75">
                                Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                                <span className="txMain hoverText hoverText-blue hoverText-small">View map</span>
                            </p>
                        </div>
                    </div>
                    <div className="QRCode flexCOL flexAC">
                        <div className="img">
                            <img src={asset("/images/QRcode.png")} alt="" />
                        </div>
                        <Button>Save ticket to device</Button>
                    </div>
                </div>
                <ShowPost />
            </div>
            <style jsx>{`
                .TicketDetail {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    &__info {
                        display: flex;
                        padding: 32px 30px;
                        background-color: #060270;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        justify-content: space-between;
                        .textWrap {
                            display: flex;
                            align-items: flex-start;
                            margin-bottom: 10px;
                        }
                    }
                    @media (max-width: 700px) {
                        &__info {
                            flex-direction: column;
                            align-items: center;
                            .w70,
                            .QRCode {
                                width: 100%;
                            }
                            .QRCode {
                                .img {
                                    width: 50%;
                                }
                            }
                        }
                    }
                    @media (max-width: 520px) {
                        &__info {
                            .textWrap {
                                flex-direction: column;
                                .w25,
                                .w75 {
                                    width: 100%;
                                }
                            }
                            .QRCode {
                                .img {
                                    width: 65%;
                                }
                            }
                        }
                    }
                }
                .QRCode {
                    margin-top: 20px;
                    width: calc(30% - 40px);
                    .img {
                        width: 100%;
                        height: auto;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </>
    );
}
