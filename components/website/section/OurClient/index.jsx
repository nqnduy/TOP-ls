import TextUnderline from '@/common/Text/TextUnderline';
import TextTitle from "@/components/website/common/TextTitle";
import BrandGroup from "@/components/website/section/OurClient/BrandGroup";
import React from "react";
import { variable } from 'styles/variable';

export default function OurClient() {
    return (
        <div className="OurClient">
            <div className="container">
                <div className="w50">
                    <TextTitle
                        small_text="Our Clients"
                        big_text="Many units when working with us have referred their friends to us"/>
                    <TextUnderline
                        type="small"
                        color={variable.color.secondary}
                        className="viewMore">
                        View More
                    </TextUnderline>
                </div>
                <div className="w50">
                    <p className="OurClient__description content">
                        Our clients describe us as a product team which creates amazing UI/UX experiences, by dedication at work, always innovating to deliver
                        top-notch user experiences to them!
                    </p>
                    <BrandGroup />
                </div>
            </div>
            <style jsx global>{`
                .OurClient {
                    background-color: #05005d;
                    padding: 90px 0;
                    .container{
                        display: flex;
                    }
                    .TextTitle {
                        width: 64%;
                    }
                    &__description {
                        margin-bottom: 54px;
                    }
                }
                @media (max-width: 820px) {
                    .OurClient {
                        .TextTitle {
                            width: 100%;
                        }
                        .container {
                            gap: 30px;
                            flex-direction: column;
                            justify-content: center;
                            .w50 {
                                margin: 0 auto;
                                width: 100%;
                            }
                            .BrandGroup {
                                grid-template-columns: repeat(3, 1fr);
                                row-gap: 35px;
                                div {
                                    width: 100%;
                                    justify-self: center;
                                }
                                div > img {
                                    width: 100%;
                                    margin: 0 auto;
                                }
                            }
                        }
                    }
                }
                @media (max-width: 500px) {
                    .OurClient {
                        .container {
                            .BrandGroup {
                                div {
                                    width: 115%;
                                }
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}

OurClient.propTypes = {};
