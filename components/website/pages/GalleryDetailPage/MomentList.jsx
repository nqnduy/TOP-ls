import MomentCard from "@/website/common/Card/MomentCard";
import React from "react";

export default function MomentList() {
    return (
        <>
            <div className="MomentList">
                <div className="container flexCOL flexAC">
                    <h3 className="txMain bold fz-36 textALC w50" style={{ marginBottom: 40 }}>
                        Let's take a look back at the great moments in our gallery
                    </h3>
                    <div className="MomentList__content">
                        <MomentCard image="/images/gallery1.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery2.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery3.png" title="It is a long established fact" />
                        <MomentCard image="/images/gallery4.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery5.png" title="It is a long established fact" />
                        <MomentCard image="/images/gallery6.png" title="It is a long established fact" />
                        <MomentCard image="/images/gallery7.png" title="It is a long established fact" type="video" />
                        <MomentCard image="/images/gallery1.png" title="It is a long established fact" />
                        <MomentCard image="/images/gallery2.png" title="It is a long established fact" />
                        <MomentCard image="/images/gallery3.png" title="It is a long established fact" />
                    </div>
                    <div className="txMain pink bold hoverText hoverText-pink hoverText-small">Load More</div>
                </div>
            </div>
            <style jsx global>{`
                .MomentList {
                    margin-bottom: 100px;
                    &__content {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(4, 1fr);
                        gap: 30px;
                        grid-auto-rows: 501px;
                        overflow: hidden;
                        margin-bottom: 50px;
                        .MomentCard {
                            &:nth-child(10n + 2) {
                                grid-column: 2/4;
                            }
                            &:nth-child(10n + 6) {
                                grid-column: 1/3;
                            }
                        }
                    }
                }
            `}</style>
        </>
    );
}
