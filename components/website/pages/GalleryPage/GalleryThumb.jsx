import SortDropdown from "@/common/SortDropDown";
import GalleryCard from "@/website/common/Card/GalleryCard";

export default function GalleryThumb() {
    const moments = [
        {
            image: "/images/prv1.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv3.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv2.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv1.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv3.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv1.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv2.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
        {
            image: "/images/prv3.png",
            title: "XinChao Da Lat",
            time: "feb 27, 2022",
            type: "liveshow",
        },
    ];
    const filters = [
        {
            title: "All categories",
            options: ["Liveshows", "Festival", "Workshops"],
        },
    ];
    console.log("filters:", filters);
    // const filters = ["Liveshows", "Festival", "Workshops"];
    return (
        <>
            <div className="GalleryThumb">
                <div className="container">
                    <div className="titleWrap">
                        <div className="GalleryThumb__title">Let's take a look back at the great moments in our gallery</div>
                        {filters.map((filter, index) => (
                            <SortDropdown.Single key={index} data={filter.options}>
                                {filter.title}
                            </SortDropdown.Single>
                        ))}
                    </div>
                    <div className="GalleryThumb__grid">
                        {moments.map((moment, index) => (
                            <GalleryCard key={index} data={moment} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>
                {`
                    .GalleryThumb {
                        .titleWrap {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-bottom: 35px;
                        }
                        &__title {
                            font-family: fm-m;
                            font-size: 21px;
                            font-weight: 700;

                            line-height: 32px;
                            color: #fff;

                            /*  Responsive   */
                            @media (max-width: 1220px) {
                                font-size: 19px;
                                line-height: 28px;
                            }
                            @media (max-width: 1024px) {
                                font-size: 17px;
                                line-height: 26px;
                            }
                            @media (max-width: 830px) {
                                font-size: 16px;
                                line-height: 26px;
                            }
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
                                            &__desc {
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
                                            &__desc {
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
                                            &__desc {
                                                flex-direction: column;
                                                gap: 0px !important;
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
