import ImageWrap from "@/common/ImageWrap";
import AppLink from "@/components/diginext/link/AppLink";
import React from "react";

export default function Logo() {
    return (
        <>
            <AppLink href="/">
                <div className="logo">
                    <ImageWrap src="/images/icons/logo.svg" gif="/images/gif/logo.gif" />
                </div>
            </AppLink>

            <style jsx>{`
                .logo {
                }
            `}</style>
        </>
    );
}
