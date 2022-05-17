import Image from "next/image";
import Input from "./Input";
function Footer() {
    return (
        <>
            <footer className="Footer" style={{ backgroundColor: "#060070" }}>
                <div className="BGWrap"></div>
                <div className="container">
                    <div className="backBannerFooter">
                        <div className="backBannerFooter__textArea">
                            <p className="txMain bold fz-36" style={{ marginBottom: 6 }}>
                                Sign up to our newsletter
                            </p>
                            <p className="txMain normal fz-16">Don’t miss our future updates!</p>
                        </div>
                        <div className="backBannerFooter__inputArea">
                            <Input />
                        </div>
                    </div>
                    <div className="Footer__navigate flexSB">
                        <div className="logo">
                            <Image src="/images/icons/logo.svg" alt="Logo" width={107} height={40} />
                        </div>
                        <ul className="menu flex" style={{ gap: 40 }}>
                            <li className="txMain normal fz-16">
                                <a href="">About Us</a>
                            </li>
                            <li className="txMain normal fz-16">
                                <a href="">Upcoming Shows</a>
                            </li>
                            <li className="txMain normal fz-16">
                                <a href="">Gallery</a>
                            </li>
                            <li className="txMain normal fz-16">
                                <a href="">News & Promotions</a>
                            </li>
                            <li className="txMain normal fz-16">
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer__bottom flexSB">
                        <p className="txMain purple normal">©2022 Top Live Show. All rights reserved.</p>
                        <div className="flexAC" style={{ gap: 25 }}>
                            <div className="icon facebook">
                                <Image src="/images/icons/facebook.svg" alt="Facebook" width={10} height={18} />
                            </div>
                            <div className="icon tiktok">
                                <Image src="/images/icons/tiktok.svg" alt="Tiktok" width={15} height={18} />
                            </div>
                            <div className="icon youtube">
                                <Image src="/images/icons/youtube.svg" alt="Youtube" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx global>{`
                .backBannerFooter {
                    background: url(/images/footer.png) no-repeat center center/cover;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 68px 86px;
                    border-radius: 25px;
                    gap: 30px;
                    &__textArea {
                        width: 53%;
                    }
                    &__inputArea {
                        width: 48%;
                    }
                }
                .Footer {
                    padding-top: 30px;
                    position: relative;
                    .BGWrap {
                        width: 100%;
                        height: 70%;
                        position: absolute;
                        bottom: 0;
                        background-color: #05005d;
                    }
                    &__navigate {
                        margin-top: 45px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        margin-bottom: 30px;
                        padding-bottom: 35px;
                        .menu {
                            li {
                                cursor: pointer;
                                a {
                                    color: #b8b7d0;
                                    transition: ease 0.3s;
                                }
                                &:hover {
                                    a {
                                        color: #fff;
                                        transition: ease 0.3s;
                                    }
                                }
                            }
                        }
                    }
                    &__bottom {
                        padding-bottom: 30px;

                        .icon {
                            cursor: pointer;
                        }
                    }
                }
                @media (max-width: 1150px) {
                    .backBannerFooter {
                        padding: 68px 70px;
                    }
                }
                @media (max-width: 1024px) {
                    .backBannerFooter {
                        padding: 60px;
                    }
                }
                @media (max-width: 980px) {
                    .backBannerFooter {
                        padding: 60px 50px;
                    }
                }
                @media (max-width: 848px) {
                    .backBannerFooter {
                        padding: 50px 40px;
                    }
                }
                @media (max-width: 800px) {
                    .Footer {
                        &__navigate {
                            .menu {
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                li {
                                    align-self: flex-end;
                                    justify-self: center;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 700px) {
                    .Footer {
                        &__navigate {
                            .menu {
                                gap: 30px !important;
                                grid-template-columns: repeat(2, 1fr);
                                li {
                                    justify-self: flex-start;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 755px) {
                    .backBannerFooter {
                        padding: 50px 40px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        &__textArea {
                            width: 100%;
                            text-align: center;
                        }
                        &__inputArea {
                            width: 80%;
                        }
                    }
                }
                @media (max-width: 755px) {
                    .backBannerFooter {
                        padding: 40px 30px;
                    }
                }
                @media (max-width: 520px) {
                    .Footer {
                        &__navigate {
                            .menu {
                                gap: 20px !important;
                                grid-template-columns: repeat(1, 1fr);
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}

Footer.propTypes = {};

export default Footer;
