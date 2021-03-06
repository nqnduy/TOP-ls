import asset from '@/plugins/assets/asset';
import React from "react";

export default function BrandGroup({ column = 3 }) {
    return (
        <div className="BrandGroup">
            <div>
                <img src={asset("/images/icons/insta.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/webflow.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/intercom.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/evolved.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/classpass.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/cultureamp.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/discord.svg")} alt="" />
            </div>
            <div>
                <img src={asset("/images/icons/wealthsimple.svg")} alt="" />
            </div>
            <style jsx>{`
                .BrandGroup {
                    display: grid;
                    grid-template-columns: repeat(${column}, 1fr);
                    row-gap: 55px;
                }
                @media (max-width: 1200px) {
                    .BrandGroup {
                        div > img {
                            width: 75%;
                        }
                    }
                }
                @media (max-width: 900px) {
                    .BrandGroup {
                        grid-template-columns: repeat(2, 1fr);
                        row-gap: 35px;

                        div > img {
                            width: 60%;
                        }
                    }
                }
            `}</style>
        </div>
    );
}
