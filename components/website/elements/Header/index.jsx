import AppLink from '@/diginext/link/AppLink';
import asset from "@/plugins/assets/asset";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { variable } from "styles/variable";
import Logo from "../../common/Logo";
import SocialGroup from "../../common/SocialGroup";
import TextUnderline from "../../common/Text/TextUnderline";
function Header() {
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        if (typeof window != "undefined") {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = (event) => {
        if (window.pageYOffset > 200) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };
    return (
        <header className={fixed ? "active" : ""} onScroll={handleScroll}>
            <div className="HeaderCTA">
                <div className="container">
                    <div className="HeaderCTA-title">
                        Have any Questions? Call Us <strong>028 6673 8686</strong>
                    </div>
                    <div className="HeaderCTA-button">
                        <SocialGroup />
                        <div className="language">
                            <div className="language-current">
                                English
                                <Image src={asset("/images/icons/lang-arrow.svg")} alt="lang-arrow" width={9.5} height={5.5} />
                            </div>
                            <div className="language-select hide">Việt Nam</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="HeaderMenu">
                <div className="container">
                    <Logo />
                    <ul className="menu">
                        <li>
                            <AppLink href="/about-us">
                                <TextUnderline color={variable.color.secondary}>
                                    <span className="menu-link">About us</span>
                                </TextUnderline>
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href="/upcoming-shows">
                                <TextUnderline color={variable.color.secondary}>
                                    <span className="menu-link">Upcoming Shows</span>
                                </TextUnderline>
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href="/gallery">
                                <TextUnderline color={variable.color.secondary}>
                                    <span className="menu-link">Gallery</span>
                                </TextUnderline>
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href="/new-promotion">
                                <TextUnderline color={variable.color.secondary}>
                                    <span className="menu-link">News & Promotions</span>
                                </TextUnderline>
                            </AppLink>
                        </li>
                        <li>
                            <AppLink href="/contact">
                                <TextUnderline color={variable.color.secondary}>
                                    <span className="menu-link">Contact</span>
                                </TextUnderline>
                            </AppLink>
                        </li>
                    </ul>
                    <div className="action">
                        <div className="action-search">
                            <Image src={asset("/images/icons/search.svg")} alt="search-icon" width={20} height={20} />
                        </div>
                        <Link href="/user/DatPhan/information">
                            <a>
                                <div className="action-user">
                                    <Image src={asset("/images/icons/user.svg")} alt="user-icon" width={16} height={20} />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                $purple-cl: #b8b7d0;
                header {
                    @keyframes fadeInOpacity {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    .HeaderCTA {
                        position: fixed;
                        width: 100%;
                        display: flex;
                        z-index: 100;
                        align-items: center;
                        background: linear-gradient(180deg, #060070 0%, rgba(196, 196, 196, 0) 100%);
                        padding-bottom: 54px;
                        .container {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            height: 100%;
                            padding-block: 1em;
                        }
                        &-title {
                            font-family: fm-m;
                            font-size: 14px;
                            font-weight: 500px;
                            color: ${variable.color.purple};
                            text-transform: uppercase;
                            strong {
                                color: white;
                            }
                        }
                        &-button {
                            display: flex;
                            align-items: center;
                            gap: 40px;
                            .language {
                                position: relative;
                                height: 100%;
                                color: #fff;
                                font-size: 14px;
                                color: $purple-cl;
                                font-weight: 500;
                                line-height: 19px;
                                font-family: fm-m;
                                &-current {
                                    display: flex;
                                    align-items: center;
                                    gap: 6px;
                                }
                                &-select {
                                    position: absolute;
                                    display: flex;
                                    width: max-content;
                                    flex-direction: column;
                                    top: 35px;
                                }
                            }
                        }
                    }
                    .HeaderMenu {
                        position: fixed;
                        margin-top: 50px;
                        z-index: 100;
                        height: 80px;
                        width: 100%;
                        transition: ease-in 0.5s;
                        background-color: transparent;
                        &:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 0;
                            background-color: transparent;
                            pointer-events: none;
                            transition: ease-out 0.5s;
                        }
                        .container {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            position: relative;
                        }
                        .menu {
                            display: flex;
                            align-items: center;
                            gap: 40px;
                            position: absolute;
                            left: 50%;
                            transform: translate(-50%);
                            li {
                                width: max-content;
                            }
                            &-link {
                                font-family: fm-m;
                                line-height: 24px;
                                font-size: 16px;
                                font-weight: 700;
                            }
                        }
                        @media (max-width: 1200px) {
                            .menu {
                                gap: 32px;
                            }
                        }
                        @media (max-width: 1100px) {
                            .menu {
                                gap: 40px;
                            }
                        }
                        .action {
                            display: flex;
                            align-items: center;
                            gap: 30px;
                            &-search {
                                cursor: pointer;
                            }
                            &-user {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                cursor: pointer;
                                background-color: rgba(255, 255, 255, 0.07);
                            }
                        }
                    }

                    &.active {
                        .HeaderCTA {
                            display: none;
                        }
                        .HeaderMenu {
                            margin-top: 0;
                            transition: ease-out 0.45s;
                            &:before {
                                //  transition-delay: 2s;
                                transition: ease-out 0.6s;
                                height: 100%;
                                background-color: #060070;
                                opacity: 1;
                                animation-name: fadeInOpacity;
                                animation-iteration-count: 1;
                                animation-timing-function: ease-in;
                                animation-duration: 1s;
                            }
                        }
                    }
                }
                @media (max-width: 1180px) and (max-height: 820px) {
                    header {
                        display: none;
                    }
                }
                @media (max-width: 1024px) {
                    header {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
}

export default Header;
