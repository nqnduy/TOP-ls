import React from "react";

export default function BrandGroup({ column = 3 }) {
    return (
        <div className="BrandGroup">
            <div>
                <img src="/images/icons/insta.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/webflow.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/intercom.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/evolved.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/classpass.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/cultureamp.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/discord.svg" alt="" />
            </div>
            <div>
                <img src="/images/icons/wealthsimple.svg" alt="" />
            </div>
            <style jsx>{`
                .BrandGroup {
                    display: grid;
                    grid-template-columns: repeat(${column}, 1fr);
                    row-gap: 55px;
                }
            `}</style>
        </div>
    );
}
