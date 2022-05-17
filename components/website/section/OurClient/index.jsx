import TextTitle from "@/components/website/common/TextTitle";
import BrandGroup from "@/components/website/section/OurClient/BrandGroup";
import React from "react";

export default function OurClient() {
    return (
        <div className="OurClient">
            <div className="container flex">
                <div className="w50">
                    <TextTitle
                        small_text="Our Clients"
                        big_text="Many units when working
with us have referred
their friends to us"
                    />
                    <p className="txMain bold hoverText hoverText-pink hoverText-small">View More</p>
                </div>
                <div className="w50">
                    <p className="OurClient__description txMain purple normal w70">
                        Our clients describe us as a product team which creates amazing UI/UX experiences, by dedication at work, always innovating to deliver
                        top-notch user experiences to them!
                    </p>
                    <BrandGroup />
                </div>
            </div>
            <style jsx global>{`
                .TextTitle {
                    width: 64%;
                }
                .OurClient {
                    background-color: #05005d;
                    padding: 90px 0;
                    &__description {
                        margin-bottom: 54px;
                    }
                }
            `}</style>
        </div>
    );
}

OurClient.propTypes = {};
