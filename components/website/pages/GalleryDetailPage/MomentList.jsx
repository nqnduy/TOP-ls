import MomentCard from "@/website/common/Card/MomentCard";
import React from "react";

export default function MomentList() {
    return (
        <>
            <div className="MomentList">
                <div className="container flexCOL flexAC">
                    <h3 className="MomentList__title txMain bold fz-36 textALC w50" style={{ marginBottom: 40 }}>
                        Let's take a look back at the great moments in our gallery
                    </h3>
                    <div className="MomentList__content">
                        <MomentCard image="/images/gallery1.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery2.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery3.png" title="It is a long established fact" type="image" />
                        <MomentCard image="/images/gallery4.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery5.png" title="It is a long established fact" type="image" />
                        <MomentCard image="/images/gallery6.png" title="It is a long established fact" type="image" />
                        <MomentCard image="/images/gallery7.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery1.png" title="It is a long established fact" type="image" />
                        <MomentCard image="/images/gallery2.png" title="It is a long established fact" type="image" />
                        <MomentCard image="/images/gallery3.png" title="It is a long established fact" type="image" />
                    </div>
                    <div className="txMain pink bold hoverText hoverText-pink hoverText-small">Load More</div>
                </div>
            </div>
            <style jsx global>{`
                .MomentList {
                    margin-bottom: 100px;
                    --imgHeight: 500px;
                    &__content {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(4, 1fr);
                        gap: 30px;
                        grid-auto-rows: var(--imgHeight);
                        overflow: hidden;
                        margin-bottom: 50px;
                        .MomentCard {
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
                }
                @media (max-width: 1300px) {
                    .MomentList {
                        --imgHeight: 450px;
                    }
                }
                @media (max-width: 1200px) {
                    .MomentList {
                        --imgHeight: 400px;
                    }
                }
                @media (max-width: 1100px) {
                    .MomentList {
                        --imgHeight: 380px;
                    }
                }
                @media (max-width: 1024px) {
                    .MomentList {
                        --imgHeight: 350px;
                    }
                }
                @media (max-width: 950px) {
                    .MomentList {
                        &__title {
                            width: 60%;
                        }
                    }
                }
                @media (max-width: 920px) {
                    .MomentList {
                        --imgHeight: 300px;

                        &__content {
                            gap: 20px;
                        }
                    }
                }
                @media (max-width: 820px) {
                    .MomentList {
                        --imgHeight: 260px;
                        &__content {
                            gap: 18px;
                        }
                    }
                }
                @media (max-width: 720px) {
                    .MomentList {
                        --imgHeight: 210px;
                        &__title {
                            width: 70%;
                        }
                        &__content {
                            gap: 18px;
                        }
                    }
                }
                @media (max-width: 620px) {
                    .MomentList {
                        --imgHeight: 350px;
                        &__title {
                            width: 80%;
                        }
                        &__content {
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
                }
                @media (max-width: 530px) {
                    .MomentList {
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
