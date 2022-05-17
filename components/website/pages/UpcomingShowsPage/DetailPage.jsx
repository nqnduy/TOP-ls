import HeroBanner from "@/website/section/HeroBanner/index";
import UpcomingShowsDetail from "@/website/section/UpComing/Detail";
import React from "react";

export default function UpcomingShowsDetailPage() {
    return (
        <>
            <HeroBanner />
            <UpcomingShowsDetail />
            <style jsx global>{`
                .UpComingShowDetail {
                    margin-top: 100px;
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    );
}
