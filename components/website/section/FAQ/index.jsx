import React from "react";
import TextTitle from "../../common/TextTitle";
import AccordionList from "./Accordion/AccordionList";
function FAQ() {
    return (
        <div className="FAQ">
            <div className="container flex">
                <div className="FAQ__left">
                    <TextTitle small_text="support on Faqs" big_text="Awesome to know" />
                    <p className="FAQ__left-text fz-16 txMain purple normal">
                        When an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <p className="txMain bold fz-18 headline hoverText hoverText-pink">Frequently asked questions</p>
                    <p className="txMain bold fz-18 headline hoverText hoverText-pink">Payment and returns</p>
                    <p className="txMain bold fz-18 headline hoverText hoverText-pink">Managing your account</p>
                    <p className="txMain normal fz-16 purple" style={{ marginBottom: 10 }}>
                        Still have any questions for your problem?{" "}
                    </p>
                    <p className="txMain fz-16 bold hoverText hoverText-pink hoverText-small">Request Now!</p>
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
                    }
                    &__right {
                        width: 57%;
                    }
                    .container {
                        gap: 100px;
                        .headline {
                            margin-bottom: 35px;
                        }
                    }
                    &__left {
                    }
                }
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
                            gap: 100px;
                            flex-direction: column;
                        }
                        &__left {
                            width: 100%;
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
