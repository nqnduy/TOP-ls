import React from "react";
import { variable } from "styles/variable";
export default function Hamburger({ open, ...e }) {
    return (
        <>
            <div className={`menu ${open ? "active" : "back"} `} {...e}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <style jsx>{`
                $t: 0.2s;
                $delay: 0.05s;
                $background: ${variable.color.purple};
                .menu {
                    display: none;
                    position: fixed;
                    overflow: hidden;
                    padding: 8px;
                    top: 20px;
                    right: 20px;
                    z-index: 110;
                    cursor: pointer;
                    &.active {
                        &:before {
                            animation: slideLeft $t $delay ease-out forwards;
                        }
                        &:after {
                            animation: slideRight $t $delay ease-out forwards;
                        }
                        .bar {
                            animation: rotate45 $t ease-out forwards;
                            &:last-child {
                                animation: rotate135 $t $t ease-out forwards;
                            }
                        }
                    }
                    &:hover {
                        &:before,
                        &:after {
                            background: ${variable.color.secondary};
                            transition: 0.3s ease;
                        }
                        .bar {
                            background: ${variable.color.secondary};
                            transition: 0.3s ease;
                        }
                    }

                    &.back {
                        &:before {
                            transform: translateX(-120%);
                            animation: slideBack $t $delay ease-out forwards;
                        }
                        &:after {
                            transform: translateX(120%);
                            animation: slideBack $t $delay ease-out forwards;
                        }
                        .bar {
                            transform: rotate(-45deg);
                            animation: rotateBack $t ease-out forwards;
                            &:last-child {
                                transform: rotate(-135deg);
                                animation: rotateBack $t $t ease-out forwards;
                            }
                        }
                    }
                    &:before {
                        content: "";
                        display: block;
                        width: 40px;
                        height: 4px;
                        background: $background;
                        transition: 0.3s ease;
                    }
                    &:after {
                        content: "";
                        display: block;
                        width: 40px;
                        height: 4px;
                        background: $background;
                        transition: 0.3s ease;
                    }

                    .bar {
                        display: block;
                        width: 40px;
                        height: 4px;
                        background: $background;
                        margin: 8px 0;
                        transition: 0.3s ease;

                        &:last-child {
                            opacity: 0;
                            transform: rotate(-45deg);
                            position: absolute;
                            top: 12px;
                        }
                    }
                }
                @media (max-width: 1180px) and (max-height: 820px) {
                    .menu {
                        display: block;
                        top: 5px;
                        right: 5px;
                    }
                }
                @media (max-width: 1024px) {
                    .menu {
                        display: block;
                    }
                }
                @keyframes rotate135 {
                    form {
                        opacity: 1;
                        transform: rotate(-45deg);
                    }
                    to {
                        opacity: 1;
                        transform: rotate(-135deg);
                    }
                }

                @keyframes rotate45 {
                    to {
                        transform: rotate(-45deg);
                    }
                }
                @keyframes rotateBack {
                    to {
                        transform: rotate(0);
                    }
                }
                @keyframes slideRight {
                    to {
                        transform: translateX(122%);
                    }
                }
                @keyframes slideLeft {
                    to {
                        transform: translateX(-122%);
                    }
                }
                @keyframes slideBack {
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
