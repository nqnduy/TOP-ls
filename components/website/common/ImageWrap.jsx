import asset from "@/plugins/assets/asset";
import React from "react";

export default function ImageWrap({ src, gif, bora = "0px", ...props }) {
    return (
        <>
            <style jsx>{`
                .ImageWrap {
                    position: relative;
                    overflow: hidden;
                    border-radius: ${bora};
                    div {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-size: cover !important;
                        transition: all 0.4s ease-out;
                    }
                    img {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="ImageWrap">
                <div style={{ background: `url(${src}) no-repeat center` }}></div>
                <img src={asset(gif)} {...props} />
            </div>
        </>
    );
}
