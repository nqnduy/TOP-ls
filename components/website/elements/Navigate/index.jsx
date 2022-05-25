import ImageWrap from "@/common/ImageWrap";
import Logo from "@/common/Logo";
import SocialGroup from "@/common/SocialGroup";
import Hamburger from "@/website/elements/Navigate/Hamburger";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Input from "../../common/Input";

export default function Navigate() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenNavigate = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <div className={`Navigate ${isOpen ? "open" : ""}`}>
                <div>
                    <div className="Navigate__content">
                        <div className="flexSB w100">
                            <Logo />
                            <div className="action-user">
                                <div className="avt">
                                    <ImageWrap src="/images/avt1.png" gif="/images/gif/50x50.gif" bora={"50%"} />
                                </div>
                            </div>
                        </div>
                        <ul className="menu">
                            <li>
                                <Link href="/about-us">
                                    <a className="txMain bold hoverText hoverText-pink" href="">
                                        About Us
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming-shows">
                                    <a className="txMain bold hoverText hoverText-pink">Upcoming Shows</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery">
                                    <a className="txMain bold hoverText hoverText-pink">Gallery</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/new-promotion">
                                    <a className="txMain bold hoverText hoverText-pink">News & Promotions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className="txMain fz-36 bold hoverText hoverText-pink">Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="CTA">
                            <Input placeholder="Search..." />
                            <div className="CTA-title txMain upc">
                                Have any Questions? Call Us <strong>028 6673 8686</strong>
                            </div>
                            <div className="CTA-button flexSB">
                                <SocialGroup />
                                <div className="language txMain bold">
                                    <div className="language-current flexAC">
                                        English
                                        <Image src="/images/icons/lang-arrow.svg" alt="lang-arrow" width={9.5} height={5.5} />
                                    </div>
                                    <div className="language-select hide">Việt Nam</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                div {
                    .Navigate {
                        position: fixed;
                        z-index: 100;
                        display: none;
                        width: 0;
                        height: 100vh;
                        right: 0;
                        border-bottom-left-radius: 15px;
                        background-color: rgba(0, 0, 0, 0.575);
                        box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.14);
                        transition: background-color 0.45s ease-in-out, width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 100ms,
                            transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s;
                        & > div {
                            padding: 0 50px;
                            width: 100%;
                            position: relative;
                        }
                        &__content {
                            width: 100%;
                            margin: 0 auto;
                            padding: 120px 0;
                            .logo {
                                text-align: center;
                                width: 100px;
                            }
                            .menu {
                                margin-top: 50px;
                                text-align: right;
                                li {
                                    text-transform: uppercase;
                                    padding: 15px 0;
                                    display: list-item;
                                    will-change: transform;
                                    transform: matrix(1, 0, 0, 1, 480, 0);
                                    a {
                                        font-size: 36px;
                                        line-height: 46px;
                                    }
                                    &:nth-child(1) {
                                        transition: ease-out 900ms;
                                    }
                                    &:nth-child(2) {
                                        transition: ease-out 400ms;
                                    }
                                    &:nth-child(3) {
                                        transition: ease-out 400ms;
                                    }
                                    &:nth-child(4) {
                                        transition: ease-out 200ms;
                                    }
                                    &:nth-child(5) {
                                        transition: ease-out 100ms;
                                    }
                                }
                            }
                            .CTA {
                                width: 100%;
                                margin-top: 100px;
                                opacity: 0;
                                transition: 100ms ease-out;
                                .inputCommon {
                                    margin-bottom: 20px;
                                }
                                &-title {
                                    font-size: 16px;
                                    margin-bottom: 10px;
                                }
                                .language {
                                    &-current {
                                        gap: 10px;
                                    }
                                }
                            }
                        }
                    }
                    &.open {
                        width: 55vw;
                        transition: background-color 0.45s ease-in-out, width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms,
                            transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s;
                        .menu {
                            li {
                                will-change: transform;
                                transform: matrix(1, 0, 0, 1, 0, 0);
                                &:nth-child(1) {
                                    transition: ease-out 490ms;
                                }
                                &:nth-child(2) {
                                    transition: ease-out 450ms;
                                }
                                &:nth-child(3) {
                                    transition: ease-out 500ms;
                                }
                                &:nth-child(4) {
                                    transition: ease-out 550ms;
                                }
                                &:nth-child(5) {
                                    transition: ease-out 600ms;
                                }
                            }
                        }
                        .CTA {
                            opacity: 1;
                            transition: 0.4s ease-in-out 500ms;
                        }
                    }
                    @media (max-width: 1024px) {
                        .Navigate {
                            display: flex;
                        }
                    }
                    @media (max-width: 1180px) and (max-height: 820px) {
                        .Navigate {
                            display: flex;
                        }
                    }
                    @media (max-width: 880px) {
                        .Navigate {
                            &.open {
                                width: 75vw;
                            }
                        }
                    }
                    @media (max-width: 690px) {
                        .Navigate {
                            &.open {
                                width: 100%;
                            }
                        }
                    }
                    @media (max-width: 520px) {
                        .Navigate {
                            &__content {
                                .menu {
                                    li {
                                        a {
                                            font-size: 30px;
                                        }
                                    }
                                }
                            }
                            &.open {
                                width: 100%;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
