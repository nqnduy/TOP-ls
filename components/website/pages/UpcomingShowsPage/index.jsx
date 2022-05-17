import HeroBanner from "@/components/website/section/HeroBanner";
import Upcoming from "@/components/website/section/UpComing";
import React from "react";

export default function UpcomingShowsPage() {
    return (
        <>
            <HeroBanner searchBar={true} />
            <Upcoming isList={false} />
            <style jsx global>{`
                .Upcoming {
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    );
}
