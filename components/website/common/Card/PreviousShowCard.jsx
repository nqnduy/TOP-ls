import ButtonMain from "../Button/ButtonMain";
import ButtonPlay from "../Button/ButtonPlay";

function PreviousShowCard({ image, title, event, active }) {
    return (
        <>
            <div className={`PreviousShowCard ${active}`}>
                <div className="PreviousShowCard-content">
                    <div className="img">
                        <img src={image} alt="Show Card" />
                    </div>
                    <div className="layer"></div>
                    <div className="textWrapLayer flexSB">
                        <div>
                            <p className="txMain">{title}</p>
                            <p className="txMain normal purple">{event} events</p>
                        </div>
                        <div className="PreviousShowCard-btn">
                            <div className="watchNow">
                                <ButtonMain>Watch now!</ButtonMain>
                            </div>
                            <div className="play">
                                <ButtonPlay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .PreviousShowCard {
                    @keyframes fadeInOpacity {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }

                    margin-right: 26px;
                    @media (max-width: 500px) {
                        margin-right: 0;
                    }
                    &-content {
                        position: relative;
                        .img {
                            position: relative;
                            width: 100%;
                            height: 370px;
                            border-radius: 15px;
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
                    &-btn {
                        display: flex;
                        align-items: center;
                        position: relative;
                        .watchNow {
                            position: absolute;
                            right: 0;
                            opacity: 0;
                            bottom: 5px;
                            transition: 0.3s ease-in;
                        }
                        .play {
                            transition: 0.3s ease-out;
                            opacity: 1;
                        }
                    }
                    &.active {
                        .PreviousShowCard-btn {
                            .watchNow {
                                opacity: 1;
                                animation-name: fadeInOpacity;
                                animation-iteration-count: 1;
                                animation-timing-function: ease-in;
                                animation-duration: 0.5s;
                            }
                            .play {
                                animation-name: fadeInOpacity;
                                animation-direction: reverse;
                                animation-iteration-count: 1;
                                animation-timing-function: ease-in;
                                animation-duration: 0s;
                                opacity: 0;
                            }
                        }
                    }
                }
                @media (max-width: 500px) {
                    .PreviousShowCard {
                        &-btn {
                            .watchNow {
                                opacity: 1;
                                animation: none;
                            }
                            .play {
                                opacity: 0;
                                animation: none;
                            }
                        }
                        &.active {
                            .PreviousShowCard-btn {
                                .watchNow {
                                    opacity: 1;
                                    animation: none;
                                }
                                .play {
                                    opacity: 0;
                                    animation: none;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default PreviousShowCard;
