import asset from "@/plugins/assets/asset";
import Button from "@/website/common/Button/ButtonMain";
import TextTitle from "@/website/common/TextTitle";
import React from "react";

export default function SuccessPage({ transfer = true }) {
    return (
        <>
            <div className="SuccessPage">
                <div className="SuccessPage__detail flexCOL flexAC">
                    <div className="SuccessPage__detail-info">
                        <TextTitle small_text="get ticket" big_text="Completed" />
                        <p className="txMain purple normal fz-16" style={{ marginBottom: 27 }}>
                            Thank you for reorder ticket. Please check QRcode below:
                        </p>
                        <div className="SuccessPage__detail-info--text">
                            <div className="textWrap">
                                <p className="txMain bold w20">Category</p>
                                <p className="txMain normal">Liveshow</p>
                            </div>
                            <div className="textWrap">
                                <p className="txMain bold w20">Date & time</p>
                                <div className="txMain normal">
                                    <p>Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                                    <p className="flexAC" style={{ textAlign: "center", gap: 10 }}>
                                        <img src={asset("/images/icons/clock.svg")} alt="" /> Event will start in{" "}
                                        <span className="txMain blue bold">00 : 03 : 27 : 49</span>
                                    </p>
                                </div>
                            </div>
                            <div className="textWrap">
                                <p className="txMain bold w20">Location</p>
                                <p className="txMain normal flexCOL w55">
                                    Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                                    <span className="txMain hoverText hoverText-blue hoverText-small">View map</span>
                                </p>
                            </div>
                        </div>
                        {transfer ? (
                            <div className="TransferGroup flexAC" style={{ gap: 35 }}>
                                <div className="QRCode">
                                    <img src={asset("/images/QRcode.png")} alt="" />
                                </div>
                                <div className="flexCOL" style={{ gap: 20 }}>
                                    <Button>Save ticket to profile</Button>
                                    <Button>Save ticket to device</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="btnCompleted">
                                <Button>Completed</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .SuccessPage {
                    padding: 200px 0 70px;
                    padding-inline: 200px;
                    @media (max-width: 1024px) {
                        padding: 100px 0 70px;
                    }
                    &__detail {
                        position: relative;
                        margin: 0 auto;
                        width: 60vw;
                        padding: 30px 0;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        background: url(${asset("/images/payment-success.png")}) no-repeat center center/cover;
                        &-info {
                            margin-left: auto;
                            &--text {
                                margin-bottom: 30px;
                                .textWrap {
                                    display: flex;
                                    align-items: flex-start;
                                }
                                p {
                                    margin-bottom: 25px;
                                }
                            }
                            .btnCompleted {
                                margin-bottom: 50px;
                            }
                        }
                    }
                }
                .QRCode {
                    width: 130px;
                    height: auto;
                }
                @media (max-width: 1450px) {
                    .SuccessPage {
                        &__detail {
                            &-info {
                                margin-left: 40%;
                            }
                        }
                    }
                }
                @media (max-width: 1100px) {
                    .SuccessPage {
                        &__detail {
                            &-info {
                                margin-left: 35%;
                            }
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .SuccessPage {
                        &__detail {
                            width: 70vw;
                        }
                    }
                }
                @media (max-width: 820px) {
                    .SuccessPage {
                        &__detail {
                            width: 85vw;
                        }
                    }
                }
                @media (max-width: 660px) {
                    .SuccessPage {
                        &__detail {
                            width: 90vw;
                            &-info {
                                margin-left: 5%;
                            }
                        }
                        .TransferGroup {
                            flex-direction: column;
                            align-items: flex-start;
                        }
                    }
                }
            `}</style>
        </>
    );
}
