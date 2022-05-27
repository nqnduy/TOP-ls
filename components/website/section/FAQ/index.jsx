import TextUnderline from "@/common/Text/TextUnderline";
import React from "react";
import { variable } from 'styles/variable';
import TextTitle from "../../common/TextTitle";
import AccordionList from "./Accordion/AccordionList";
function FAQ() {
    return (
        <div className="FAQ">
            <div className="container flex">
                <div className="FAQ__left">
                    <TextTitle small_text="support on Faqs" big_text="Awesome to know" />
                    <p className="FAQ__left-text content">
                        When an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <div className="FAQ__left-headline">
                        <TextUnderline color={variable.color.secondary} className="headline">
                            Frequently asked questions
                        </TextUnderline>
                        <TextUnderline color={variable.color.secondary} className="headline">
                            Payment and returns
                        </TextUnderline>
                        <TextUnderline color={variable.color.secondary} className="headline">
                            Managing your account
                        </TextUnderline>
                    </div>
                    <p className="content" style={{ marginBottom: 10 }}>
                        Still have any questions for your problem?
                    </p>
                    <TextUnderline className="requestLink content" color={variable.color.secondary} type="small">
                        Request Now!
                    </TextUnderline>
                </div>
                <div className="FAQ__right">
                    <AccordionList />
                </div>
            </div>
            <style jsx global>{`
                .FAQ {
                    &__left {
                        width: 43%;
                        &-text {
                            margin-bottom: 40px;
                            width: 75%;
                        }
                        &-headline {
                            .headline {
                                font-family: fm-m;
                                font-size: 18px;
                                line-height: 26px;
                                margin-bottom: 35px;

                                /*  Responsive   */
                                @media (max-width: 1220px) {
                                    font-size: 16px;
                                    line-height: 24px;
                                }
                                @media (max-width: 830px) {
                                    font-size: 15px;
                                    line-height: 20px;
                                }
                                @media (max-width: 730px) {
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                                @media (max-width: 500px) {
                                    font-size: 17px;
                                    line-height: 25px;
                                }
                            }
                        }
                        .requestLink {
                            font-family: fm-m;
                            font-weight: 700;
                        }
                    }
                    &__right {
                        width: 57%;
                    }
                    .container {
                        gap: 100px;
                    }
                }

                /*  Responsive   */
                @media (max-width: 1000px) {
                    .FAQ {
                        .container {
                            gap: 35px;
                        }
                        &__left {
                            width: 50%;
                        }
                    }
                }
                @media (max-width: 820px) {
                    .FAQ {
                        --fzr18: 18px;
                        --fzr16: 15px;
                        --fzr21: 19px;
                        .container {
                            gap: 0;
                            flex-direction: column;
                        }
                        &__left {
                            width: 100%;
                            margin-bottom: 100px;
                            &-text {
                                width: 60%;
                            }
                        }
                        &__right {
                            width: 100%;
                        }
                    }
                }
                @media (max-width: 750px) {
                    .FAQ__left-text {
                        width: 90%;
                    }
                }
                @media (max-width: 700px) {
                    .FAQ__left-text {
                        width: 100%;
                    }
                }
                @media (max-width: 500px) {
                    .FAQ {
                        --fzr21: 17px;
                        --fzr18: 17px;
                        -fzr16: 14px;
                    }
                }
            `}</style>
        </div>
    );
}
FAQ.propTypes = {};

export default FAQ;
