import React from "react";
import ImageWrap from "../ImageWrap";
function NewsCard({ image, column, category, title, content, time }) {
    return (
        <>
            <div className={`NewsCard ${column}`}>
                <div className="NewsCard__img">
                    <ImageWrap src={image} gif="/images/gif/495x314.gif" bora={"15px"} />
                </div>
                <div className="NewsCard__wrapText">
                    <div className="flex timeLocation">
                        <p className="txMain fz pink upc normal">{category}</p>
                        <p className="txMain purple">•</p>
                        <p className="txMain purple upc normal">{time}</p>
                    </div>
                    <p className="txMain fz-28 overText2 NewsCard__wrapText-title">{title}</p>
                    <p className="txMain overText2 purple normal NewsCard__wrapText-content">{content}</p>
                </div>
            </div>
            <style jsx>{`
                .NewsCard {
                    cursor: pointer;
                    .timeLocation {
                        width: max-content;
                        flex: auto;
                        margin: 10px 0;
                        gap: 5px;
                        overflow: hidden;
                    }
                    &__img {
                        border-radius: 15px;
                    }
                    &__wrapText {
                        &-title {
                            height: calc(3em + 1vw);
                        }
                        &-content {
                            -webkit-line-clamp: 3;
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
                                    font-size: var(--fzr16);
                                    line-height: var(--lhr16);
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
