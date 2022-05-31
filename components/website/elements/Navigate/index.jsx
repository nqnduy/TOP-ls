import ImageWrap from "@/common/ImageWrap";
import Logo from "@/common/Logo";
import SocialGroup from "@/common/SocialGroup";
import TextUnderline from '@/common/Text/TextUnderline';
import AppLink from '@/diginext/link/AppLink';
import Hamburger from "@/website/elements/Navigate/Hamburger";
import Image from "next/image";
import React, { useState } from "react";
import { variable } from 'styles/variable';
import Input from "../../common/Input";

export default function Navigate() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState(true);
    const [selected, setSelected] = useState(false);
    const handleOpenNavigate = () => {
        setIsOpen(!isOpen);
    };
    const handleSelectLanguage = () => {
        setSelected(!selected);
    }
    return (
        <>
            <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <div className={`Navigate ${isOpen ? "open" : ""}`}>
                <div>
                    <div className="Navigate__content">
                        <div className="header">
                            <Logo />
                            <div className="action-user">
                                <div className="avt">
                                    <ImageWrap src="/images/avt1.png" gif="/images/gif/50x50.gif" bora={"50%"} />
                                </div>
                            </div>
                        </div>
                        <ul className="menu">
                            <li>
                                <AppLink href="/about-us">
                                    <TextUnderline color={variable.color.secondary} className="headline">
                                        About us
                                    </TextUnderline>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink href="/upcoming-shows">
                                    <TextUnderline color={variable.color.secondary} className="headline">
                                        Upcoming Shows
                                    </TextUnderline>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink href="/gallery">
                                    <TextUnderline color={variable.color.secondary} className="headline">
                                        Gallery
                                    </TextUnderline>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink href="/new-promotion">
                                    <TextUnderline color={variable.color.secondary} className="headline">
                                        News & Promotions
                                    </TextUnderline>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink href="/contact">
                                    <TextUnderline color={variable.color.secondary} className="headline">
                                        Contact
                                    </TextUnderline>
                                </AppLink>
                            </li>
                        </ul>
                        <div className="CTA">
                            <Input placeholder="Search..." />
                            <div className="CTA-title content">
                                Have any Questions? Call Us <strong>028 6673 8686</strong>
                            </div>
                            <div className="CTA-button">
                                <SocialGroup />
                                <div className="language content">
                                    <div className="language-current" onClick={handleSelectLanguage}>
                                        <span>English</span>
                                        <Image src="/images/icons/lang-arrow.svg" alt="lang-arrow" width={9.5} height={5.5} />
                                    </div>
                                    <div className={`language-select ${selected ? "" : "hide"}`}>Việt Nam</div>
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
                            .header {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                width: 100%;
                                .logo {
                                    text-align: center;
                                    width: 100px;
                                }
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
                                    .headline {
                                        @media (max-width: 920px) {
                                            font-size: 28px;
                                            line-height: 38px;
                                        }
                                        @media (max-width: 450px) {
                                            font-size: 20px;
                                            line-height: 28px;
                                        }
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
                                .content {
                                    font-family: fm-m;
                                    color: #fff;
                                }
                                &-title {
                                    text-transform: uppercase;
                                    margin-bottom: 10px;
                                }
                                &-button {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;

                                    cursor: pointer;
                                }
                                .language {
                                    &-current {
                                        display: flex;
                                        align-items: center;

                                        margin-right: -10px;
                                        > * {
                                            margin-right: 10px;
                                        }
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
