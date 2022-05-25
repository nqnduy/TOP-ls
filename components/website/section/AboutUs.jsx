import asset from "@/plugins/assets/asset";
import React from "react";
import TextTitle from "../common/TextTitle";
const AboutUs = (props) => {
    return (
        <div className="AboutUs">
            <div className="container flexSB">
                <div className="w40">
                    <TextTitle small_text="About us" big_text="We always bring uniqueness to our customers" />
                    <p className="txMain fz-16 normal purple" style={{ width: "95%", textAlign: "justify" }}>
                        The Event Company is an event design and production company that specializes in corporate and social events as well as lorem set
                        ametaque non-profit lorem fundraisers.
                        <br />
                        <br /> Sed ut perspiciatis, unde omnis iste natus error voluptatem accusantium doloremque laudantium lorem explicabo.
                    </p>
                    <div className="statistic flex">
                        <div>
                            <div className="value txMain fz-30 purple upc">250+</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Recent Events</div>
                        </div>
                        <div>
                            <div className="value txMain fz-30 purple upc">50+</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Happy Clients</div>
                        </div>
                        <div>
                            <div className="value txMain fz-30 purple upc">35.8K</div>
                            <div className="txMain normal purple upc lspacing-1 thin">Tickets Sold</div>
                        </div>
                    </div>
                    <p className="ViewMore txMain bold hoverText hoverText-pink hoverText-small">View more</p>
                </div>
                <div className="imgWrap">
                    <div className="flex" style={{ flexDirection: "column", alignItems: "flex-end" }}>
                        <div className="img img1">
                            <img src={asset("/images/aboutus1.png")} alt="" />
                        </div>
                        <div className="img img2">
                            <img src={asset("/images/aboutus2.png")} alt="" />
                        </div>
                    </div>
                    <div className="img img3">
                        <img src={asset("/images/aboutus3.png")} alt="" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .AboutUs {
                    --sizeImg: 0px;
                    --gapImg: 30px;
                }
                .statistic {
                    margin: 36px 0;
                    > div {
                        &:not(:last-child) {
                            margin-right: 87px;
                        }
                    }
                    .value {
                        display: flex;
                        font-size: var(--fzr30);
                        margin-bottom: 13px;
                    }
                }
                .imgWrap {
                    display: flex;
                    width: 60%;
                    margin: var(--gapImg) 0 0 var(--gapImg);
                    justify-content: flex-end;
                    .img {
                        position: relative;
                        margin: calc(var(--gapImg) * -1) 0 0 calc(var(--gapImg);
                        overflow: hidden;
                        img {
                            min-height: 100%;
                            min-width: 100%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            object-fit: cover;
                        }
                        &.img1 {
                            width: calc(287px - (var(--sizeImg)));
                            aspect-ratio: 4/5;
                            margin-bottom: calc(var(--gapImg) * 2);
                            border-radius: 15px;
                        }
                        &.img2 {
                            width: calc(257px - (var(--sizeImg)));
                            aspect-ratio: 1/1;
                            border-radius: 15px;
                        }
                        &.img3 {
                            margin-top: var(--gapImg);
                            height: calc(450px - (var(--sizeImg)));
                            aspect-ratio: 63/100;
                            border-radius: 15px;
                        }
                    }
                }
                @media (max-width: 1300px) {
                    .AboutUs {
                        --sizeImg: 50px;
                    }
                }
                @media (max-width: 1200px) {
                    .AboutUs {
                        --sizeImg: 50px;
                        --gapImg: 22px;
                    }
                }
                @media (max-width: 1100px) {
                    .AboutUs {
                        --sizeImg: 80px;
                        --gapImg: 20px;
                        .container {
                            align-items: flex-start;
                        }
                    }
                }

                @media (max-width: 1000px) {
                    .AboutUs {
                        --sizeImg: 100px;
                        .statistic {
                            > div {
                                &:not(:last-child) {
                                    margin-right: 40px;
                                }
                            }
                            .value {
                                margin-bottom: 8px;
                            }
                        }
                    }
                }
                @media (max-width: 900px) {
                    .AboutUs {
                        --sizeImg: 120px;
                        --gapImg: 15px;
                        .container {
                            align-items: center;
                            & > div {
                                width: 48%;
                            }
                        }
                    }
                }
                @media (max-width: 820px) {
                    .AboutUs {
                        --sizeImg: 0px;
                        --gapImg: 30px;
                        --fzr18: 18px;
                        --fzr16: 15px;
                        --fzr21: 19px;
                        .container {
                            align-items: center;
                            flex-direction: column;
                            & > div {
                                width: 100%;
                            }
                            .imgWrap {
                                margin-top: 50px;
                                margin-left: calc(var(--gapImg) * -1);
                                width: 100%;
                                justify-content: center;
                            }
                            .statistic {
                                > div {
                                    &:not(:last-child) {
                                        margin-right: 85px;
                                    }
                                }
                            }
                            .ViewMore {
                                margin: 0 auto;
                            }
                        }
                    }
                }
                @media (max-width: 700px) {
                    .AboutUs {
                        --sizeImg: 40px;
                        --gapImg: 20px;
                    }
                }
                @media (max-width: 630px) {
                    .AboutUs {
                        --sizeImg: 48px;
                        --gapImg: 20px;
                    }
                }
                @media (max-width: 600px) {
                    .AboutUs {
                        --sizeImg: 55px;
                    }
                }
                @media (max-width: 550px) {
                    .AboutUs {
                        --sizeImg: 65px;
                    }
                }
                @media (max-width: 500px) {
                    .AboutUs {
                        --sizeImg: 100px;
                        --gapImg: 10px;
                        .statistic {
                            > div {
                                &:not(:last-child) {
                                    margin-right: 0 !important;
                                }
                            }
                            justify-content: space-between;
                        }
                    }
                }
                @media (max-width: 450px) {
                    .AboutUs {
                        --sizeImg: 120px;
                        --gapImg: 10px;
                    }
                }
                @media (max-width: 420px) {
                    .AboutUs {
                        --sizeImg: 130px;
                        --gapImg: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

AboutUs.propTypes = {};

export default AboutUs;
