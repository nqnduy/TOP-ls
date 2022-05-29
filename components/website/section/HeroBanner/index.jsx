import asset from "@/plugins/assets/asset";
import Image from "next/image";
import SearchBar from "./SearchBar";
function HeroBanner({ searchBar }) {
    return (
        <>
            <div className="HeroBanner">
                <div className="banner">
                    <div className="banner-title">
                        <div className="item1">
                            <Image src={asset("/images/phongtra1.png")} alt="" width={229} height={28.5} layout="intrinsic" />
                        </div>
                        <div className="item2">
                            <Image src={asset("/images/title-banner.png")} alt="" width={609} height={321} layout="intrinsic" />
                        </div>
                        <div className="item3">
                            <div>
                                <Image src={asset("/images/time.png")} alt="" width={137} height={47} layout="intrinsic" />
                            </div>
                            <div>
                                <Image src={asset("/images/location.png")} alt="" width={185} height={55} layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                    <div className="character">
                        <img src={asset("/images/character.png")} alt="" />
                    </div>
                    <div className="pmc-name">
                        <Image src={asset("/images/pmc.png")} alt="" width={186} height={116.28} layout="intrinsic" />
                    </div>
                    <div className="erik-name">
                        <Image src={asset("/images/erik-name.png")} alt="" width={96} height={60} layout="intrinsic" />
                    </div>
                </div>
            </div>
            {searchBar && <SearchBar />}
            <style jsx>{`
                .HeroBanner {
                    --widthCharacter: 670px;
                    width: 100%;
                    width: 100%;
                    z-index: 9;
                    overflow: hidden;
                    .banner {
                        width: 100%;
                        height: 80vh;
                        background: url(${asset("/images/bg-banner.png")}) no-repeat center center/cover;
                        position: relative;
                        display: flex;
                        &-title {
                            margin-top: 16.5vh;
                            left: 0;
                            width: 50%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .item1 {
                                margin-bottom: 30px;
                            }
                            .item2 {
                                margin-bottom: 50px;
                            }
                            .item3 {
                                display: flex;
                                align-items: center;
                                gap: 40px;
                            }
                        }
                        .character {
                            position: absolute;
                            bottom: -1%;
                            right: 15vw;
                            width: var(--widthCharacter);
                            height: auto;
                        }
                        .pmc-name {
                            position: absolute;
                            bottom: 50vh;
                            right: 40vw;
                        }
                        .erik-name {
                            bottom: 35vh;
                            right: 8vw;
                            position: absolute;
                        }
                    }
                }
                @media (max-width: 1300px) and (max-height: 969px) {
                    .HeroBanner {
                        --widthCharacter: 600px;

                        .banner {
                            &-title {
                                width: 40%;
                                margin-left: 3vw;
                            }
                            .pmc-name {
                                right: 34vw;
                                bottom: 50vh;
                            }
                            .erik-name {
                                right: 5vw;
                                bottom: 40vh;
                            }
                            .character {
                                right: 10vw;
                            }
                        }
                    }
                }
                @media (max-width: 1100px) {
                    .HeroBanner {
                        .banner {
                            &-title {
                                margin-top: 10vh;
                            }
                            .character {
                                right: 8vw;
                            }
                        }
                    }
                }
                @media (max-height: 850px) {
                    .HeroBanner {
                        --widthCharacter: 580px;

                        .banner {
                            height: 95vh;
                            &-title {
                                width: 50%;
                            }
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .HeroBanner {
                        padding-top: 0;

                        .banner {
                            height: 90vh;
                            .character {
                                right: 3vw;
                            }
                            &-title {
                                margin-top: 10vh;
                                .item1 {
                                    margin-bottom: 20px;
                                }
                            }
                            .pmc-name {
                                bottom: 62vh;
                                right: 28vw;
                            }
                            .erik-name {
                                bottom: 50vh;
                                right: 3vw;
                            }
                        }
                    }
                }
                @media (max-width: 880px) {
                    .HeroBanner {
                        --widthCharacter: 500px;
                        padding-top: 0;
                        .banner {
                            height: 105vh;
                            flex-direction: column;
                            align-items: center;
                            &-title {
                                margin-top: 10vh;
                                width: 70%;
                                .item2 {
                                    margin-bottom: 20px;
                                }
                            }
                            .character {
                                right: 50%;
                                transform: translate(50%);
                            }
                            .pmc-name {
                                bottom: 30vh;
                                left: 5vw;
                            }
                            .erik-name {
                                bottom: 30vh;
                                right: 5vw;
                            }
                        }
                    }
                }
                @media (max-width: 600px) {
                    .HeroBanner {
                        .banner {
                            .pmc-name {
                                bottom: 35vh;
                            }
                            .erik-name {
                                bottom: 33vh;
                            }
                        }
                    }
                }
                @media (max-width: 570px) {
                    .HeroBanner {
                        .banner {
                            .pmc-name,
                            .erik-name {
                                display: none;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

export default HeroBanner;
