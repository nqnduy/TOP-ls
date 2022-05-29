import asset from "@/plugins/assets/asset";
import ImageWrap from "@/website/common/ImageWrap";
import React from "react";
import { variable } from 'styles/variable';

export default function TestimonialCard() {
    return (
        <>
            <div className="TestimonialCard">
                <div>
                    <p className="TestimonialCard__content content">
                        Lorem ipsum dolor sit amet, consecteturs adipiscing elit. Donec molestie porttitored lorem nec feugiat. Nunc vel felis ornare est
                        laoreet finibus. Proin pretium eleifend quit lorem amet sit tristique.
                    </p>
                    <div className="TestimonialCard__info">
                        <div>
                            <ImageWrap src="/images/avt1.png" gif="/images/gif/50x50.gif" bora={"50%"} />
                            <div className="TestimonialCard__info-text">
                                <p className="content">Anthony Nguyen</p>
                                <p className="headlineSmall">Customer of Workshop</p>
                            </div>
                        </div>
                        <div className="TestimonialCard__info-img">
                            <img src={asset("/images/icons/comment.svg")} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .TestimonialCard {
                    background-color: #fff;
                    border-radius: 15px;
                    padding: 22px 30px;
                    &__info {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        > div:first-child {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-right: -20px;
                            > * {
                                margin-right: 20px;
                            }
                        }
                        &-text {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-start;
                            flex-direction: column;
                            height: 100%;
                            .content {
                                font-weight: 700;
                            }
                            .headlineSmall {
                                font-size: 12px;
                                line-height: 16px;
                                letter-spacing: 0px;
                                color: ${variable.color.primary};
                            }
                        }
                    }
                    &__content {
                        line-height: 30px;
                        padding-bottom: 22px;
                        margin-bottom: 22px;
                        border-bottom: 1px solid rgba(6, 0, 112, 0.1);
                    }
                    .content {
                        font-family: fm-m;
                        color: ${variable.color.primary};
                        @media (max-width: 820px){
                            font-size: 13px;
                            line-height: 20px;
                        }
                    }
                }
                @media (max-width: 1350px) {
                    .TestimonialCard {
                        &__info {
                            > div:first-child {
                                margin-right: -15px;
                                > * {
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 1310px) {
                    .TestimonialCard {
                        &__content {
                            line-height: 26px;
                        }
                    }
                }
                @media (max-width: 1220px) {
                    .TestimonialCard {
                        &__content {
                            line-height: 24px;
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .TestimonialCard {
                        &__info {
                            &-img {
                                width: 10%;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
