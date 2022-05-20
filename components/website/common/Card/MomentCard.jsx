import asset from "@/plugins/assets/asset";
import ButtonPlay from "@/website/common/Button/ButtonPlay";
import React from "react";

export default function MomentCard({ image, title, type, ...props }) {
    return (
        <div className={`MomentCard ${type}`}>
            <div className="MomentCard-content" style={{ position: "relative" }}>
                <div className="img">
                    <img src={asset(image)} {...props} />
                </div>
                <div className="layer"></div>
                <div className="textWrapLayer flexSB">
                    <div>
                        <p className="txMain fz-18">{title}</p>
                        <p className="txMain purple upc normal fz-12">{type}</p>
                    </div>
                </div>
                {type === "video" && <ButtonPlay position="center" />}
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
                    &.video {
                        &:before {
                            background: radial-gradient(29.05% 47.14% at 50.01% 51.19%, rgba(78, 65, 72, 0) 0%, rgba(231, 24, 130, 0.4) 100%);
                        }
                        &:hover {
                            .iconPlay.center {
                                animation: buttonScale 0.5s linear infinite alternate;
                            }
                        }
                    }
                    &-content {
                        position: relative;
                        border-radius: 15px;
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
        </div>
    );
}
