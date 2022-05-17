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
                    margin-bottom: 70px;
                }
                .GalleryThumb {
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    );
}
GalleryPage.propTypes = {};
