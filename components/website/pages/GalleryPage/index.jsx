import GalleryThumb from "@/website/pages/GalleryPage/GalleryThumb";
import FeatureShowList from "@/website/section/ShowList/Feature";
import React from "react";
export default function GalleryPage() {
    return (
        <>
            <FeatureShowList />
            <GalleryThumb />
            <p className="txMain bold pink textALC hoverText hoverText-pink hoverText-small" style={{ margin: "0 auto" }}>
                View More
            </p>
            <style jsx global>{`
                .FeatureShowList {
                    padding-top: 200px;
                    margin-bottom: 70px;
                }
                .GalleryThumb {
                    margin-bottom: 50px;
                }
                @media (max-width: 1024px) {
                    .FeatureShowList {
                        padding-top: 100px;
                    }
                }
            `}</style>
        </>
    );
}
GalleryPage.propTypes = {};
