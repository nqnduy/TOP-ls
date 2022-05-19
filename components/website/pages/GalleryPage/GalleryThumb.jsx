import GalleryCard from "@/website/common/Card/GalleryCard";
import React from "react";

export default function GalleryThumb() {
    return (
        <>
            <div className="GalleryThumb">
                <div className="container">
                    <div className="GalleryThumb__title txMain bold fz-21">Let's take a look back at the great moments in our gallery</div>
                    <div className="GalleryThumb__grid">
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv2.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv2.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                    </div>
                </div>
            </div>

            <style jsx global>
                {`
                    .GalleryThumb {
                        &__title {
                            margin-bottom: 35px;
                        }
                        &__grid {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: var(--cardRange);
                        }
                    }
                    @media (max-width: 1450px) {
                        .GalleryThumb {
                            &__grid {
                                .GalleryCard {
                                    --fzr21: 18px;
                                    --fzrMain: 13px;
                                }
                            }
                        }
                    }
                    @media (max-width: 1280px) {
                        .GalleryThumb {
                            &__grid {
                                .GalleryCard {
                                    &-content {
                                        .textWrapLayer {
                                            &__title {
                                                margin-bottom: 3px !important;
                                            }
                                            .flexAC {
                                                flex-direction: column;
                                                align-items: flex-start;
                                                gap: 0px !important;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    @media (max-width: 1200px) {
                        .GalleryThumb {
                            &__grid {
                                display: grid;
                                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                                .GalleryCard {
                                    --fzr21: 21px;
                                    --fzrMain: 14px;
                                    &-content {
                                        .textWrapLayer {
                                            &__title {
                                                margin-bottom: 6px !important;
                                            }
                                            .flexAC {
                                                flex-direction: row;
                                                gap: 4px !important;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    @media (max-width: 750px) {
                        .GalleryThumb {
                            &__grid {
                                display: grid;
                                grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
                                .GalleryCard {
                                    --fzr21: 21px;
                                    --fzrMain: 14px;
                                    &-content {
                                        .textWrapLayer {
                                            &__title {
                                                margin-bottom: 6px !important;
                                            }
                                            .flexAC {
                                                flex-direction: column;
                                                gap: 0px !important;
                                                align-items: flex-start;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    @media (max-width: 750px) {
                        .GalleryThumb {
                            --cardRange: 26px;
                        }
                    }
                `}
            </style>
        </>
    );
}
