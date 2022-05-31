import TextUnderline from "@/components/website/common/Text/TextUnderline";
import asset from "@/plugins/assets/asset";
import Button from "@/website/common/Button/ButtonMain";
import TextTitle from "@/website/common/TextTitle";
import React from "react";
import { variable } from 'styles/variable';

export default function SuccessPage({ transfer = false }) {
    return (
        <>
            <div className="SuccessPage">
                <div className="SuccessPage__detail">
                    <div className="SuccessPage__detail-info">
                        <TextTitle small_text="get ticket" big_text="Completed" />
                        <p className="content">Thank you for reorder ticket. Please check QRcode below:</p>
                        <div className="SuccessPage__detail-info--text">
                            <div className="textWrap">
                                <p className="title">Category</p>
                                <p>Liveshow</p>
                            </div>
                            <div className="textWrap">
                                <p className="title">Date & time</p>
                                <div>
                                    <p>Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                                    <p className="eventStart">
                                        <img src={asset("/images/icons/clock.svg")} alt="" />
                                        <p>Event will start in</p>
                                        <span>00 : 03 : 27 : 49</span>
                                    </p>
                                </div>
                            </div>
                            <div className="textWrap">
                                <p className="title">Location</p>
                                <p className="txMain normal flexCOL w55">
                                    Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                                    <TextUnderline type="small" color={variable.color.blue} className="viewMore">
                                        View map
                                    </TextUnderline>
                                </p>
                            </div>
                        </div>
                        {!transfer ? (
                            <div className="TransferGroup">
                                <div className="QRCode">
                                    <img src={asset("/images/QRcode.png")} alt="" />
                                </div>
                                <div className="TransferGroup__btn">
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
            <style jsx global>{`
                .SuccessPage {
                    padding: 200px 0 70px;
                    @media (max-width: 1024px) {
                        padding: 100px 0 70px;
                    }
                    &__detail {
                        position: relative;
                        width: 60vw;
                        margin: 0 auto;
                        padding: 30px 0;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        background: url(${asset("/images/payment-success.png")}) no-repeat center center/cover;

                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        &-info {
                            margin-left: auto;
                            .content {
                                margin-bottom: 27px;
                            }
                            &--text {
                                margin-bottom: 30px;
                                .textWrap {
                                    display: flex;
                                    align-items: flex-start;
                                    .title {
                                        font-family: fm-b;
                                        font-weight: 700;

                                        width: 20%;
                                    }
                                    .eventStart {
                                        display: flex;
                                        align-items: center;

                                        text-align: center;
                                        margin-right: -10px;
                                        p {
                                            margin-bottom: 0;
                                        }
                                        span {
                                            font-family: fm-m;
                                            font-weight: 700;
                                            color: ${variable.color.blue};
                                        }
                                        > * {
                                            margin-right: 10px;
                                        }
                                    }
                                }
                                p {
                                    color: #fff;
                                    margin-bottom: 25px;
                                }
                            }
                            .btnCompleted {
                                margin-bottom: 50px;
                            }
                            .TransferGroup {
                                display: flex;
                                align-items: center;
                                margin-right: -35px;

                                > * {
                                    margin-right: 35px;
                                }
                                &__btn {
                                    display: flex;
                                    flex-direction: column;
                                    margin-bottom: -20px;
                                    > * {
                                        margin-bottom: 20px;
                                    }
                                }
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

                            margin-right: 0;
                            margin-bottom: -20px;

                            > * {
                                margin-bottom: 0;
                                margin-bottom: 20px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
