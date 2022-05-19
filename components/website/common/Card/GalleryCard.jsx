import ButtonPlay from "@/website/common/Button/ButtonPlay";
import ImageWrap from "@/website/common/ImageWrap";
import React from "react";

export default function GalleryCard({ image, title, time }) {
    return (
        <div className="GalleryCard">
            <div className="GalleryCard-content">
                <div className="img">
                    <ImageWrap src={image} gif="/images/gif/295x370.gif" bora={"15px"} />
                </div>
                <div className="layer"></div>
                <div className="textWrapLayer flexSB">
                    <div>
                        <p className="textWrapLayer__title txMain fz-21">{title}</p>
                        <div className="flexAC" style={{ gap: 4 }}>
                            <p className="txMain pink upc normal flexAC">liveshow</p>
                            <p className="txMain purple upc normal">{`  • ${time}`}</p>
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
                            &__title {
                                margin-bottom: 6px;
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
