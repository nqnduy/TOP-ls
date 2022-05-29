import TextUnderline from '@/common/Text/TextUnderline';
import ButtonMain from "@/website/common/Button/ButtonMain";
import React from "react";
import { variable } from 'styles/variable';

export default function GetTicket() {
    return (
        <div className="GetTicket">
            <div className="GetTicket__content">
                <div>
                    <p className="title content w30">Price</p>
                    <p className="content w50">Start at $0.99 - $39.50</p>
                </div>
                <div>
                    <p className="title content w30">Category</p>
                    <p className="content w50">Liveshow</p>
                </div>
                <div>
                    <p className="title content w30">Date & time</p>
                    <p className="content w50">Wed, March 26, 2022 1:30 PM – 7:00 PM</p>
                </div>
                <div>
                    <p className="title content w30">Location</p>
                    <p className="content w50">
                        Xhome Building, 1st floor, 331 Ben Van Don, Ward 1, District 4, Ho Chi Minh
                        <TextUnderline type="small" color={variable.color.blue} className="viewMore">
                            View map
                        </TextUnderline>
                    </p>
                </div>
            </div>
            <p className="GetTicket__time">
                <span>
                    <img src="/images/icons/clock.svg" alt="" /> <span>Event will start in</span>
                </span>
                <span className="remaining">00 : 03 : 27 : 49</span>
            </p>
            <ButtonMain width="fullWidth">Get ticket now</ButtonMain>
            <style jsx global>{`
                .GetTicket {
                    height: fit-content;
                    padding: 37px 30px;
                    border-radius: 15px;
                    box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);

                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    &__content {
                        border-bottom: 1px dashed #b8b7d0;
                        margin-bottom: 30px;
                        > div {
                            display: flex;
                            justify-content: space-between;
                            .title {
                                font-family: fm-m;
                                font-weight: 700;
                                color: #fff;
                            }
                            .content {
                                color: #fff;
                            }
                            &:last-child {
                                .detail {
                                    display: flex;
                                    flex-direction: column;
                                    .viewMore {
                                        margin-top: 5px;
                                    }
                                }
                            }
                        }
                    }
                    p {
                        margin-bottom: 25px;
                    }
                    &__time {
                        display: flex;
                        align-items: center;

                        text-align: center;
                        gap: 10px;
                        > span:first-child {
                            color: #fff;
                            display: flex;
                            align-items: center;
                            margin-right: -5px;
                            > * {
                                margin-right: 5px;
                            }
                        }
                        .remaining {
                            font-family: fm-m;
                            font-weight: 700;
                            color: ${variable.color.blue};
                        }
                    }
                }
                @media (max-width: 620px) {
                    .GetTicket {
                        &__content {
                            > div {
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
                                margin-left: -22px;
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}
