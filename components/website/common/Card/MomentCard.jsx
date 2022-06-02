/* eslint-disable @next/next/no-img-element */
import asset from "@/plugins/assets/asset";
import ButtonPlay from "@/website/common/Button/ButtonPlay";
import React from "react";
import { LightgalleryItem } from "react-lightgallery";

export default function MomentCard({ data }) {
    const { src, title, type } = data;

    return (
        <>
            <div className={`MomentCard ${type}`}>
                <LightgalleryItem group="any" src={asset(src)}>
                    <div className="MomentCard-content" style={{ position: "relative" }}>
                        {type === "video" ? (
                            <div className="video">
                                <iframe
                                    width={"100%"}
                                    height={"100%"}
                                    src={`${src}?enablejsapi=1?controls=0&modestbranding=1&showinfo=0&autohide=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        ) : (
                            <div className="img">
                                <img src={asset(src)} alt="" />
                            </div>
                        )}
                        <div className="layer"></div>
                        <div className="textWrapLayer flexSB">
                            <div>
                                <p className="headline">{title}</p>
                                <p className="headlineSmall">{type}</p>
                            </div>
                        </div>
                        {type === "video" && <ButtonPlay position="center" />}
                    </div>
                </LightgalleryItem>
            </div>

            <style jsx global>{`
                @keyframes buttonScale {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }
                .MomentCard {
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s;
                    &.video {
                        .MomentCard-content {
                            &:before {
                                background: radial-gradient(29.05% 47.14% at 50.01% 51.19%, rgba(78, 65, 72, 0) 0%, rgba(231, 24, 130, 0.4) 100%);
                            }
                            &:hover {
                                .iconPlay.center {
                                    animation: buttonScale 0.5s linear infinite alternate;
                                }
                            }
                        }
                    }
                    &-content {
                        position: relative;
                        border-radius: 15px;
                        &:before {
                            position: absolute;
                            content: "";
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px;
                            background: radial-gradient(29.05% 47.14% at 50.01% 51.19%, rgba(92, 91, 113, 0) 0%, rgba(17, 12, 99, 0.4) 100%);
                            transition: all 0.3s;
                            opacity: 0;
                            z-index: 2;
                        }
                        &:hover {
                            transform: scale(1.01);
                            transition: all 0.3s;
                            &:before {
                                transition: all 0.3s;
                                opacity: 1;
                            }
                        }
                        .iconPlay {
                            img {
                                width: 72px;
                                height: auto;
                            }
                        }
                    }
                    .headline {
                        font-size: 18px;
                        line-height: 26px;
                        font-weight: 500;
                        margin-bottom: 5px;

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
                    }
                    .video {
                        position: relative;
                        overflow: hidden;
                        border-radius: 15px;
                        iframe {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 0;
                            pointer-events: none;
                            width: 100%;
                            height: 37.25vw;
                        }
                    }
                    .img {
                        position: relative;
                        overflow: hidden;
                        border-radius: 15px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            `}</style>
        </>
    );
}
