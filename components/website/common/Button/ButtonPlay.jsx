import asset from "@/plugins/assets/asset";
import React from "react";

export default function ButtonPlay({ position = "" }) {
    return (
        <>
            <div className={`iconPlay ${position}`}>
                <img src={asset("/images/icons/play.svg")} alt="" />
            </div>
            <style jsx>{`
                .iconPlay {
                    transition: 0.3s;
                    z-index: 3;
                    img {
                        width: 70px;
                        height: auto;
                    }
                    &.center {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        &:hover {
                            transform: translate(-50%, -50%) scale(1.1);
                        }
                    }
                    &:hover {
                        transform: scale(1.1);
                        transition: 0.3s;
                        cursor: pointer;
                    }
                }
            `}</style>
        </>
    );
}
