import GalleryCard from "@/website/common/Card/GalleryCard";
import React from "react";

export default function GalleryThumb() {
    return (
        <>
            <div className="GalleryThumb">
                <div className="container">
                    <div className="GalleryThumb__title txMain bold fz-21">Let's take a look back at the great moments in our gallery</div>
                    <div className="GalleryThumb__grid">
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv2.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv1.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv2.png" title="XinChao Da Lat" time="feb 27, 2022" />
                        <GalleryCard image="/images/prv3.png" title="XinChao Da Lat" time="feb 27, 2022" />
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .GalleryThumb {
                        &__title {
                            margin-bottom: 35px;
                        }
                        &__grid {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 26px;
                        }
                    }
                `}
            </style>
        </>
    );
}
