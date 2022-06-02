import ButtonPlay from "@/website/common/Button/ButtonPlay";
import ImageWrap from "@/website/common/ImageWrap";
import React from "react";
import { variable } from "styles/variable";

export default function GalleryCard({ data }) {
    const { image, title, time, type } = data;
    return (
        <div className="GalleryCard">
            <div className="GalleryCard-content">
                <div className="img">
                    <ImageWrap src={image} gif="/images/gif/295x370.gif" bora={"15px"} />
                </div>
                <div className="layer"></div>
                <div className="textWrapLayer">
                    <div>
                        <p className="textWrapLayer__title">{title}</p>
                        <div className="textWrapLayer__desc">
                            <p className="type">{type}</p>
                            <p>{`• ${time}`}</p>
                        </div>
                    </div>
                    <ButtonPlay />
                </div>
            </div>
            <style jsx>{`
                .GalleryCard {
                    &-content {
                        position: relative;
                        .textWrapLayer {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            &__title {
                                font-family: fm-m;
                                font-size: 21px;
                                font-weight: 700;

                                line-height: 32px;
                                color: #fff;

                                margin-bottom: 6px;

                                /*  Responsive   */
                                @media (max-width: 1220px) {
                                    font-size: 19px;
                                    line-height: 28px;
                                }
                                @media (max-width: 1024px) {
                                    font-size: 17px;
                                    line-height: 26px;
                                }
                                @media (max-width: 830px) {
                                    font-size: 16px;
                                    line-height: 26px;
                                }
                            }
                            &__desc {
                                display: flex;
                                justify-content: space-between;
                                align-items: flex-start;
                                flex-wrap: wrap;

                                margin-right: -4px;
                                text-transform: uppercase;
                                > * {
                                    margin-left: 4px;
                                }
                                .type {
                                    color: ${variable.color.secondary};
                                }
                            }
                        }
                        .img {
                            position: relative;
                            width: 100%;
                            overflow: hidden;
                            img {
                                position: absolute;
                                min-width: 100%;
                                min-height: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                object-fit: cover;
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}
