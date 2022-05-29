import asset from "@/plugins/assets/asset";
import NewsCard from "@/website/common/Card/NewsCard";
import SocialGroup from "@/website/common/SocialGroup";
import React, { useEffect, useState } from "react";
import { variable } from "styles/variable";
export default function NewDetail() {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        if (typeof window != "undefined") {
            window.addEventListener("resize", checkTablet);
        }
    }, []);
    const checkTablet = (event) => {
        if (window.innerWidth < 1024) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    };
    const news = [
        {
            image: "/images/new4.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Various versions have evolved over the years, sometimes by accident",
        },
        {
            image: "/images/new5.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Various versions have evolved over the years, sometimes by accident",
        },
        {
            image: "/images/new6.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Various versions have evolved over the years, sometimes by accident",
        },
        {
            image: "/images/new7.png",
            category: "Promotion",
            time: "Feb 27, 2022",
            title: "Various versions have evolved over the years, sometimes by accident",
        },
    ];
    return (
        <>
            <div className="NewDetail" style={{ marginBottom: 80 }}>
                <div className="container flex" style={{ alignItems: "flex-start", justifyContent: "space-between", gap: 30 }}>
                    <div className="Article w70" style={{ paddingBottom: 40, marginBottom: 20, borderBottom: "1px solid rgba(255, 255, 255, 0.07);" }}>
                        <div className="headlineSmall">
                            <p className="type">New</p>
                            <span>•</span>
                            <p>Feb 27, 2022</p>
                            <span>•</span>
                            <p>4 mins read</p>
                            <span>•</span>
                            <p>123 views</p>
                        </div>
                        <div className="headline">Distract by the readable content of a page</div>
                        <div className="content blue">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam urna, vestibulum a gravida eu, porttitor at magna. Vivamus
                            tristique purus sit amet pretium volutpat.
                        </div>
                        <div className="img">
                            <img src={asset("/images/new3.png")} alt="" />
                        </div>
                        <div className="content">
                            Donec urna felis, ultricies sit amet tristique at, elementum sit amet dui. Fusce efficitur euismod dui ac elementum. Aliquam dictum
                            vestibulum velit, id dignissim tortor viverra ut. Cras tristique sapien vel metus imperdiet efficitur. Proin molestie vel augue sed
                            dictum. Nulla facilisi. Vestibulum sed scelerisque neque. Nullam lorem libero, iaculis in nisl eu, imperdiet consectetur ipsum. Duis
                            fermentum risus ac mollis vehicula. Aliquam vitae metus convallis, pharetra mauris ac, finibus enim. Phasellus ex quam, viverra
                            efficitur placerat nec, dignissim a libero. Donec consequat aliquam efficitur. Praesent ut condimentum leo, non tincidunt justo.
                            Maecenas interdum elit nec odio eleifend, quis maximus erat gravida. Donec id porttitor felis. Duis sodales lectus dui, vitae
                            aliquet nisi laoreet eu. Phasellus et velit eget lorem feugiat feugiat eget vitae orci. Morbi pellentesque rutrum rhoncus. Aenean
                            sodales iaculis erat, venenatis rutrum sapien hendrerit eget. Nam eu lacus ut nisl eleifend volutpat id eu est. Suspendisse ut
                            turpis ligula. Etiam urna urna, fermentum ut diam ac, commodo tempus mauris. Proin ac gravida nisi. Vivamus vitae placerat lacus,
                            nec convallis orci. Aenean pulvinar ut tortor id ullamcorper. Donec egestas mi purus, bibendum ornare massa feugiat ac.
                            <br /> <br />
                            <p className="link">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <br />
                            <ul className="list-style-auto" style={{ marginLeft: 15 }}>
                                <li>Dolor, nulla pellentesque felis ultricies.</li>
                                <li>Amet, massa elementum ornare gravida nunc nec.</li>
                                <li>Adipiscing ipsum sit fermentum sapien at dictumst.</li>
                                <li>Nibh ut nunc, est arcu mollis blandit egestas eget ante.</li>
                                <li>Venenatis ultrices integer risus quis aliquam sagittis consectetur.</li>
                            </ul>
                            <br /> <br />
                            <div className="imgWrap">
                                <div className="img">
                                    <img src={asset("/images/new1.png")} alt="" />
                                </div>
                                <div className="img">
                                    <img src={asset("/images/gallery2.png")} alt="" />
                                </div>
                                <div className="img">
                                    <img src={asset("/images/new4.png")} alt="" />
                                </div>
                            </div>
                            <br />
                            <p className="link">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <br />
                            <ul className="list-style-auto" style={{ marginLeft: 15 }}>
                                <li>Dolor, nulla pellentesque felis ultricies.</li>
                                <li>Amet, massa elementum ornare gravida nunc nec.</li>
                                <li>Adipiscing ipsum sit fermentum sapien at dictumst.</li>
                                <li>Nibh ut nunc, est arcu mollis blandit egestas eget ante.</li>
                                <li>Venenatis ultrices integer risus quis aliquam sagittis consectetur.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="TrendingPost w30">
                        <p className="headlineSmall">Trending post</p>
                        <div className="TrendingPost__list flexCOL">
                            {news.map((item, index) => (
                                <NewsCard key={index} data={item} column={isTablet ? "center" : "right"} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="shareOn PLMain">
                    <p>Share on</p>
                    <SocialGroup />
                </div>
            </div>
            <style jsx global>{`
                .NewDetail {
                    padding-top: 200px;
                    .Article {
                        .headlineSmall,
                        .headline,
                        .content,
                        .img {
                            margin-bottom: 20px;
                        }
                        .headlineSmall {
                            display: flex;
                            margin-right: -10px;
                            > * {
                                margin-right: 10px;
                            }
                        }
                        .img {
                            overflow: hidden;
                            position: relative;
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        .headlineSmall {
                            letter-spacing: 0px;
                            color: ${variable.color.purple};
                            .type {
                                font-weight: 700;
                                color: ${variable.color.secondary};
                            }
                        }
                        .content {
                            &.blue {
                                color: ${variable.color.blue};
                            }
                            .link {
                                font-family: fm-m;
                                color: ${variable.color.blue};
                            }
                            .imgWrap {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .img {
                                    width: calc(100% / 3 - (66px / 3));
                                    height: 208px;
                                    overflow: hidden;
                                    border-radius: 15px;
                                    img {
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                    }
                                }
                            }
                        }
                    }
                    .TrendingPost {
                        > .headlineSmall {
                            color: ${variable.color.blue};
                            margin-bottom: 25px;
                        }
                        &__list {
                            gap: 20px;
                        }
                    }
                }
                @media (max-width: 1150px) {
                    .NewDetail {
                        .TrendingPost {
                            gap: 15px;
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .NewDetail {
                        padding-top: 100px;
                        .container {
                            gap: 0px;
                            flex-direction: column;
                            margin-bottom: 50px;
                            .Article,
                            .w30 {
                                width: 100%;
                            }
                            .TrendingPost__list {
                                --newsCOL: 4;
                                flex-direction: row;
                                flex-wrap: wrap;
                                gap: var(--cardRange);
                                .NewsCard {
                                    width: calc((100% / var(--newsCOL)) - ((var(--cardRange) * (var(--newsCOL) - 1)) / var(--newsCOL)));
                                }
                            }
                        }
                    }
                }
                @media (max-width: 1080px) {
                    .NewDetail {
                        .TrendingPost__list {
                            .headlineSmall {
                                font-size: 12px;
                            }
                        }
                    }
                }
                @media (max-width: 989px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --cardRange: 24px;

                            .headlineSmall {
                                font-size: 11px;
                            }
                        }
                    }
                }
                @media (max-width: 950px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --cardRange: 20px;
                        }
                    }
                }
                @media (max-width: 890px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --cardRange: 18px;
                        }
                    }
                }
                @media (max-width: 820px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --newsCOL: 3 !important;
                            --cardRange: 20px;

                            .headlineSmall {
                                font-size: 12px;
                            }
                        }
                    }
                }
                @media (max-width: 720px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --cardRange: 15px;

                            .headlineSmall {
                                font-size: 11px;
                            }
                        }
                    }
                }
                @media (max-width: 650px) {
                    .NewDetail {
                        .Article {
                            .content {
                                .imgWrap {
                                    flex-direction: column;
                                    gap: 20px;
                                    .img {
                                        height: auto;
                                        width: 100%;
                                    }
                                }
                            }
                        }

                        .TrendingPost__list {
                            --newsCOL: 2 !important;
                            --cardRange: 26px;

                            .headlineSmall {
                                font-size: 13px;
                            }
                            .content {
                                font-size: 14px;
                            }
                        }
                    }
                }
                @media (max-width: 500px) {
                    .NewDetail {
                        .TrendingPost__list {
                            --newsCOL: 1 !important;
                            --fzr16: 15px;

                            .headlineSmall {
                                font-size: 14px;
                            }
                            .content {
                                font-size: 15px;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
