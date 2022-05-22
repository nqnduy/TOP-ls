import TextTitle from "@/components/website/common/TextTitle";
import NewsPromotionList from "@/website/pages/NewsPromotionPage/NewsPromotionList";
import WhatNew from "@/website/section/WhatNew";
import React from "react";

export default function NewPromotionPage() {
    return (
        <>
            <WhatNew hasViewMore={false} headline={<TextTitle small_text="what news?" big_text="Feature News" textAlign="center" />} />
            <NewsPromotionList />
            <style jsx global>{`
                .WhatNew {
                    padding-top: 200px;
                    padding-bottom: 70px;
                    background-color: #05005e;
                }
                @media (max-width: 1024px) {
                    .WhatNew {
                        padding-top: 100px;
                    }
                }
            `}</style>
        </>
    );
}
NewPromotionPage.propTypes = {};
