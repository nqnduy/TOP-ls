import NewsPromotionList from "@/website/pages/NewsPromotionPage/NewsPromotionList";
import WhatNew from "@/website/section/WhatNew";
import React from "react";

export default function NewPromotionPage() {
    return (
        <>
            <WhatNew hasViewMore={false} />
            <NewsPromotionList />
            <style jsx global>{`
                .WhatNew {
                    padding-top: 200px;
                    padding-bottom: 70px;
                    background-color: #05005e;
                }
            `}</style>
        </>
    );
}
NewPromotionPage.propTypes = {};
