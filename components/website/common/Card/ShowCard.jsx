import Button from "@/website/common/Button/ButtonMain";
import ImageWrap from "@/website/common/ImageWrap";
import Link from "next/link";
import React from "react";
import { variable } from "styles/variable";

function ShowCard({ data }) {
    const { time, location, image, price, title, ticket } = data;
    return (
        <>
            <Link href="/upcoming-shows/123">
                <div className="showCard">
                    <div>
                        <ImageWrap src={image} gif="/images/gif/343x270.gif" bora={"15px"} />
                    </div>
                    <div className="showCard__bottom">
                        <div className="showCard__bottom-timeLocation">{`${time} • ${location}`}</div>
                        <div className="showCard__bottom-title overText2 ">{title}</div>
                        <pre className="showCard__bottom-desc">
                            <span>Start at</span>
                            <strong className="price">{`$${price}`}</strong>•<p>{`${ticket} TICKETS LEFT`}</p>
                        </pre>
                        <Button width="fullWidth">Get ticket now</Button>
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .showCard {
                    position: relative;
                    cursor: pointer;
                    &__bottom {
                        color: "#fff";
                        padding: 20px;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        background-color: rgba(255, 255, 255, 0.05);
                        &-timeLocation {
                            font-size: 12px;
                            text-transform: uppercase;
                            color: ${variable.color.purple};

                            height: 3.5em;
                            margin-bottom: 5px;
                        }
                        &-title {
                            font-family: fm-m;
                            font-size: 18px;
                            line-height: 26px;
                            color: #fff;

                            height: 3.4em;
                            margin-bottom: 5px;
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
                            @media (max-width: 630px) {
                                font-size: 18px;
                                line-height: 26px;
                            }
                        }
                        &-desc {
                            display: flex;
                            align-items: center;
                            margin-bottom: 12px;
                            color: ${variable.color.purple};
                            text-transform: uppercase;
                            overflow: hidden;
                            gap: 5px;
                            span {
                                color: ${variable.color.secondary};
                            }
                            .price {
                                font-family: fm-b;
                                color: ${variable.color.secondary};
                            }
                            p {
                                color: ${variable.color.blue};
                            }
                        }
                        @media (max-width: 1024px) {
                            font-size: 12px;
                        }
                        @media (max-width: 950px) {
                            font-size: 13px;
                        }
                        @media (max-width: 700px) {
                            font-size: 11px;
                        }
                        @media (max-width: 630px) {
                            font-size: 12px;
                        }
                    }
                    &__link {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
            `}</style>
        </>
    );
}

export default ShowCard;
