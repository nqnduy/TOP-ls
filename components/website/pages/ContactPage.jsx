import Button from "@/website/common/Button/ButtonMain";
import Input from "@/website/common/Input";
import React from "react";
import TextTitle from "../common/TextTitle";
export default function ContactPage() {
    return (
        <>
            <div className="Contact">
                <div className="Contact__content">
                    <TextTitle big_text={"Get in touch"} small_text={"If you have any questions, feel Free Contact With Us!"} textAlign="center" />
                    <Input type="text" placeholder="Enter your name here..." />
                    <Input type="text" placeholder="Email address..." />
                    <Input.TextArea type="text" placeholder="Your message..." rows="3" />
                    <Button>Search now</Button>
                </div>
            </div>
            <style jsx global>{`
                .Contact {
                    padding: {
                        top: 200px;
                        bottom: 70px;
                    }
                    &__content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        width: 40vw;
                        text-align: center;
                        margin: 0 auto;
                        gap: 20px;
                        .TextTitle {
                            display: flex;
                            flex-direction: column-reverse;
                            margin-bottom: 20px;
                        }
                    }
                }
                @media (max-width: 1100px) {
                    .Contact {
                        --fzr36: 32px;
                    }
                }
                @media (max-width: 1024px) {
                    .Contact {
                        padding: {
                            top: 100px;
                        }
                    }
                }
                @media (max-width: 920px) {
                    .Contact {
                        &__content {
                            width: 45vw;
                        }
                    }
                }
                @media (max-width: 700px) {
                    .Contact {
                        &__content {
                            width: 50vw;
                        }
                    }
                }
                @media (max-width: 600px) {
                    .Contact {
                        --fzr36: 28px;
                        --fzrMain: 11px;
                        &__content {
                            width: 70vw;
                        }
                    }
                }
            `}</style>
        </>
    );
}
ContactPage.propTypes = {};
