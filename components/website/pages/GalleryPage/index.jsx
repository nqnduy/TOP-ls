import TextUnderline from "@/common/Text/TextUnderline";
import GalleryThumb from "@/website/pages/GalleryPage/GalleryThumb";
import FeatureShowList from "@/website/section/ShowList/Feature";
import React from "react";
import { variable } from "styles/variable";
export default function GalleryPage() {
    return (
        <>
            <div className="GalleryPage">
                <FeatureShowList />
                <GalleryThumb />
                <div className="centerVM">
                    <TextUnderline type="small" color={variable.color.secondary} className="viewMore">
                        View More
                    </TextUnderline>
                </div>
            </div>

            <style jsx global>{`
                .GalleryPage {
                    padding-top: 200px;
                    padding-bottom: 40px;
                    .FeatureShowList {
                        margin-bottom: 70px;
                    }
                    .GalleryThumb {
                        margin-bottom: 50px;
                    }
                    @media (max-width: 1024px) {
                        padding-top: 80px;
                    }
                }
            `}</style>
        </>
    );
}
GalleryPage.propTypes = {};
