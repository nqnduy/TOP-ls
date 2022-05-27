import React from "react";
import { variable } from 'styles/variable';
import ImageWrap from "../ImageWrap";
function NewsCard({ image, column, category, title, content, time }) {
    return (
        <>
            <div className={`NewsCard ${column}`}>
                <div className="NewsCard__img">
                    <ImageWrap src={image} gif="/images/gif/495x314.gif" bora={"15px"} />
                </div>
                <div className="NewsCard__wrapText">
                    <div className="timeLocation">
                        <p className="headlineSmall">{category}</p>
                        <span>•</span>
                        <p className="headlineSmall time">{time}</p>
                    </div>
                    {!column ? (
                        <p className="NewsCard__wrapText-title headline overText2">{title}</p>
                    ) : (
                        <p className="NewsCard__wrapText-title content overText2">{title}</p>
                    )}
                    <p className="NewsCard__wrapText-content content overText2">{content}</p>
                </div>
            </div>
            <style jsx global>{`
                .NewsCard {
                    cursor: pointer;
                    .timeLocation {
                        display: flex;
                        width: max-content;
                        flex: auto;
                        margin: 10px 0;
                        overflow: hidden;
                        span {
                            margin: 0 5px;
                            color: ${variable.color.purple};
                        }
                        .headlineSmall {
                            font-family: fm-r;
                            letter-spacing: 0;
                            color: ${variable.color.secondary};
                        }
                        .headlineSmall.time {
                            color: ${variable.color.purple};
                        }
                    }
                    &__img {
                        border-radius: 15px;
                    }
                    &__wrapText {
                        &-title {
                            height: calc(3em + 1vw);
                            &.headline {
                                font-size: 28px;
                                line-height: 40px;
                                width: 95%;
                            }
                            &.content {
                                font-family: fm-m;
                                font-weight: 700px;
                                color: #fff;
                            }
                        }
                        &-content {
                            -webkit-line-clamp: 3;
                            width: 95%;
                        }
                    }
                    &.center,
                    &.right {
                        .NewsCard {
                            &__wrapText {
                                .timeLocation {
                                    margin-bottom: 0;
                                }
                                &-title {
                                    height: calc(2.5em + 1vw);
                                }
                                &-content {
                                    display: none;
                                }
                            }
                        }
                    }
                    &.right {
                        display: flex;
                        align-items: flex-start;
                        height: 100%;
                        .NewsCard {
                            &__img {
                                width: 50%;
                            }
                            &__wrapText {
                                margin-left: 15px;
                                width: 50%;
                                .timeLocation {
                                    margin-top: 0;
                                }
                                &-title {
                                    -webkit-line-clamp: 3;
                                    height: calc(4em + 1vw);
                                }
                            }
                        }
                    }
                }
                @media (max-width: 1200px) {
                    .NewsCard {
                        &.right {
                            .NewsCard {
                                &__wrapText {
                                    .timeLocation {
                                        p {
                                            font-size: 11px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                @media (max-width: 480px) {
                    .NewsCard {
                        &.center {
                            .NewsCard {
                                &__wrapText {
                                    .timeLocation {
                                        p {
                                            font-size: 11px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default NewsCard;
