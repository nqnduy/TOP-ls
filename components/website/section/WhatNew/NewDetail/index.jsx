import NewsCard from "@/website/common/Card/NewsCard";
import SocialGroup from "@/website/common/SocialGroup";
import React from "react";

export default function NewDetail() {
    return (
        <>
            <div className="NewDetail" style={{ marginBottom: 80 }}>
                <div className="container flex" style={{ alignItems: "flex-start", justifyContent: "space-between", gap: 30 }}>
                    <div className="w70" style={{ paddingBottom: 40, marginBottom: 20, borderBottom: "1px solid rgba(255, 255, 255, 0.07);" }}>
                        <div className="NewDetail__info txMain upc normal purple">
                            <p className="txMain pink">New</p>
                            <span>•</span>
                            <p>Feb 27, 2022</p>
                            <span>•</span>
                            <p>4 mins read</p>
                            <span>•</span>
                            <p>123 views</p>
                        </div>
                        <div className="NewDetail__title txMain bold fz-36">Distract by the readable content of a page</div>
                        <div className="NewDetail__shortDesc txMain blue normal fz-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam urna, vestibulum a gravida eu, porttitor at magna. Vivamus
                            tristique purus sit amet pretium volutpat.
                        </div>
                        <div className="NewDetail__img">
                            <img src="/images/new3.png" alt="" />
                        </div>
                        <div className="NewDetail__content txMain purple normal fz-16">
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
                            <p className="txMain bold blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                    <img src="/images/new1.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/images/gallery2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/images/new4.png" alt="" />
                                </div>
                            </div>
                            <br />
                            <p className="txMain bold blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <div className="w30 flexCOL" style={{ gap: 20 }}>
                        <p className="txMain blue normal upc lspacing-1">Trending post</p>
                        <NewsCard
                            image="/images/new4.png"
                            column="right"
                            category="Promotion"
                            time="Feb 27, 2022"
                            title="Various versions have evolved over the years, sometimes by accident"
                        />
                        <NewsCard
                            image="/images/new5.png"
                            column="right"
                            category="Promotion"
                            time="Feb 27, 2022"
                            title="Various versions have evolved over the years, sometimes by accident"
                        />
                        <NewsCard
                            image="/images/new6.png"
                            column="right"
                            category="Promotion"
                            time="Feb 27, 2022"
                            title="Various versions have evolved over the years, sometimes by accident"
                        />
                        <NewsCard
                            image="/images/new7.png"
                            column="right"
                            category="Promotion"
                            time="Feb 27, 2022"
                            title="Various versions have evolved over the years, sometimes by accident"
                        />
                    </div>
                </div>
                <div className="flex PLMain" style={{ gap: 38 }}>
                    <p className="txMain purple">Share on</p>
                    <SocialGroup />
                </div>
            </div>
            <style jsx>{`
                .NewDetail {
                    padding-top: 200px;
                    &__info,
                    &__title,
                    &__shortDesc,
                    &__img {
                        margin-bottom: 20px;
                    }
                    &__info {
                        display: flex;
                        gap: 10px;
                    }
                    &__img {
                        overflow: hidden;
                        position: relative;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    &__content {
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
            `}</style>
        </>
    );
}
