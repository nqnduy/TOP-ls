import Banner from "@/website/pages/GalleryDetailPage/Banner";
import MomentList from "@/website/pages/GalleryDetailPage/MomentList";
import Testimonial from "@/website/pages/GalleryDetailPage/Testimonial";
import React from "react";

export default function GalleryDetailPage() {
    return (
        <>
            <div className="GalleryDetail">
                <Banner />
                <MomentList />
                <Testimonial />
            </div>
            <style jsx global>{`
                .GalleryDetail {
                    padding-top: 200px;
                    padding-bottom: 70px;
                }
                .slick-list {
                    padding: 0 !important;
                }
                @media (max-width: 1024px) {
                    .GalleryDetail {
                        padding-top: 100px;
                    }
                }
            `}</style>
        </>
    );
}

GalleryDetailPage.propTypes = {};
