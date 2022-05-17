import ImageWrap from "@/common/ImageWrap";
import asset from "@/plugins/assets/asset";
import React from "react";

export default function Logo() {
    return (
        <>
            <div className="logo">
                <ImageWrap src={asset("/images/icons/logo.svg")} gif="/images/gif/logo.gif" />
            </div>
            <style jsx>{`
                .logo {
                }
            `}</style>
        </>
    );
}
