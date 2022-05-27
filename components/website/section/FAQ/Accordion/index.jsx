import React from "react";
import { variable } from "styles/variable";
function Accordion({ title, content, open, ...e }) {
    return (
        <>
            <div className={`Accordion flexSB ${open ? "open" : ""}`} {...e}>
                <div>
                    <div className="headline">{title}</div>
                    <div className="content">{content}</div>
                </div>
                <div>
                    <div className="icon">
                        <div className="y"></div>
                        <div className="x"></div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .Accordion {
                    --iconSize: 20px;
                    width: 100%;
                    column-gap: 45px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
                    padding: 35px 0 24px 0;
                    transition: 0.4s ease-out;
                    cursor: pointer;
                    .headline {
                        font-size: 21px;
                        line-height: 32px;
                        color: ${variable.color.purple};
                        transition: 0.2s ease-out;
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
                    .content {
                        margin-top: 13px;
                        opacity: 0;
                        max-height: 0;
                        transition: 0.4s ease-out;
                    }
                    .icon {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: var(--iconSize);
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        border-radius: 50%;
                        cursor: pointer;
                        transition: 0.2s ease-out;
                        .y {
                            opacity: 1;
                            position: absolute;
                            height: 13px;
                            width: 1px;
                            background-color: rgba(255, 255, 255, 0.5);
                            border-radius: 3px;
                            transition: 0.2s ease-out;
                        }
                        .x {
                            position: absolute;
                            width: 13px;
                            height: 1px;
                            background-color: rgba(255, 255, 255, 0.5);
                            border-radius: 3px;
                            transition: 0.2s ease-out;
                        }
                    }
                    &:hover {
                        .headline {
                            color: #fff;
                            transition: 0.2s ease-out;
                        }
                        .icon {
                            background-color: ${variable.color.secondary};
                            border-color: ${variable.color.secondary};
                            transition: 0.2s ease-out;
                        }
                    }
                    &.open {
                        width: 100%;

                        transition: 0.4s ease-out;
                        .headline {
                            color: #fff;
                            transition: 0.2s ease-out;
                        }
                        .content {
                            opacity: 1;
                            height: auto;
                            max-height: 500px;
                            transition: 0.4s ease-out;
                        }
                        .icon {
                            background-color: ${variable.color.secondary};
                            border-color: ${variable.color.secondary};
                            transition: 0.2s ease-out;
                            .y {
                                opacity: 0;
                                transition: 0.2s ease-out;
                            }
                            .x,
                            .y {
                                background-color: #fff;
                                transition: 0.2s ease-out;
                            }
                        }
                    }
                }
                @media (max-width: 1220px) {
                    .Accordion {
                        --iconSize: 18px;
                    }
                }
            `}</style>
        </>
    );
}

export default Accordion;
