import Button from "@/website/common/Button/ButtonMain";
import Input from "@/website/common/Input";
import React from "react";
export default function ContactPage() {
    return (
        <>
            <div className="Contact">
                <div className="Contact__content flexCT flexCOL">
                    <p className="txMain bold fz-36">Get in touch</p>
                    <p className="txMain blue normal upc lspacing-1" style={{ marginBottom: 30 }}>
                        If you have any questions, feel Free Contact With Us!
                    </p>
                    <Input type="text" placeholder="Enter your name here..." />
                    <Input type="text" placeholder="Email address..." />
                    <Input.TextArea type="text" placeholder="Your message..." rows="3" />
                    <Button>Search now</Button>
                </div>
            </div>
            <style jsx>{`
                .Contact {
                    padding: {
                        top: 200px;
                        bottom: 70px;
                    }
                    &__content {
                        width: 40vw;
                        text-align: center;
                        margin: 0 auto;
                        gap: 20px;
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
