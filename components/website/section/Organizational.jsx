/* eslint-disable @next/next/no-img-element */
import asset from "plugins/assets/asset";
import React from "react";
function Organizational() {
    return (
        <div className="Organizational container">
            <div className="Organizational__wrapper">
                <h3 className="txMain blue normal upc" style={{ textAlign: "center", marginBottom: 30 }}>
                    Organizational units
                </h3>
                <div className="Organizational__brands flexSB">
                    <img src={asset("/images/icons/snapit.svg")} alt="" />
                    <img src={asset("/images/icons/digitop.svg")} alt="" />
                    <img src={asset("/images/icons/topgroup.svg")} alt="" />
                    <img src={asset("/images/icons/tops.svg")} alt="" />
                    <img src={asset("/images/icons/topevent.svg")} alt="" />
                </div>
            </div>
            <style jsx>{`
                .Organizational {
                    margin-block: 80px;
                    &__wrapper {
                        padding: 36px 55px;
                        background-color: #060070;
                        box-shadow: 3px 23px 133px rgba(0, 0, 0, 0.2);
                        border-radius: 15;
                    }
                    &__brands {
                    }
                }
                @media (max-width: 1320px) {
                    .Organizational {
                        &__brands {
                            img {
                                width: 15%;
                            }
                        }
                    }
                }
                @media (max-width: 850px) {
                    .Organizational {
                        &__brands {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            width: 100%;
                            gap: 30px;
                            img {
                                width: 70%;
                            }
                        }
                    }
                }
                @media (max-width: 650px) {
                    .Organizational {
                        &__brands {
                            img {
                                width: 80%;
                            }
                        }
                    }
                }
                @media (max-width: 550px) {
                    .Organizational {
                        &__wrapper {
                            padding: 36px 40px;
                        }

                        &__brands {
                            gap: 20px;
                            img {
                                width: 85%;
                            }
                        }
                    }
                }
                @media (max-width: 550px) {
                    .Organizational {
                        &__wrapper {
                            padding: 30px;
                        }

                        &__brands {
                            gap: 20px;
                            img {
                                width: 85%;
                            }
                        }
                    }
                }
                @media (max-width: 450px) {
                    .Organizational {
                        &__wrapper {
                            padding: 30px 0px;
                        }

                        &__brands {
                            grid-template-columns: repeat(1, 1fr);
                            gap: 40px;
                            img {
                                margin: 0 auto;
                                width: 50%;
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}
Organizational.propTypes = {};

export default Organizational;
