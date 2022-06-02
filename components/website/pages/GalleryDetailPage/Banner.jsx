import ButtonPlay from "@/website/common/Button/ButtonPlay";
import Vimeo from "@u-wave/react-vimeo";
import React, { useState } from "react";

export default function Banner() {
    const [pause, setPause] = useState(false);
    const handlePause = (ev) => {
        setPause(event.target.checked);
    };
    const handlePlayerPause = () => {
        setPause(true);
    };
    const handlePlayerPlay = () => {
        setPause(false);
    };
    const settings = {
        showTitle: false,
        showPortrait: false,
        showByline: false,
        autoplay: true,
    };
    return (
        <>
            <div className="GalleryBanner">
                <div className="container">
                    <h3 className="headline" style={{ marginBottom: 40 }}>
                        Distract by the readable content of a page
                    </h3>
                    <div>
                        <div className="iframeWrap">
                            <Vimeo {...settings} video={257713465} paused={pause} onPause={handlePlayerPause} onPlay={handlePlayerPlay} />
                        </div>
                        {pause && (
                            <>
                                <div className="iframeLayer"></div>
                                <ButtonPlay position="center" onClick={handlePause} />
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .GalleryBanner {
                    @keyframes buttonScale {
                        0% {
                            transform: translate(-50%, -50%) scale(1);
                        }
                        100% {
                            transform: translate(-50%, -50%) scale(1.1);
                        }
                    }
                    .container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        flex-direction: column;
                        margin-bottom: 80px;
                        .iconPlay {
                            img {
                                width: 60px;
                                height: auto;
                            }
                        }
                        .iframeWrap {
                            transition: all 0.3s;
                            padding-bottom: 56.25%;
                            position: relative;
                            overflow: hidden;
                            iframe {
                                object-fit: cover;
                                position: absolute;
                                min-width: 100%;
                                min-height: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }

                        .headline {
                            margin-bottom: 40px;
                            text-align: center;
                        }
                        .iframeLayer {
                            border-radius: 15px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px;
                            background: radial-gradient(29.05% 47.14% at 50.01% 51.19%, rgba(25, 21, 23, 0) 0%, rgba(231, 24, 131, 0.209) 100%);
                            transition: all 0.3s;
                            opacity: 0;
                            z-index: 2;
                            -webkit-touch-callout: none; /* iOS Safari */
                            -webkit-user-select: none; /* Safari */
                            -khtml-user-select: none; /* Konqueror HTML */
                            -moz-user-select: none; /* Old versions of Firefox */
                            -ms-user-select: none; /* Internet Explorer/Edge */
                            user-select: none; /* Non-prefixed version, currently */
                        }
                        > div {
                            overflow: hidden;
                            position: relative;
                            width: 100%;
                            border-radius: 15px;
                            &:hover {
                                .iframeLayer {
                                    transition: all 0.3s;
                                    opacity: 1;
                                }
                                .iconPlay.center {
                                    animation: buttonScale 0.5s linear infinite alternate;
                                }
                                .iframeWrap {
                                    transform: scale(1.01);
                                    transition: all 0.3s;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
