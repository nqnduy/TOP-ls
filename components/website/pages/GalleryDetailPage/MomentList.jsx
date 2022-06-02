import TextUnderline from "@/common/Text/TextUnderline";
import MomentCard from "@/website/common/Card/MomentCard";
import React from "react";
import { variable } from "styles/variable";

export default function MomentList() {
    const moments = [
        {
            src: "https://www.youtube.com/embed/65stoh12sbc",
            title: "It is a long established fact",
            type: "video",
        },
        {
            src: "https://www.youtube.com/embed/VYq8yE3Qr6o",
            title: "It is a long established fact",
            type: "video",
        },

        {
            src: "/images/gallery3.png",
            title: "It is a long established fact",
            type: "image",
        },
        {
            src: "https://www.youtube.com/embed/fZNrl_xILys",
            title: "It is a long established fact",
            type: "video",
        },
        {
            src: "/images/gallery5.png",
            title: "It is a long established fact",
            type: "image",
        },
        {
            src: "/images/gallery6.png",
            title: "It is a long established fact",
            type: "image",
        },
        {
            src: "https://www.youtube.com/embed/hxU9gtORwWU",
            title: "It is a long established fact",
            type: "video",
        },
        {
            src: "/images/gallery1.png",
            title: "It is a long established fact",
            type: "image",
        },
        {
            src: "/images/gallery2.png",
            title: "It is a long established fact",
            type: "image",
        },
        {
            src: "/images/gallery3.png",
            title: "It is a long established fact",
            type: "image",
        },
    ];
    return (
        <>
            <div className="MomentList">
                <div className="container">
                    <h3 className="MomentList__title headline">Let's take a look back at the great moments in our gallery</h3>
                    <div className="MomentList__list">
                        {moments.map((moment, index) => (
                            <MomentCard key={index} data={moment} />
                        ))}
                    </div>
                    <div className="centerVM">
                        <TextUnderline type="small" color={variable.color.secondary} className="viewMore">
                            Load More
                        </TextUnderline>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .MomentList {
                    margin-bottom: 100px;
                    --imgHeight: 500px;
                    .container {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        .centerVM {
                            margin-top: 10px;
                        }
                    }
                    &__title {
                        width: 50%;
                        text-align: center;
                        margin-bottom: 40px;

                        /*  Responsive   */
                        @media (max-width: 950px) {
                            width: 55%;
                        }
                        @media (max-width: 920px) {
                            width: 52%;
                        }
                        @media (max-width: 828px) {
                            width: 54%;
                        }
                        @media (max-width: 720px) {
                            width: 60%;
                        }
                        @media (max-width: 665px) {
                            width: 65%;
                        }
                        @media (max-width: 620px) {
                            width: 76%;
                        }
                        @media (max-width: 550px) {
                            width: 88%;
                        }
                        @media (max-width: 470px) {
                            width: 80%;
                        }
                        @media (max-width: 340px) {
                            width: 95%;
                        }
                    }
                    &__list {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(4, 1fr);
                        gap: 30px;
                        grid-auto-rows: var(--imgHeight);
                        overflow: hidden;
                        margin-bottom: 50px;
                        .MomentCard {
                            .video {
                                height: var(--imgHeight);
                            }
                            .img {
                                height: var(--imgHeight);
                            }
                            &:nth-child(10n + 2) {
                                grid-column: 2/4;
                            }
                            &:nth-child(10n + 6) {
                                grid-column: 1/3;
                            }
                        }
                    }

                    /*  Responsive   */
                    @media (max-width: 1300px) {
                        --imgHeight: 450px;
                    }
                    @media (max-width: 1200px) {
                        --imgHeight: 400px;
                    }
                    @media (max-width: 1100px) {
                        --imgHeight: 380px;
                    }
                    @media (max-width: 1024px) {
                        --imgHeight: 350px;
                    }
                    @media (max-width: 950px) {
                        &__title {
                            width: 60%;
                        }
                    }
                    @media (max-width: 920px) {
                        --imgHeight: 300px;

                        &__list {
                            gap: 20px;
                        }
                    }
                    @media (max-width: 820px) {
                        --imgHeight: 260px;

                        &__list {
                            gap: 18px;
                        }
                    }
                    @media (max-width: 720px) {
                        --imgHeight: 210px;

                        &__title {
                            width: 70%;
                        }
                        &__list {
                            gap: 18px;
                        }
                    }
                    @media (max-width: 620px) {
                        --imgHeight: 350px;

                        &__title {
                            width: 80%;
                        }
                        &__list {
                            gap: 18px;
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(3, 1fr);

                            .MomentCard {
                                &:nth-child(3n + 1) {
                                    grid-column: 1/3;
                                }
                                &:nth-child(3n + 2) {
                                    grid-column: 1/2;
                                }
                                &:nth-child(3n + 3) {
                                    grid-column: 2/3;
                                }
                            }
                        }
                    }
                    @media (max-width: 530px) {
                        --imgHeight: 250px;

                        &__title {
                            width: 90%;
                        }
                    }
                }
            `}</style>
        </>
    );
}
