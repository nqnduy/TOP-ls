import ImageWrap from "@/common/ImageWrap";
import React from "react";
export default function MyTicketCard({ data = {}, children, gap = 20 }) {
    const { image, title, time, location } = data;
    return (
        <>
            <div className="MyTicketCard">
                <div className="MyTicketCard__wrap">
                    <div className="MyTicketCard__wrap-img">
                        <ImageWrap src={image} gif="/images/gif/190x140.gif" bora={"15px"} />
                    </div>
                    <div className="MyTicketCard__wrap-text">
                        <p className="headline overText2">{title}</p>
                        <p className="headlineSmall">{`${time} • ${location}`}</p>
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .MyTicketCard {
                    padding: 10px;
                    border-radius: 15px;
                    background-color: rgba(255, 255, 255, 0.03);
                    cursor: pointer;
                    &__wrap {
                        display: flex;
                        gap: ${gap}px;
                        height: 100%;
                        &-img {
                            height: 102%;
                        }
                        &-text {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 80%;
                            .headline {
                                font-size: 18px;
                                line-height: 26px;
                                font-weight: 500;
                                margin-bottom: 8px;
                                height: calc(2.5em + 5px);
                                width: 95%;
                                /*  Responsive   */
                                @media (max-width: 1220px) {
                                    font-size: 16px;
                                    line-height: 24px;
                                }
                                @media (max-width: 830px) {
                                    font-size: 15px;
                                    line-height: 20px;
                                }
                                @media (max-width: 730px) {
                                    font-size: 14px;
                                }
                            }
                            .headlineSmall {
                                font-size: 12px;
                                line-height: 16px;
                                letter-spacing: 0px;
                                margin-bottom: 8px;
                                color: #fff;
                            }
                        }
                    }
                    @media (max-width: 600px) {
                        &__wrap {
                            flex-direction: column;
                            &-text {
                                width: 100%;
                                .headline {
                                    margin-bottom: 10px;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
